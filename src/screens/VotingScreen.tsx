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
  Voting: undefined;
};

const VotingScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const upcomingElections = [
    { id: '1', title: 'Student Council Elections', date: 'May 15, 2024', status: 'Upcoming', type: 'Student' },
    { id: '2', title: 'Class Representative', date: 'May 20, 2024', status: 'Upcoming', type: 'Class' },
    { id: '3', title: 'Club Leadership', date: 'May 25, 2024', status: 'Upcoming', type: 'Club' },
  ];

  const pastElections = [
    { id: '4', title: 'Department Elections', date: 'April 1, 2024', status: 'Completed', type: 'Department' },
    { id: '5', title: 'Sports Committee', date: 'March 15, 2024', status: 'Completed', type: 'Sports' },
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
        <Text style={styles.headerTitle}>e-Voting</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.quickActionButton}>
            <Text style={styles.quickActionIcon}>🗳️</Text>
            <Text style={styles.quickActionText}>Vote Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionButton}>
            <Text style={styles.quickActionIcon}>📋</Text>
            <Text style={styles.quickActionText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionButton}>
            <Text style={styles.quickActionIcon}>📊</Text>
            <Text style={styles.quickActionText}>Results</Text>
          </TouchableOpacity>
        </View>

        {/* Upcoming Elections */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Elections</Text>
          <View style={styles.electionsList}>
            {upcomingElections.map((election) => (
              <TouchableOpacity key={election.id} style={styles.electionCard}>
                <View style={styles.electionHeader}>
                  <Text style={styles.electionTitle}>{election.title}</Text>
                  <View style={[styles.electionBadge, { backgroundColor: '#DCFCE7' }]}>
                    <Text style={[styles.electionBadgeText, { color: '#059669' }]}>
                      {election.status}
                    </Text>
                  </View>
                </View>
                <Text style={styles.electionType}>{election.type}</Text>
                <View style={styles.electionDetails}>
                  <Text style={styles.electionDate}>{election.date}</Text>
                  <TouchableOpacity style={styles.voteButton}>
                    <Text style={styles.voteButtonText}>Register to Vote</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Past Elections */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Past Elections</Text>
          <View style={styles.electionsList}>
            {pastElections.map((election) => (
              <View key={election.id} style={styles.electionCard}>
                <View style={styles.electionHeader}>
                  <Text style={styles.electionTitle}>{election.title}</Text>
                  <View style={[styles.electionBadge, { backgroundColor: '#F3F4F6' }]}>
                    <Text style={[styles.electionBadgeText, { color: '#6B7280' }]}>
                      {election.status}
                    </Text>
                  </View>
                </View>
                <Text style={styles.electionType}>{election.type}</Text>
                <View style={styles.electionDetails}>
                  <Text style={styles.electionDate}>{election.date}</Text>
                  <TouchableOpacity style={styles.resultsButton}>
                    <Text style={styles.resultsButtonText}>View Results</Text>
                  </TouchableOpacity>
                </View>
              </View>
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
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  quickActionButton: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quickActionIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
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
  electionsList: {
    gap: 16,
  },
  electionCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  electionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  electionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    flex: 1,
  },
  electionBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  electionBadgeText: {
    fontSize: 12,
    fontWeight: '500',
  },
  electionType: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
  },
  electionDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  electionDate: {
    fontSize: 14,
    color: '#6B7280',
  },
  voteButton: {
    backgroundColor: '#315B0E',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  voteButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  resultsButton: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  resultsButtonText: {
    color: '#111827',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default VotingScreen; 