import { StyleSheet, Text, View, Image } from 'react-native';
// @expo/vector-icons already installed
import { FontAwesome } from '@expo/vector-icons';
// @ts-ignore
import car from '../assets/images/car.png';

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My model S</Text>
          <Text style={styles.subtitle}>Parked</Text>
        </View>
        <FontAwesome
          name='user-circle'
          size={30}
          color='gray'
        />
      </View>

      <Image
        source={car}
        style={styles.image}
        resizeMode='contain'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#161818',
  },
  header: {
    marginTop: 50,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#eee',
    marginBottom: 8,
  },
  subtitle: {
    color: 'gray',
    fontWeight: '500',
  },
  image: {
    // backgroundColor: 'blue',
    width: '100%',
    height: 300,
  },
});
