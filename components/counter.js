import React from 'react';
import { View, StyleSheet } from 'react-native';
import Countdown from './Countdown';
import Alarm from './Alarm';

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      totalTime: props.workTime * 1,
      pomodoro: true,
      playAlarm: false,
      cycle: 1,
    };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(this.increaseNum, 1000)
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  increaseNum = () => {
    if (this.state.totalTime > 0) {
      this.setState(prevState => ({
        totalTime: prevState.totalTime - 1,
        playAlarm: false
      }))
      if (this.state.totalTime === 3) {
        this.setState({playAlarm: true})
      }
    } 
    else {
      this.setState(prevState => ({
        totalTime: this.state.pomodoro 
          ? (this.state.cycle % 10 === 0 
            ? this.props.breakTime * this.props.timeCycle * 60
            : this.props.breakTime * 60) 
          : this.props.workTime * 60,
        pomodoro: !prevState.pomodoro,
        cycle: prevState.cycle + 1,
      }))
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Countdown totalTime={this.state.totalTime} />
        <Alarm shouldPlay={this.state.playAlarm} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Counter;
  