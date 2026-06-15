import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text } from 'react-native';
import MenuItemCard from './MenuItemCard';
import { MenuItem } from './MenuItem';

type Props = {
  menu: MenuItem[];
  onRemove: (id: string) => void;
};

export default function ManageMenuScreen({ menu, onRemove }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={menu}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.emptyText}>No items to manage.</Text>}
        renderItem={({ item }) => (
          <MenuItemCard item={item} onRemove={() => onRemove(item.id)} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f5f9',
  },
  listContent: {
    padding: 16,
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 32,
  },
});
