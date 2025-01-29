import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import  configureStore  from 'redux-mock-store';
import Alarm from './Alarm';

jest.mock('../../config/config', () => ({
    SOUND_MAP: {
        'alarm1': 'sonido1.mp3',
        'alarm2': 'sonido2.mp3',
    }
}))

jest.mock('expo-av', () => ({
    Audio: {
        Sound: {
            createAsync: jest.fn().mockResolvedValue({
                sound: {
                    playAsync: jest.fn(),
                    unloadAsync: jest.fn()
                }
            })
        }
    }
}))

describe('Alarm Component', () => {
    const mockStore = configureStore([])

    it('should use correct sound file when soundAlarm is alarm1', async () => {
        const store = mockStore({
            config: {
                soundAlarm: 'alarm1'
            }
        });

        render(
            <Provider store={store}>
                <Alarm shouldPlay={true}/>
            </Provider>
        );

        expect(Audio.Sound.createAsync).toHaveBeenCalledWith('sonido1.mp3')
    });
});