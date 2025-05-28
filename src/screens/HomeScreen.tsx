import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  ShopHome: undefined;
  Wallet: undefined;
  Learn: undefined;
  Social: undefined;
  News: undefined;
  Health: undefined;
  Play: undefined;
  Services: undefined;
  Profile: undefined;
};

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // Services Data
  const services = [
    { id: '1', name: 'e-Shop', icon: '🛍️', color: '#FEE2E2', screen: 'ShopHome' },
    { id: '2', name: 'e-Wallet', icon: '💳', color: '#DBEAFE', screen: 'Wallet' },
    { id: '3', name: 'e-Learn', icon: '📚', color: '#D1FAE5', screen: 'Learn' },
    { id: '4', name: 'e-Social', icon: '💬', color: '#EDE9FE', screen: 'Social' },
    { id: '5', name: 'e-News', icon: '📰', color: '#FFE4E6', screen: 'News' },
    { id: '6', name: 'e-Health', icon: '❤️', color: '#FCE7F3', screen: 'Health' },
    { id: '7', name: 'e-Play', icon: '🎮', color: '#FEF3C7', screen: 'Play' },
    { id: '8', name: 'e-Services', icon: '🛠️', color: '#CCFBF1', screen: 'Services' },
  ];

  // Transactions Data
  const transactions = [
    { id: '1', type: 'Money Transfer', to: 'Sarah Williams', amount: -45.00, time: 'Today, 2:30 PM', icon: '💸', color: '#DBEAFE' },
    { id: '2', type: 'Money Received', from: 'John Doe', amount: 120.00, time: 'Yesterday, 4:15 PM', icon: '💰', color: '#D1FAE5' },
    { id: '3', type: 'Online Shopping', merchant: 'Amazon.com', amount: -89.99, time: 'May 12, 10:20 AM', icon: '🛒', color: '#FEE2E2' },
  ];

  // Widgets Data
  const widgets = [
    { 
      id: '1', 
      service: 'e-Learn', 
      title: 'Introduction to Digital Marketing', 
      description: 'Continue where you left off - 45% completed', 
      progress: 0.45, 
      action: 'Continue Learning',
      icon: '📚',
      color: '#D1FAE5',
      screen: 'Learn'
    },
    { 
      id: '2', 
      service: 'e-News', 
      title: 'Tech Giant Announces New Smartphone Series', 
      description: 'The latest flagship devices feature groundbreaking camera technology and...', 
      action: 'Read Full Story',
      icon: '📰',
      color: '#FFE4E6',
      screen: 'News'
    }
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.profileContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>KCU</Text>
            </View>
            <View>
              <Text style={styles.greeting}>Good morning,</Text>
              <Text style={styles.username}>Alex Johnson</Text>
            </View>
          </View>
          <View style={styles.iconsContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.icon}>🔔</Text>
              <View style={styles.notificationBadge} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.icon}>⚙️</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for services, products..."
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </View>
      
      {/* Main Content */}
      <ScrollView style={styles.content}>
        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceHeader}>
            <Text style={styles.balanceLabel}>Total Balance</Text>
            <Text style={styles.balanceMenu}>⋮</Text>
          </View>
          <Text style={styles.balanceAmount}>$2,459.50</Text>
          <View style={styles.balanceTrend}>
            <Text style={styles.trendIcon}>↑</Text>
            <Text style={styles.trendText}>+2.5% from last month</Text>
          </View>
          <View style={styles.balanceActions}>
            <TouchableOpacity style={styles.balanceButton}>
              <Text style={styles.buttonIcon}>+</Text>
              <Text style={styles.buttonText}>Add Money</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.balanceButton}>
              <Text style={styles.buttonIcon}>⇄</Text>
              <Text style={styles.buttonText}>Transfer</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Services */}
        <Text style={styles.sectionTitle}>Services</Text>
        <View style={styles.servicesContainer}>
          {services.map((service) => (
            <TouchableOpacity 
              key={service.id}
              style={styles.serviceItem}
              onPress={() => navigation.navigate(service.screen as any)}
            >
              <View style={[styles.serviceIcon, { backgroundColor: service.color }]}>
                <Text style={styles.serviceIconText}>{service.icon}</Text>
              </View>
              <Text style={styles.serviceName}>{service.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        {/* Recent Transactions */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.transactionsContainer}>
          {transactions.map((txn) => (
            <View key={txn.id} style={styles.transactionItem}>
              <View style={[styles.transactionIcon, { backgroundColor: txn.color }]}>
                <Text style={styles.transactionIconText}>{txn.icon}</Text>
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionType}>{txn.type}</Text>
                <Text style={styles.transactionInfo}>
                  {txn.to ? `To ${txn.to}` : txn.from ? `From ${txn.from}` : txn.merchant}
                </Text>
              </View>
              <View style={styles.transactionAmountContainer}>
                <Text style={[styles.transactionAmount, { color: txn.amount > 0 ? '#10B981' : '#EF4444' }]}>
                  {txn.amount > 0 ? '+' : ''}{txn.amount.toFixed(2)}
                </Text>
                <Text style={styles.transactionTime}>{txn.time}</Text>
              </View>
            </View>
          ))}
        </View>
        
        {/* For You Widgets */}
        <Text style={styles.sectionTitle}>For You</Text>
        <View style={styles.widgetsContainer}>
          {widgets.map((widget) => (
            <TouchableOpacity 
              key={widget.id}
              style={styles.widgetItem}
              onPress={() => navigation.navigate(widget.screen as any)}
            >
              <View style={styles.widgetHeader}>
                <View style={styles.widgetService}>
                  <View style={[styles.widgetServiceIcon, { backgroundColor: widget.color }]}>
                    <Text style={styles.widgetServiceIconText}>{widget.icon}</Text>
                  </View>
                  <Text style={styles.widgetServiceName}>{widget.service}</Text>
                </View>
                <View style={styles.widgetBadge}>
                  <Text style={styles.widgetBadgeText}>
                    {widget.id === '1' ? 'New Course' : 'Breaking'}
                  </Text>
                </View>
              </View>
              <Text style={styles.widgetTitle}>{widget.title}</Text>
              <Text style={styles.widgetDescription}>{widget.description}</Text>
              {widget.progress && (
                <View style={styles.progressContainer}>
                  <View style={[styles.progressBar, { width: `${widget.progress * 100}%` }]} />
                </View>
              )}
              <Text style={styles.widgetAction}>{widget.action}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={[styles.navIcon, styles.activeNav]}>🏠</Text>
          <Text style={[styles.navText, styles.activeNav]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('ShopHome')}
        >
          <Text style={styles.navIcon}>🛍️</Text>
          <Text style={styles.navText}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Wallet')}
        >
          <Text style={styles.navIcon}>💳</Text>
          <Text style={styles.navText}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Social')}
        >
          <Text style={styles.navIcon}>💬</Text>
          <Text style={styles.navText}>Social</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: 'white',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: '#4F46E5',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  greeting: {
    color: '#6B7280',
    fontSize: 12,
  },
  username: {
    color: '#111827',
    fontSize: 14,
    fontWeight: '600',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    position: 'relative',
  },
  icon: {
    fontSize: 20,
  },
  notificationBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 8,
    height: 8,
    backgroundColor: '#EF4444',
    borderRadius: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
  },
  searchIcon: {
    fontSize: 20,
    color: '#9CA3AF',
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 14,
    color: '#111827',
  },
  content: {
    flex: 1,
    paddingBottom: 80,
  },
  balanceCard: {
    backgroundColor: '#4F46E5',
    borderRadius: 16,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  balanceLabel: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 14,
  },
  balanceMenu: {
    color: 'white',
    fontSize: 20,
    lineHeight: 14,
  },
  balanceAmount: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  balanceTrend: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  trendIcon: {
    color: 'white',
    fontSize: 14,
    marginRight: 4,
  },
  trendText: {
    color: 'white',
    fontSize: 12,
    opacity: 0.9,
  },
  balanceActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  balanceButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
    paddingVertical: 8,
    marginHorizontal: 4,
  },
  buttonIcon: {
    color: 'white',
    fontSize: 14,
    marginRight: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 12,
  },
  seeAll: {
    fontSize: 14,
    color: '#4F46E5',
    fontWeight: '500',
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 8,
  },
  serviceItem: {
    width: '25%',
    alignItems: 'center',
    marginBottom: 16,
  },
  serviceIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  serviceIconText: {
    fontSize: 24,
  },
  serviceName: {
    fontSize: 12,
    color: '#374151',
    textAlign: 'center',
  },
  transactionsContainer: {
    paddingHorizontal: 16,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  transactionIconText: {
    fontSize: 18,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionType: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 2,
  },
  transactionInfo: {
    fontSize: 12,
    color: '#6B7280',
  },
  transactionAmountContainer: {
    alignItems: 'flex-end',
  },
  transactionAmount: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
  },
  transactionTime: {
    fontSize: 12,
    color: '#6B7280',
  },
  widgetsContainer: {
    paddingHorizontal: 16,
  },
  widgetItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  widgetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  widgetService: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  widgetServiceIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  widgetServiceIconText: {
    fontSize: 16,
  },
  widgetServiceName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  widgetBadge: {
    backgroundColor: '#D1FAE5',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  widgetBadgeText: {
    fontSize: 12,
    color: '#065F46',
    fontWeight: '500',
  },
  widgetTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  widgetDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
  },
  progressContainer: {
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
    marginBottom: 12,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#10B981',
    borderRadius: 2,
  },
  widgetAction: {
    fontSize: 14,
    color: '#4F46E5',
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
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
    alignItems: 'center',
    paddingVertical: 8,
  },
  navIcon: {
    fontSize: 24,
    color: '#6B7280',
    marginBottom: 4,
  },
  navText: {
    fontSize: 12,
    color: '#6B7280',
  },
  activeNav: {
    color: '#4F46E5',
  },
});

export default HomeScreen;