import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Food: undefined;
};

const FoodScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const foodServices = [
    { id: '1', name: 'Food Delivery', icon: '🍕', color: '#FEF9C3', description: 'Order from restaurants' },
    { id: '2', name: 'Restaurants', icon: '🍽️', color: '#FEF9C3', description: 'Book a table' },
    { id: '3', name: 'Grocery', icon: '🛒', color: '#FEF9C3', description: 'Grocery delivery' },
    { id: '4', name: 'Meal Plans', icon: '📋', color: '#FEF9C3', description: 'Weekly meal plans' },
  ];

  const popularRestaurants = [
    { id: '1', name: 'Burger Palace', rating: '4.5', cuisine: 'Fast Food', deliveryTime: '20-30 min', image: '🍔' },
    { id: '2', name: 'Pizza Express', rating: '4.3', cuisine: 'Italian', deliveryTime: '25-35 min', image: '🍕' },
    { id: '3', name: 'Sushi Master', rating: '4.7', cuisine: 'Japanese', deliveryTime: '30-40 min', image: '🍱' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>e-Food</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Services Grid */}
        <View style={styles.servicesGrid}>
          {foodServices.map((service) => (
            <TouchableOpacity key={service.id} style={styles.serviceCard}>
              <View style={[styles.serviceIcon, { backgroundColor: service.color }]}>
                <Text style={styles.serviceIconText}>{service.icon}</Text>
              </View>
              <Text style={styles.serviceName}>{service.name}</Text>
              <Text style={styles.serviceDescription}>{service.description}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Popular Restaurants */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Restaurants</Text>
          <View style={styles.restaurantsList}>
            {popularRestaurants.map((restaurant) => (
              <TouchableOpacity key={restaurant.id} style={styles.restaurantCard}>
                <View style={styles.restaurantImage}>
                  <Text style={styles.restaurantImageText}>{restaurant.image}</Text>
                </View>
                <View style={styles.restaurantInfo}>
                  <Text style={styles.restaurantName}>{restaurant.name}</Text>
                  <Text style={styles.restaurantCuisine}>{restaurant.cuisine}</Text>
                  <View style={styles.restaurantDetails}>
                    <Text style={styles.restaurantRating}>⭐ {restaurant.rating}</Text>
                    <Text style={styles.restaurantDelivery}>{restaurant.deliveryTime}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    marginTop: -40,
  },
  header: {
    backgroundColor: '#315B0E',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    color: 'white',
    fontSize: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  placeholder: {
    width: 40,
  },
  content: {
    padding: 16,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 24,
  },
  serviceCard: {
    width: '47%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  serviceIconText: {
    fontSize: 24,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 12,
    color: '#6B7280',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  restaurantsList: {
    gap: 16,
  },
  restaurantCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  restaurantImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#FEF9C3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  restaurantImageText: {
    fontSize: 32,
  },
  restaurantInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  restaurantCuisine: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  restaurantDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantRating: {
    fontSize: 14,
    color: '#111827',
    marginRight: 12,
  },
  restaurantDelivery: {
    fontSize: 14,
    color: '#6B7280',
  },
});

export default FoodScreen; 