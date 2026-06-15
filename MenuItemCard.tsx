import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { MenuItem } from './MenuItem';

type Props = {
  item: MenuItem;
  onRemove?: () => void;
};

export default function MenuItemCard({ item, onRemove }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.course}>{item.course}</Text>
      </View>
      <Text style={styles.price}>R{item.price.toFixed(2)}</Text>
      <Text style={styles.description}>{item.description}</Text>
      {onRemove && (
        <View style={styles.buttonWrapper}>
          <Button title="Remove" onPress={onRemove} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  course: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    color: '#444',
    marginBottom: 8,
  },
  buttonWrapper: {
    alignSelf: 'flex-start',
  },
});
