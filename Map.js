import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';

const Map = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconPress = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.iconButton,
          activeIcon === 'icon1' && styles.activeIconButton,
        ]}
        onPress={() => handleIconPress('icon1')}
      >
        <AntDesign name="star" size={32} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.iconButton,
          activeIcon === 'icon2' && styles.activeIconButton,
        ]}
        onPress={() => handleIconPress('icon2')}
      >
        <Entypo name="heart" size={32} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.iconButton,
          activeIcon === 'icon3' && styles.activeIconButton,
        ]}
        onPress={() => handleIconPress('icon3')}
      >
        <FontAwesome name="rocket" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  iconButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
  },
  activeIconButton: {
    backgroundColor: 'blue',
  },
});

export default Map;
