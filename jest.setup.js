// jest.setup.js
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Mock para react-native-gesture-handler
jest.mock('react-native-gesture-handler', () => {
    const GestureHandler = jest.requireActual('react-native-gesture-handler');
    return {
      ...GestureHandler,
      GestureHandlerRootView: ({ children }) => children, // Mock del contenedor
    };
  });

// Mock para console.error
console.error = jest.fn();

// Mock para console.warn
console.warn = jest.fn();

// Configuración global de Jest
jest.useFakeTimers();