import React from 'react';
import {render} from '@testing-library/react-native';
import AppNavigator from './AppNavigator';

describe('AppNavigator', () => {
    it('renders correctly', () => {
        const {getByText} = render(<AppNavigator/>);
        expect(getByText('Start Timer')).toBeTruthy();
    });
});
