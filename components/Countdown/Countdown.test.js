import React from "react";
import {render} from '@testing-library/react-native';
import Countdown from "./Countdown";

describe("Countdown Component", () => {
    it("should display the correct time", () => {
        const {getByTestId, rerender} = render(<Countdown totalTime={60} />);
        const countDown = getByTestId('countDown');
        expect(countDown.props.children).toBe('1:00');

        rerender(<Countdown totalTime={600} />)
        expect(countDown.props.children).toBe('10:00');

        /*rerender(<Countdown totalTime={-1} />)
        expect(countDown.props.children).toBe('00');*/

        rerender(<Countdown totalTime={"1"} />)
        expect(countDown.props.children).toBe('01');

        /*rerender(<Countdown totalTime={"hello"} />)
        expect(countDown.props.children).toBe('00:00');*/
    });
});