import React from "react";
import {render, fireEvent } from "@testing-library/react-native"
import AppMenu from "./AppMenu";

describe('AppMenu', () => {
    it('deberia llamar a navigation.navigate con los parametros correctos', () => {
        const mockNavigate = jest.fn();
        const mockRoute = {
            params: {
            workTime: '30',
            breakTime: '15',
            timeCycle: '3',
            restTime: '10',
            unitTime: '1'
            },
        };

        const { getByText, getByDisplayValue, getByTestId } = render(
            <AppMenu navigation={{navigate: mockNavigate}} route={mockRoute} />
        );

        fireEvent.press(getByText('start'));

        expect(mockNavigate).toHaveBeenCalledWith('Counter', {
            workTime: '30',
            breakTime: '15',
            timeCycle: '3',
            restTime: '10',
            unitTime: '1'
        });

        expect(getByText('Tiempo de trabajo (segundos):')).toBeTruthy();
        const breakTimeInput = getByDisplayValue('15');
        expect(breakTimeInput).toBeTruthy();
        fireEvent.changeText(breakTimeInput,'20');
        expect(getByDisplayValue('20')).toBeTruthy();

        const slider = getByTestId('timeCycleSlider');
        fireEvent(slider, 'onValueChange', 2);
        expect(getByText('Multiplicador de ciclo: 2x')).toBeTruthy()
    });
});