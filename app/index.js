import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
// @expo/vector-icons already installed

// import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

import MenuOption from '../components/MenuOption';

import menuOptions from '../assets/menuOptions';
import Controls from '../components/Controls';

export default function Page() {
  return (
    <>
      {/* <StatusBar style='inverted' /> */}
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

        {/* <Controls /> */}

        <FlatList
          showsVerticalScrollIndicator={false}
          data={menuOptions}
          renderItem={MenuOption}
          ListHeaderComponent={<Controls />}
        />
      </View>
    </>
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
});
