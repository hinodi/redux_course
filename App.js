import React from 'react';
import {SafeAreaView, StyleSheet, Button, Text} from 'react-native';
import {connect} from 'react-redux';
import {increment, decrement} from './src/redux/actions';
import {INCREMENT} from './src/redux/actionTypes';
import store from './src/redux/store';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{this.props.number}</Text>
        <Button title="Increase" onPress={this.props.increment} />
        <Button
          title="Increase"
          onPress={() => {
            store.dispatch({
              type: INCREMENT,
            });
          }}
        />
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
  return state;
};
export default connect(mapStateToProps, {increment, decrement})(App);
