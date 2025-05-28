'use client';
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Image,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Picker } from '@react-native-picker/picker';

type RootStackParamList = {
  Health: undefined;
  Profile: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

type Appointment = {
  id: number;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  location: string;
  address: string;
  image: string;
};

type AppointmentsData = {
  upcoming: Appointment[];
  past: Appointment[];
};

type TabType = 'upcoming' | 'past';

export default function MedicalAppointmentsScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [activeTab, setActiveTab] = useState<TabType>('upcoming');
  
  // Sample appointments data
  const appointments: AppointmentsData = {
    upcoming: [
      {
        id: 1,
        doctorName: "Dr. Sarah Johnson",
        specialty: "Cardiologist",
        date: "November 20, 2023",
        time: "10:30 AM",
        location: "Heart Care Center",
        address: "123 Medical Plaza, New York",
        image: "https://placehold.co/200x200/e2e8f0/1e293b?text=Dr.J"
      },
      {
        id: 2,
        doctorName: "Dr. Michael Chen",
        specialty: "Dermatologist",
        date: "December 5, 2023",
        time: "2:15 PM",
        location: "Skin Health Clinic",
        address: "456 Wellness Blvd, New York",
        image: "https://placehold.co/200x200/e2e8f0/1e293b?text=Dr.C"
      }
    ],
    past: [
      {
        id: 3,
        doctorName: "Dr. Emily Rodriguez",
        specialty: "General Physician",
        date: "October 15, 2023",
        time: "9:00 AM",
        location: "Community Health Center",
        address: "789 Care Street, New York",
        image: "https://placehold.co/200x200/e2e8f0/1e293b?text=Dr.R"
      },
      {
        id: 4,
        doctorName: "Dr. James Wilson",
        specialty: "Orthopedic Surgeon",
        date: "September 28, 2023",
        time: "11:45 AM",
        location: "Orthopedic Specialists",
        address: "321 Bone Avenue, New York",
        image: "https://placehold.co/200x200/e2e8f0/1e293b?text=Dr.W"
      }
    ]
  };

  // Sample specialties for booking
  const specialties = [
    "General Physician",
    "Cardiologist",
    "Dermatologist",
    "Orthopedic Surgeon",
    "Neurologist",
    "Pediatrician",
    "Gynecologist",
    "Ophthalmologist",
    "Dentist",
    "Psychiatrist"
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2563EB" translucent />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerLeft}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => navigation.navigate('Health')}
            >
              <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Medical Appointments</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.searchIcon}>🔍</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main content */}
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.content}>
          {/* Appointment tabs */}
          <View style={styles.tabsContainer}>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'upcoming' && styles.activeTab]}
              onPress={() => setActiveTab('upcoming')}
            >
              <Text style={[styles.tabText, activeTab === 'upcoming' && styles.activeTabText]}>
              Upcoming
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'past' && styles.activeTab]}
              onPress={() => setActiveTab('past')}
            >
              <Text style={[styles.tabText, activeTab === 'past' && styles.activeTabText]}>
              Past
              </Text>
            </TouchableOpacity>
          </View>

          {/* Appointments list */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {activeTab === 'upcoming' ? 'Upcoming Appointments' : 'Past Appointments'}
            </Text>
            
            {appointments[activeTab].length > 0 ? (
              <View style={styles.appointmentsList}>
                {appointments[activeTab].map((appointment: Appointment) => (
                  <View key={appointment.id} style={styles.appointmentCard}>
                    <View style={styles.appointmentHeader}>
                      <Image
                        source={{ uri: appointment.image }}
                        style={styles.doctorImage}
                      />
                      <View style={styles.doctorInfo}>
                        <Text style={styles.doctorName}>{appointment.doctorName}</Text>
                        <Text style={styles.doctorSpecialty}>{appointment.specialty}</Text>
                      </View>
                    </View>

                    <View style={styles.appointmentDetails}>
                      <View style={styles.detailRow}>
                        <Text style={styles.detailIcon}>📅</Text>
                        <View>
                          <Text style={styles.detailLabel}>Date</Text>
                          <Text style={styles.detailValue}>{appointment.date}</Text>
                        </View>
                      </View>
                      <View style={styles.detailRow}>
                        <Text style={styles.detailIcon}>⏰</Text>
                        <View>
                          <Text style={styles.detailLabel}>Time</Text>
                          <Text style={styles.detailValue}>{appointment.time}</Text>
                        </View>
                      </View>
                      <View style={styles.detailRow}>
                        <Text style={styles.detailIcon}>📍</Text>
                        <View>
                          <Text style={styles.detailLabel}>Location</Text>
                          <Text style={styles.detailValue}>{appointment.location}</Text>
                          <Text style={styles.detailAddress}>{appointment.address}</Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.actionButtons}>
                      <TouchableOpacity style={styles.rescheduleButton}>
                        <Text style={styles.rescheduleButtonText}>Reschedule</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.cancelButton}>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
            ) : (
              <View style={styles.emptyState}>
                <Text style={styles.emptyStateIcon}>📅</Text>
                <Text style={styles.emptyStateTitle}>No {activeTab} Appointments</Text>
                <Text style={styles.emptyStateText}>
                  You don't have any {activeTab} appointments scheduled.
                </Text>
              </View>
            )}
          </View>

          {/* Find a doctor */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Find a Doctor</Text>
            
            <View style={styles.formGroup}>
              <Text style={styles.label}>Select Specialty</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  style={styles.picker}
                  selectedValue=""
                  onValueChange={(value: string) => console.log(value)}
              >
                  <Picker.Item label="All Specialties" value="" />
                {specialties.map((specialty, index) => (
                    <Picker.Item key={index} label={specialty} value={specialty} />
                ))}
                </Picker>
              </View>
            </View>
            
            <View style={styles.formGroup}>
              <Text style={styles.label}>Location</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your location"
                placeholderTextColor="#9CA3AF"
              />
            </View>
            
            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.searchButtonText}>Search Doctors</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom action button */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonIcon}>+</Text>
          <Text style={styles.actionButtonText}>Book New Appointment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    marginTop: -35
  },
  header: {
    backgroundColor: '#2563EB',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 12,
  },
  backIcon: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  searchIcon: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 16,
  },
  content: {
    gap: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#2563EB',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  activeTabText: {
    color: '#2563EB',
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  appointmentsList: {
    gap: 16,
  },
  appointmentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  appointmentHeader: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  doctorImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
    marginBottom: 4,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#2563EB',
  },
  appointmentDetails: {
    gap: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  detailIcon: {
    fontSize: 16,
    marginRight: 12,
    marginTop: 2,
  },
  detailLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 2,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
  },
  detailAddress: {
    fontSize: 12,
    color: '#6B7280',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 16,
  },
  rescheduleButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#EFF6FF',
    borderRadius: 6,
    alignItems: 'center',
  },
  rescheduleButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2563EB',
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#FEF2F2',
    borderRadius: 6,
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#DC2626',
  },
  emptyState: {
    alignItems: 'center',
    padding: 32,
  },
  emptyStateIcon: {
    fontSize: 64,
    color: '#D1D5DB',
    marginBottom: 16,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1F2937',
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 6,
    overflow: 'hidden',
  },
  picker: {
    height: 40,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 6,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#1F2937',
  },
  searchButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  searchButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  actionContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    borderRadius: 8,
  },
  actionButtonIcon: {
    fontSize: 20,
    color: '#FFFFFF',
    marginRight: 8,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});