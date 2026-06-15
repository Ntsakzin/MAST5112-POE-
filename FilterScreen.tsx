import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MenuItemCard from './MenuItemCard';
import { MenuItem } from './MenuItem';

type Props = {
  menu: MenuItem[];
};

export default function FilterScreen({ menu }: Props) {
  const [selectedCourse, setSelectedCourse] = useState<MenuItem['course']>('Starters');
  const filtered = menu.filter(item => item.course === selectedCourse);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.filterContainer}>
        <Text style={styles.label}>Choose course</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedCourse}
            onValueChange={(value: MenuItem['course']) => setSelectedCourse(value)}
            style={styles.picker}
          >
            <Picker.Item label="Starters" value="Starters" />
            <Picker.Item label="Mains" value="Mains" />
            <Picker.Item label="Dessert" value="Dessert" />
          </Picker>
        </View>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.emptyText}>No items available for this course.</Text>}
        renderItem={({ item }) => <MenuItemCard item={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f5f9',
  },
  filterContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eceef0',
  },
  label: {
    marginBottom: 8,
    fontWeight: '600',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fafafa',
  },
  picker: {
    height: 50,
  },
  listContent: {
    padding: 16,
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 24,
  },
});
