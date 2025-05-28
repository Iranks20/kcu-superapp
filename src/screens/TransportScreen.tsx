import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Transport: undefined;
};

const TransportScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const transportServices = [
    { id: '1', name: 'Ride Hailing', icon: '🚕', color: '#E0F2FE', description: 'Book a ride' },
    { id: '2', name: 'Public Transport', icon: '🚌', color: '#E0F2FE', description: 'Bus & Train tickets' },
    { id: '3', name: 'Parking', icon: '🅿️', color: '#E0F2FE', description: 'Find & pay for parking' },
    { id: '4', name: 'Fuel', icon: '⛽', color: '#E0F2FE', description: 'Pay for fuel' },
    { id: '5', name: 'Flights', icon: '✈️', color: '#E0F2FE', description: 'Book flights' },
  ];

  const upcomingFlights = [
    { id: '1', from: 'New York', to: 'London', date: 'May 15, 2024', time: '10:00 AM', airline: 'British Airways', flightNo: 'BA178' },
    { id: '2', from: 'London', to: 'Paris', date: 'May 20, 2024', time: '2:30 PM', airline: 'Air France', flightNo: 'AF123' },
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
        <Text style={styles.headerTitle}>e-Transport</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Services Grid */}
        <View style={styles.servicesGrid}>
          {transportServices.map((service) => (
            <TouchableOpacity key={service.id} style={styles.serviceCard}>
              <View style={[styles.serviceIcon, { backgroundColor: service.color }]}>
                <Text style={styles.serviceIconText}>{service.icon}</Text>
              </View>
              <Text style={styles.serviceName}>{service.name}</Text>
              <Text style={styles.serviceDescription}>{service.description}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Upcoming Flights */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Flights</Text>
          <View style={styles.flightsList}>
            {upcomingFlights.map((flight) => (
              <View key={flight.id} style={styles.flightCard}>
                <View style={styles.flightHeader}>
                  <Text style={styles.flightRoute}>{flight.from} → {flight.to}</Text>
                  <Text style={styles.flightNumber}>{flight.flightNo}</Text>
                </View>
                <Text style={styles.airlineName}>{flight.airline}</Text>
                <View style={styles.flightDetails}>
                  <View style={styles.flightTime}>
                    <Text style={styles.flightDate}>{flight.date}</Text>
                    <Text style={styles.flightTimeText}>{flight.time}</Text>
                  </View>
                  <TouchableOpacity style={styles.checkInButton}>
                    <Text style={styles.checkInButtonText}>Check-in</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Recent Trips */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Trips</Text>
          <View style={styles.tripsList}>
            <View style={styles.tripItem}>
              <View style={styles.tripIcon}>
                <Text style={styles.tripIconText}>🚕</Text>
              </View>
              <View style={styles.tripDetails}>
                <Text style={styles.tripType}>Ride to Work</Text>
                <Text style={styles.tripTime}>Today, 9:00 AM</Text>
              </View>
              <Text style={styles.tripAmount}>$15.00</Text>
            </View>
            <View style={styles.tripItem}>
              <View style={styles.tripIcon}>
                <Text style={styles.tripIconText}>🚌</Text>
              </View>
              <View style={styles.tripDetails}>
                <Text style={styles.tripType}>Bus to Downtown</Text>
                <Text style={styles.tripTime}>Yesterday, 2:30 PM</Text>
              </View>
              <Text style={styles.tripAmount}>$2.50</Text>
            </View>
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
  tripsList: {
    gap: 12,
  },
  tripItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  tripIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0F2FE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  tripIconText: {
    fontSize: 20,
  },
  tripDetails: {
    flex: 1,
  },
  tripType: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 2,
  },
  tripTime: {
    fontSize: 12,
    color: '#6B7280',
  },
  tripAmount: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  flightsList: {
    gap: 16,
  },
  flightCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  flightHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  flightRoute: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  flightNumber: {
    fontSize: 14,
    color: '#6B7280',
  },
  airlineName: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
  },
  flightDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flightTime: {
    flex: 1,
  },
  flightDate: {
    fontSize: 14,
    color: '#111827',
    marginBottom: 4,
  },
  flightTimeText: {
    fontSize: 14,
    color: '#6B7280',
  },
  checkInButton: {
    backgroundColor: '#315B0E',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  checkInButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default TransportScreen; 