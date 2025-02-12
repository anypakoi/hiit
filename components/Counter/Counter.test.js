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

  it('debería renderizar correctamente y actualizar el tiempo', async () => {
    const props = {
      workTime: 25, // 25 minutos
      breakTime: 5, // 5 minutos
      restTime: 4,  // Cada 4 ciclos, un descanso largo
      timeCycle: 2, // Multiplicador de ciclo
      unitTime: 60, // 1 minuto en segundos
    };

    // Renderizar el componente Counter
    const { getByTestId } = render(<Counter {...props} />);

    // Verificar que Countdown se renderiza con el tiempo inicial correcto
    const countdownElement = getByTestId('countDown');
    expect(countdownElement.props.children).toBe('25:00'); // Formato esperado: "mm:ss"

    // Avanzar el tiempo para simular el paso de los segundos
    act(() => {
      jest.advanceTimersByTime(1000); // Avanzar 1 segundo
    });

    // Verificar que el tiempo en Countdown ha disminuido
    expect(countdownElement.props.children).toBe('24:59');

    // Avanzar el tiempo hasta que totalTime <= 3
    act(() => {
      jest.advanceTimersByTime((props.workTime * props.unitTime - 4) * 1000); // Avanzar hasta que queden 3 segundos
    });

    // Verificar que el tiempo en Countdown es 0:03
    expect(countdownElement.props.children).toBe('03');

    // Verificar que Alarm se activa (simulando la reproducción del sonido)
    const alarmSoundMock = require('expo-av').Audio.Sound.createAsync;
    expect(alarmSoundMock).toHaveBeenCalled(); // Verificar que se intentó reproducir el sonido
  });
});