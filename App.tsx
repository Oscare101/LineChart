import React from 'react';
import {StyleSheet, View} from 'react-native';
import LineChart from './LineChart/LineChart';

export default function App() {
  const items = [
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
  ];

  return (
    <View style={styles.container}>
      <LineChart
        containerStyles={{
          backgroundColor: '#000',
          borderRadius: 5,
        }}
        items={items}
        dotSize={3}
        dotColor="#a5cae8"
        lineColor="#a5cae840"
        lineWidth={2}
        columnHeight={50}
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
