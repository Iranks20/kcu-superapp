import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <StatusBar barStyle="light-content" />
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.settingsIcon}>⚙️</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View style={styles.profileInfo}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}><Text style={styles.avatarText}>AJ</Text></View>
            <TouchableOpacity style={styles.editIcon}><Text style={styles.editIconText}>✏️</Text></TouchableOpacity>
          </View>
          <View style={styles.profileText}>
            <Text style={styles.name}>Alex Johnson</Text>
            <Text style={styles.email}>alex.johnson@example.com</Text>
            <View style={styles.phoneContainer}>
              <Text style={styles.phoneIcon}>📞</Text>
              <Text style={styles.phoneText}>+1 (123) 456-7890</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Account Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}><Text style={styles.statValue}>$2,459</Text><Text style={styles.statLabel}>Wallet Balance</Text></View>
        <View style={styles.statBox}><Text style={styles.statValue}>12</Text><Text style={styles.statLabel}>Completed Orders</Text></View>
        <View style={styles.statBox}><Text style={styles.statValue}>3</Text><Text style={styles.statLabel}>Active Courses</Text></View>
      </View>

      {/* Account Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        {renderSettingItem('👤', 'Personal Information', 'Update your personal details')}
        {renderSettingItem('🔐', 'Security', 'Manage password and 2FA')}
        {renderSettingItem('💳', 'Payment Methods', 'Add or remove payment methods')}
        {renderSettingItem('🔔', 'Notifications', 'Manage notification preferences')}
      </View>

      {/* App Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Settings</Text>
        {renderSettingItem('📱', 'Preferences', 'Customize your app experience')}
        {renderSettingItem('🌐', 'Language', 'Choose your preferred language')}
        {renderSettingItem('💬', 'Support', 'Get help or send feedback')}
      </View>
    </ScrollView>
  );
}

function renderSettingItem(icon, title, subtitle) {
  return (
    <TouchableOpacity style={styles.settingItem}>
      <View style={styles.settingLeft}>
        <View style={styles.settingIcon}><Text style={styles.settingIconText}>{icon}</Text></View>
        <View>
          <Text style={styles.settingTitle}>{title}</Text>
          <Text style={styles.settingSubtitle}>{subtitle}</Text>
        </View>
      </View>
      <Text style={styles.settingArrow}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafb', marginTop: -40 },
  contentContainer: { paddingBottom: 40 },
  header: { backgroundColor: '#4f46e5', paddingTop: 48, paddingHorizontal: 16, paddingBottom: 24 },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  iconButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', alignItems: 'center' },
  backIcon: { color: '#fff', fontSize: 18 },
  settingsIcon: { fontSize: 18 },
  profileInfo: { flexDirection: 'row', alignItems: 'center' },
  avatarContainer: { position: 'relative' },
  avatar: { width: 80, height: 80, backgroundColor: '#fff', borderRadius: 40, justifyContent: 'center', alignItems: 'center' },
  avatarText: { color: '#4f46e5', fontSize: 24, fontWeight: 'bold' },
  editIcon: { position: 'absolute', right: 0, bottom: 0, backgroundColor: '#6366f1', borderRadius: 12, borderWidth: 2, borderColor: '#fff', width: 24, height: 24, justifyContent: 'center', alignItems: 'center' },
  editIconText: { color: '#fff', fontSize: 12 },
  profileText: { marginLeft: 16 },
  name: { color: '#fff', fontSize: 20, fontWeight: '600' },
  email: { color: 'rgba(255,255,255,0.8)', fontSize: 12 },
  phoneContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  phoneIcon: { color: 'rgba(255,255,255,0.8)', fontSize: 14 },
  phoneText: { color: 'rgba(255,255,255,0.8)', fontSize: 12, marginLeft: 4 },
  statsContainer: { flexDirection: 'row', backgroundColor: '#fff', margin: 16, borderRadius: 8, overflow: 'hidden', elevation: 1 },
  statBox: { flex: 1, alignItems: 'center', padding: 12, borderRightWidth: 1, borderRightColor: '#f3f4f6' },
  statValue: { color: '#4f46e5', fontSize: 20, fontWeight: 'bold' },
  statLabel: { fontSize: 12, color: '#6b7280' },
  section: { marginTop: 24, paddingHorizontal: 16 },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: '#1f2937', marginBottom: 8 },
  settingItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff', padding: 16, marginBottom: 1, borderRadius: 8 },
  settingLeft: { flexDirection: 'row', alignItems: 'center' },
  settingIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#eef2ff', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  settingIconText: { fontSize: 18 },
  settingTitle: { color: '#1f2937', fontSize: 14, fontWeight: '500' },
  settingSubtitle: { color: '#6b7280', fontSize: 12 },
  settingArrow: { fontSize: 18, color: '#9ca3af' }
});