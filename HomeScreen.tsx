import React from 'react';
import { SafeAreaView, View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { averagePriceByCourse } from './calculations';
import MenuItemCard from './MenuItemCard';
import { MenuItem } from './MenuItem';

type Props = {
  menu: MenuItem[];
};

type RootStackParamList = {
  Home: undefined;
  AddItem: undefined;
  ManageMenu: undefined;
  Filter: undefined;
};

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen({ menu }: Props) {
  const navigation = useNavigation<HomeNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.heading}>Menu Summary</Text>
        <Text style={styles.summaryText}>Total items: {menu.length}</Text>
        <Text style={styles.summaryText}>Average Starters: R{averagePriceByCourse(menu, 'Starters')}</Text>
        <Text style={styles.summaryText}>Average Mains: R{averagePriceByCourse(menu, 'Mains')}</Text>
        <Text style={styles.summaryText}>Average Dessert: R{averagePriceByCourse(menu, 'Dessert')}</Text>
      </View>

      <View style={styles.buttonGroup}>
        <View style={styles.buttonWrapper}>
          <Button title="Add Item" onPress={() => navigation.navigate('AddItem')} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Manage Menu" onPress={() => navigation.navigate('ManageMenu')} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Filter" onPress={() => navigation.navigate('Filter')} />
        </View>
      </View>

      <FlatList
        data={menu}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.emptyText}>No menu items added yet.</Text>}
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
  summary: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eceef0',
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
  },
  buttonGroup: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  buttonWrapper: {
    marginBottom: 10,
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
