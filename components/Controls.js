import { StyleSheet, View, Image } from 'react-native';
// @expo/vector-icons already installed
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from '@expo/vector-icons';

// @ts-ignore
import car from '../assets/images/car.png';

const Controls = () => {
  return (
    <>
      <Image
        source={car}
        style={styles.image}
        resizeMode='contain'
      />

      <View style={styles.controls}>
        <Entypo
          name='lock'
          size={26}
          color='gray'
        />
        <MaterialCommunityIcons
          name='fan'
          size={26}
          color='gray'
        />
        <FontAwesome5
          name='bolt'
          size={26}
          color='gray'
        />
        <Ionicons
          name='car-sport-sharp'
          size={26}
          color='gray'
        />
      </View>
    </>
  );
};

export default Controls;

const styles = StyleSheet.create({
  controls: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  image: {
    // backgroundColor: 'blue',
    // Default is flex stretch. Need to set the an height property
    width: '100%',
    height: 300,
  },
});
