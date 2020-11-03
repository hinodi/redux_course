import React from 'react';
import {SafeAreaView, StyleSheet, Button, Text} from 'react-native';
import {connect} from 'react-redux';
import {increment, decrement} from './src/redux/actions';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{this.props.number}</Text>
        <Button title="Increase" onPress={this.props.increment} />
        <Button title="Decrease" onPress={this.props.decrement} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000ff20',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
  },
});

const mapStateToProps = (state) => {
  return {
    number: state.number,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
