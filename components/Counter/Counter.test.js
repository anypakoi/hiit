import React from 'react';
import { render, act } from '@testing-library/react-native';
import Counter from './Counter';
import { useSelector } from 'react-redux';

// Mock de expo-av para evitar errores en las pruebas
jest.mock('expo-av', () => ({
  Audio: {
    Sound: {
      createAsync: jest.fn(() => Promise.resolve({ sound: {} })),
    },
  },
}));

// Mock de react-redux para simular el estado
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Integration Test: Counter, Countdown, and Alarm', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    // Configurar el mock de useSelector para devolver un valor predeterminado
    useSelector.mockImplementation((selector) =>
      selector({
        config: {
          soundAlarm: 'alarm clock', // Asignar un valor específico a soundAlarm
        },
      })
    );
  });
  afterEach(() => {jest.useRealTimers()})

  it('debería multiplicar breakTime por timeCycle cuando restTime es divisible por cycle', async () => {
    const props = {
      workTime: 30, 
      breakTime: 15, 
      restTime: 1,  // Ciclo de descanso cada 2 ciclos de trabajo
      timeCycle: 3, 
      unitTime: 1, 
    };
    
    // Renderizar el componente Counter
    const { getByTestId } = render(<Counter {...props} />);
  
    const countdownElement = getByTestId('countDown');
  
  // Avanzar el tiempo en incrementos de 100ms hasta el final del workTime + 1 segundo
    for (let i = 0; i <= (props.workTime * 10) + 10; i++) {
      act(() => { jest.advanceTimersByTime(100); });
    }
  
    // Verificar que totalTime es igual a breakTime * timeCycle
    expect(countdownElement.props.children).toBe((props.breakTime * props.timeCycle).toString()); 
  });
  
});
