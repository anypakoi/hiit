import React from 'react';
import { render, act } from '@testing-library/react-native';
import Counter from './Counter';
import Countdown from '../Countdown/Countdown';
import Alarm from '../Alarm/Alarm';

// Mock de los componentes Countdown y Alarm
jest.mock('../Countdown/Countdown', () => jest.fn(() => null));
jest.mock('../Alarm/Alarm', () => jest.fn(() => null));
const clearInterval = jest.fn();

describe('Counter Component', () => {
    it('initializes with correct initial state', () => {
        jest.useFakeTimers();

        const clearIntervalMock = jest.spyOn(global, 'clearInterval');

        props = {
        workTime : 25,
        unitTime : 60,
        restTime : 4,
        breakTime : 5,
        timeCycle : 1,
        }

        const {unmount} = render(<Counter {...props}/>);
        
        act(() => {
            jest.advanceTimersByTime((props.workTime * props.unitTime)*1000);
        });

        expect(Countdown).toHaveBeenCalledWith(
            expect.objectContaining({
                totalTime: 0,
            }),
            expect.anything()
        );

        expect(Alarm).toHaveBeenLastCalledWith(
            expect.objectContaining({
                shouldPlay: true,
            }),
            expect.anything()
        );

        unmount()

        expect(clearIntervalMock).toHaveBeenCalled();

        clearIntervalMock.mockRestore();

        jest.useRealTimers();
    });
});
