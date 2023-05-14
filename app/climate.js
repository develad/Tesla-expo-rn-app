import { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// @ts-ignore
import climateImage from '../assets/images/climate.png';
// @ts-ignore
import climateImageCold from '../assets/images/climateCold.png';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ClimateScreen = () => {
  const router = useRouter();

  const [temperature, setTemperature] = useState(72);
  const [on, setOn] = useState(false);
  const [vent, setVent] = useState(false);

  return (
    <>
      {/* <StatusBar style='inverted' /> */}
      <View style={styles.container}>
        {temperature <= 70 ? (
          <Image
            source={climateImageCold}
            style={styles.image}
            resizeMode='cover'
          />
        ) : (
          <Image
            source={climateImage}
            style={styles.image}
            resizeMode='cover'
          />
        )}

        <Pressable
          onPress={() => router.back()}
          style={styles.back}
        >
          <Entypo
            name='chevron-left'
            size={24}
            color='white'
          />
        </Pressable>

        <View style={styles.footer}>
          <Text style={styles.label}>Interior 74°F - Exterior 66°F</Text>

          <View style={styles.controlsRow}>
            <Pressable
              onPress={() => setOn(!on)}
              style={styles.iconButtonContainer}
            >
              <MaterialCommunityIcons
                name='power'
                size={42}
                color={on ? 'white' : 'gray'}
              />
              <Text style={styles.iconButtonText}>{on ? 'On' : 'Off'}</Text>
            </Pressable>

            <View style={styles.temperatureContainer}>
              <Entypo
                name='chevron-left'
                size={30}
                color='gray'
                onPress={() =>
                  temperature === 65 ? '' : setTemperature(temperature - 1)
                }
              />
              <Text style={styles.temperatureText}>{temperature}°</Text>
              <Entypo
                name='chevron-right'
                size={30}
                color='gray'
                onPress={() =>
                  temperature === 75 ? '' : setTemperature(temperature + 1)
                }
              />
            </View>

            <Pressable
              onPress={() => setVent(!vent)}
              style={styles.iconButtonContainer}
            >
              <MaterialCommunityIcons
                name='car-door'
                size={42}
                color={vent ? 'white' : 'gray'}
              />
              <Text style={styles.iconButtonText}>
                {vent ? 'Vent' : 'Airflow'}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161818',
  },
  back: {
    position: 'absolute',
    top: 50,
    right: 25,
    backgroundColor: '#2f3030',
    padding: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 2,
  },
  image: {
    width: '100%',
    height: '65%',
  },
  footer: {
    alignItems: 'center',
    padding: 12,
    marginBottom: 20,
    marginTop: 'auto',
  },
  label: {
    color: 'gray',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 20,
  },
  controlsRow: {
    flexDirection: 'row-reverse',
    width: '100%',
    justifyContent: 'space-around',
  },
  temperatureContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  temperatureText: {
    fontSize: 48,
    fontWeight: '300',
    color: 'white',
    marginHorizontal: 20,
  },
  iconButtonContainer: {
    alignItems: 'center',
    flex: 1,
  },
  iconButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
});

export default ClimateScreen;
