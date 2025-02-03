import React from 'react';
import { render, act } from '@testing-library/react-native';
import Counter from './Counter';
import Countdown from '../Countdown/Countdown';
import Alarm from '../Alarm/Alarm';
import ReactDOM from 'react-dom/client';

// Mock de los componentes Countdown y Alarm
jest.mock('../Countdown/Countdown', () => jest.fn(() => null));
jest.mock('../Alarm/Alarm', () => jest.fn(() => null));

describe('Counter Component', () => {
    it('initializes with correct initial state', () => {
        jest.useFakeTimers();

        const workTime = 25;
        const unitTime = 60;
        const restTime = 4;
        const breakTime = 5;
        const timeCycle = 1;

        act(() => {
            render(
            <Counter
            workTime={workTime}
            unitTime={unitTime}
            restTime={restTime}
            breakTime={breakTime}
            timeCycle={timeCycle}
            />);
        }) 

        jest.advanceTimersByTime(((workTime*unitTime)-2)*1000);


        expect(Countdown).toHaveBeenCalledWith(
            expect.objectContaining({
                totalTime: (workTime * unitTime),
            }),
            expect.anything()
        );

        expect(Alarm).toHaveBeenCalledWith(
            expect.objectContaining({
                shouldPlay: false,
            }),
            expect.anything()
        );

        jest.useRealTimers();
    });
});
