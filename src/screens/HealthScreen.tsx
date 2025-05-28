'use client';
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  ShopHome: undefined;
  Wallet: undefined;
  Social: undefined;
  Profile: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function HealthScreen() {
  const navigation = useNavigation<NavigationProp>();
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>e-Health</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.iconText}>🔔</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.profileButton}
              onPress={() => navigation.navigate('Profile')}
            >
              <Text style={styles.profileInitials}>AJ</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Health Summary */}
        <View style={styles.healthSummary}>
          <View style={styles.healthSummaryTop}>
            <View style={styles.healthIconContainer}>
              <Text style={styles.healthIcon}>❤️</Text>
            </View>
            <View>
              <Text style={styles.healthGreeting}>Hello, Alex</Text>
              <Text style={styles.healthStatus}>Your health looks good today!</Text>
            </View>
          </View>
          <View style={styles.healthStats}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>7,842</Text>
              <Text style={styles.statLabel}>Steps</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>3.2</Text>
              <Text style={styles.statLabel}>km</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>284</Text>
              <Text style={styles.statLabel}>kcal</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>68</Text>
              <Text style={styles.statLabel}>bpm</Text>
            </View>
          </View>
        </View>
        
        {/* Tab Navigation */}
        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Activity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Records</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Doctors</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Scrollable Content */}
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.contentContainer}>
          {/* Today's Activity */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Today's Activity</Text>
            <View style={styles.activityCard}>
              <View style={styles.activityHeader}>
                <View style={styles.activityIconContainer}>
                  <Text style={styles.activityIcon}>⏱️</Text>
                </View>
                <View>
                  <Text style={styles.activityTitle}>Activity Time</Text>
                  <Text style={styles.activitySubtitle}>Daily Goal: 30 min</Text>
                </View>
                <Text style={styles.activityValue}>24 min</Text>
              </View>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '80%' }]} />
              </View>
              <Text style={styles.progressText}>80% of daily goal</Text>
            </View>
            
            <View style={styles.statsGrid}>
              <View style={styles.statCard}>
                <View style={styles.statHeader}>
                  <View style={styles.statIconContainer}>
                    <Text style={styles.statIcon}>📈</Text>
                  </View>
                  <Text style={styles.statTitle}>Steps</Text>
                </View>
                <View style={styles.statContent}>
                  <View>
                    <Text style={styles.statNumber}>7,842</Text>
                    <Text style={styles.statGoal}>Goal: 10,000</Text>
                  </View>
                  <View style={styles.statChart}>
                    <View style={[styles.chartBar, { height: 16 }]} />
                    <View style={[styles.chartBar, { height: 24 }]} />
                    <View style={[styles.chartBar, { height: 32 }]} />
                    <View style={[styles.chartBar, { height: 20 }]} />
                    <View style={[styles.chartBar, { height: 40 }]} />
                    <View style={[styles.chartBar, { height: 28 }]} />
                  </View>
                </View>
              </View>
              
              <View style={styles.statCard}>
                <View style={styles.statHeader}>
                  <View style={styles.statIconContainer}>
                    <Text style={styles.statIcon}>❤️</Text>
                  </View>
                  <Text style={styles.statTitle}>Heart Rate</Text>
                </View>
                <View style={styles.statContent}>
                  <View>
                    <Text style={styles.statNumber}>68 <Text style={styles.statUnit}>bpm</Text></Text>
                    <Text style={styles.statStatus}>Normal</Text>
                  </View>
                  <View style={styles.heartRateChart}>
                    <Text style={styles.heartRateLine}>📈</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          
          {/* Upcoming Appointments */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>See All</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.appointmentCard}>
              <View style={styles.appointmentHeader}>
                <View style={styles.doctorIconContainer}>
                  <Text style={styles.doctorIcon}>👨‍⚕️</Text>
                </View>
                <View style={styles.appointmentInfo}>
                  <View>
                    <Text style={styles.doctorName}>Dr. Sarah Johnson</Text>
                    <Text style={styles.doctorSpecialty}>Cardiologist</Text>
                  </View>
                  <View style={styles.statusBadge}>
                    <Text style={styles.statusText}>Upcoming</Text>
                  </View>
                </View>
              </View>
              <View style={styles.appointmentDetails}>
                <View style={styles.detailItem}>
                  <Text style={styles.detailIcon}>📅</Text>
                  <Text style={styles.detailText}>Tomorrow, 10:00 AM</Text>
                </View>
                <View style={styles.detailItem}>
                  <Text style={styles.detailIcon}>📍</Text>
                  <Text style={styles.detailText}>City Hospital</Text>
                </View>
              </View>
              <View style={styles.appointmentActions}>
                <TouchableOpacity style={[styles.actionButton, styles.primaryButton]}>
                  <Text style={styles.primaryButtonText}>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.secondaryButton]}>
                  <Text style={styles.secondaryButtonText}>Reschedule</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          
          {/* Health Tips */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Health Tips</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>See All</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.tipsContainer}>
              <View style={styles.tipCard}>
                <View style={[styles.tipImage, { backgroundColor: '#4F46E5' }]} />
                <View style={styles.tipContent}>
                  <View style={styles.tipBadge}>
                    <Text style={styles.tipBadgeText}>Fitness</Text>
                  </View>
                  <Text style={styles.tipTitle}>5 Simple Exercises You Can Do at Your Desk</Text>
                  <Text style={styles.tipDescription}>
                    Stay active during your workday with these easy desk exercises that improve circulation and reduce stiffness.
                  </Text>
                  <TouchableOpacity>
                    <Text style={styles.readMoreText}>Read More</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.tipCard}>
                <View style={[styles.tipImage, { backgroundColor: '#10B981' }]} />
                <View style={styles.tipContent}>
                  <View style={styles.tipBadge}>
                    <Text style={styles.tipBadgeText}>Nutrition</Text>
                  </View>
                  <Text style={styles.tipTitle}>Healthy Meal Prep Ideas for Busy Professionals</Text>
                  <Text style={styles.tipDescription}>
                    Save time and eat well with these nutritious meal prep strategies that can be prepared in advance.
                  </Text>
                  <TouchableOpacity>
                    <Text style={styles.readMoreText}>Read More</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.iconText}>🏠</Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('ShopHome')}
        >
          <Text style={styles.iconText}>🛍️</Text>
          <Text style={styles.navText}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>➕</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Social')}
        >
          <Text style={styles.iconText}>💬</Text>
          <Text style={styles.navText}>Social</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.iconText}>👤</Text>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    marginTop: -33,
  },
  header: {
    backgroundColor: '#EC4899',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  iconText: {
    fontSize: 20,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  profileInitials: {
    color: '#EC4899',
    fontSize: 14,
    fontWeight: 'bold',
  },
  healthSummary: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  healthSummaryTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  healthIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  healthIcon: {
    fontSize: 24,
  },
  healthGreeting: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.9,
  },
  healthStatus: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  healthStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#FFFFFF',
    fontSize: 12,
    opacity: 0.9,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 6,
  },
  tabText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 80,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
    marginTop: -24,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  seeAllText: {
    color: '#EC4899',
    fontSize: 14,
    fontWeight: '500',
  },
  activityCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
  },
  activityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  activityIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activityIcon: {
    fontSize: 20,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
  },
  activitySubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  activityValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3B82F6',
    marginLeft: 'auto',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    marginBottom: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3B82F6',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'right',
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
  },
  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  statIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#DCFCE7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  statIcon: {
    fontSize: 16,
  },
  statTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
  },
  statContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  statUnit: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#6B7280',
  },
  statGoal: {
    fontSize: 12,
    color: '#6B7280',
  },
  statStatus: {
    fontSize: 12,
    color: '#6B7280',
  },
  statChart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 40,
  },
  chartBar: {
    width: 4,
    backgroundColor: '#34D399',
    borderRadius: 2,
    marginHorizontal: 2,
  },
  heartRateChart: {
    width: 64,
    height: 40,
  },
  heartRateLine: {
    fontSize: 24,
  },
  appointmentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  appointmentHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  doctorIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  doctorIcon: {
    fontSize: 24,
  },
  appointmentInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#6B7280',
  },
  statusBadge: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#4F46E5',
    fontSize: 12,
    fontWeight: '500',
  },
  appointmentDetails: {
    flexDirection: 'row',
    marginTop: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  detailIcon: {
    fontSize: 16,
    marginRight: 4,
    color: '#9CA3AF',
  },
  detailText: {
    fontSize: 14,
    color: '#4B5563',
  },
  appointmentActions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 16,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#EC4899',
  },
  secondaryButton: {
    backgroundColor: '#F3F4F6',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  secondaryButtonText: {
    color: '#4B5563',
    fontSize: 14,
    fontWeight: '500',
  },
  tipsContainer: {
    gap: 12,
  },
  tipCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  tipImage: {
    height: 128,
  },
  tipContent: {
    padding: 16,
  },
  tipBadge: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  tipBadgeText: {
    color: '#3B82F6',
    fontSize: 12,
    fontWeight: '500',
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
    marginTop: 8,
    marginBottom: 4,
  },
  tipDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  readMoreText: {
    color: '#EC4899',
    fontSize: 14,
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingVertical: 8,
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  addButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#EC4899',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
});