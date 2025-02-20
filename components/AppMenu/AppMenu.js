import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';

class AppMenu extends React.Component {

  
    constructor(props) {
      super(props)
      const { workTime, breakTime, timeCycle, restTime, unitTime, unit } = props.route.params;
      this.state = {
        start: false,
        workTime: workTime,
        breakTime: breakTime,
        timeCycle: timeCycle,
        restTime: restTime,
        unitTime: unitTime,
        unit: unit
      }
    }
  
    onButtonPress = () => {
      this.props.navigation.navigate('Counter', {
        workTime: this.state.workTime,
        breakTime: this.state.breakTime,
        timeCycle: this.state.timeCycle,
        restTime: this.state.restTime,
        unitTime: this.state.unitTime,
      });
    }
  
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text>Tiempo de trabajo (segundos):</Text>
            <TextInput
              testID='workTime'
              style={styles.input}
              keyboardType="numeric"
              value={this.state.workTime.toString()}
              onChangeText={(text) => this.setState({workTime: text})}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>Tiempo de descanso (segundos):</Text>
            <TextInput
              testID='breakTime'
              style={styles.input}
              keyboardType="numeric"
              value={this.state.breakTime.toString()}
              onChangeText={(text) => this.setState({breakTime: text})}
            />
          </View>
          <View style={styles.sliderContainer}>
            <Text>Multiplicador de ciclo: {this.state.timeCycle}x</Text>
            <Text>({parseInt(this.state.timeCycle) * parseInt(this.state.breakTime)} {this.state.unit} de descanso)</Text>
            <Slider
              testID='timeCycleSlider'
              style={styles.slider}
              minimumValue={1}
              maximumValue={5}
              step={1}
              value={parseInt(this.state.timeCycle)}
              onValueChange={(value) => this.setState({timeCycle: value.toString()})}
            />
          </View>
          <Button testID='buttonInit' title='start' onPress={this.onButtonPress} />
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