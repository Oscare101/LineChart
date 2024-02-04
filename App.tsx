import React from 'react';
import {StyleSheet, View} from 'react-native';
import LineChart from './LineChart/LineChart';

export default function App() {
  return (
    <View style={styles.container}>
      <LineChart
        items={[
          {value: 3},
          {value: 2.2},
          {value: 2.2},
          {value: 2.5},
          {value: 2.1},
          {value: 2.2},
          {value: 2.9},
          {value: 2.2},
          {value: 2.5},
          {value: 3},
          {value: 2.7},
          {value: 2.9},
        ]}
        dotSize={5} // OK
        lineWidth={2} // OK
        columnHeight={50} // OK
        containerStyles={{
          backgroundColor: '#FF0000',
          borderRadius: 2,
        }} // OK
        dotColor="#0f0" // OK
        lineColor="#00f" // OK
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
