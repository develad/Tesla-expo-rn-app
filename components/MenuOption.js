import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
const MenuOption = ({ item }) => {
  return (
    <Link
      href={item.href}
      asChild
    >
      {/* The child element should handle a press event that is way we should use a Pressable component insteed of a View component */}

      <Pressable style={styles.optionRow}>
        {/* Icon */}

        {item.icon ? (
          <item.icon />
        ) : (
          <MaterialCommunityIcons
            // @ts-ignore
            name={item.iconName}
            size={26}
            color='gray'
          />
        )}

        {/* Text/Link */}
        <Text style={styles.optionText}>{item.name}</Text>
        {/* Icon */}
        <MaterialIcons
          name='keyboard-arrow-right'
          size={24}
          color='gray'
          style={{ marginLeft: 'auto' }}
        />
      </Pressable>
    </Link>
  );
};

export default MenuOption;

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: 'row-reverse',
    marginVertical: 20,
    alignItems: 'center',
  },
  optionText: {
    color: '#eee',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
});
