import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function TaskTile({task}) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          style={styles.check}
          source={require('../../../assets/icons/circle_icon.png')}
        />
        <Text style={styles.title}>{task.title}</Text>
      </View>

      <Image
        style={styles.check}
        source={require('../../../assets/icons/bin_icon.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 18,
    fontSize: 16,
  },
  check: {
    width: 26,
    height: 26,
  },
});
