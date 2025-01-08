import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';
import {Settings} from '../config/config';

class AppMenu extends React.Component {

  
    constructor(props) {
      super(props)
      this.state = {
        start: false,
        workTime: Settings.workTime,
        breakTime: Settings.breakTime,
        timeCycle: Settings.timeCycle,
        restTime: Settings.restTime
      }
    }
  
    onButtonPress = () => {
      this.props.navigation.navigate('Counter', {
        workTime: this.state.workTime,
        breakTime: this.state.breakTime,
        timeCycle: this.state.timeCycle,
        restTime: this.state.restTime
      });
    }
  
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text>Tiempo de trabajo (segundos):</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={this.state.workTime}
              onChangeText={(text) => this.setState({workTime: text})}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>Tiempo de descanso (segundos):</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={this.state.breakTime}
              onChangeText={(text) => this.setState({breakTime: text})}
            />
          </View>
          <View style={styles.sliderContainer}>
            <Text>Multiplicador de ciclo: {this.state.timeCycle}x</Text>
            <Text>({parseInt(this.state.timeCycle) * parseInt(this.state.breakTime)} segundos de descanso)</Text>
            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={5}
              step={1}
              value={parseInt(this.state.timeCycle)}
              onValueChange={(value) => this.setState({timeCycle: value.toString()})}
            />
          </View>
          <Button title='start' onPress={this.onButtonPress} />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputContainer: {
      marginBottom: 20,
      alignItems: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      width: 100,
      textAlign: 'center',
      marginTop: 5,
      borderRadius: 5,
    },
    sliderContainer: {
      width: '80%',
      alignItems: 'center',
      marginBottom: 20,
    },
    slider: {
      width: '100%',
      height: 40,
    },
  }); 

  export default AppMenu;