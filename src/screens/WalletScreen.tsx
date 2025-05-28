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
  Home: undefined;
  ShopHome: undefined;
  Wallet: undefined;
  Social: undefined;
  Profile: undefined;
  SendMoney: undefined;
  ReceiveMoney: undefined;
  AddMoney: undefined;
  QRScanner: undefined;
  PayBills: undefined;
  Analytics: undefined;
  Cards: undefined;
};

const WalletScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // Quick Actions Data
  const quickActions = [
    { id: '1', name: 'Scan QR', icon: '📷', color: '#EDE9FE', screen: 'QRScanner' },
    { id: '2', name: 'Cards', icon: '💳', color: '#DBEAFE', screen: 'Cards' },
    { id: '3', name: 'Pay Bills', icon: '🧾', color: '#D1FAE5', screen: 'PayBills' },
    { id: '4', name: 'Analytics', icon: '📊', color: '#FEF3C7', screen: 'Analytics' },
  ];

  // Transactions Data
  const transactions = [
    { id: '1', type: 'Money Transfer', description: 'To Sarah Williams', amount: -45.00, time: 'Today, 2:30 PM', icon: '💸', color: '#DBEAFE' },
    { id: '2', type: 'Money Received', description: 'From John Doe', amount: 120.00, time: 'Yesterday, 4:15 PM', icon: '💰', color: '#D1FAE5' },
    { id: '3', type: 'Online Shopping', description: 'Amazon.com', amount: -89.99, time: 'May 12, 10:20 AM', icon: '🛒', color: '#FEE2E2' },
    { id: '4', type: 'Electricity Bill', description: 'City Power Co.', amount: -75.50, time: 'May 10, 9:45 AM', icon: '💡', color: '#EDE9FE' },
    { id: '5', type: 'Salary Deposit', description: 'Acme Inc.', amount: 2750.00, time: 'May 1, 12:00 PM', icon: '💵', color: '#D1FAE5' },
    { id: '6', type: 'Credit Card Payment', description: 'City Bank', amount: -350.00, time: 'April 28, 3:20 PM', icon: '💳', color: '#FEE2E2' },
  ];

  // Upcoming Payments Data
  const upcomingPayments = [
    { id: '1', type: 'Rent Payment', description: 'Due in 3 days', amount: 850.00, icon: '🏠', color: '#DBEAFE' },
    { id: '2', type: 'Electricity Bill', description: 'Due in 5 days', amount: 75.00, icon: '⚡', color: '#D1FAE5' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.headerTitle}>e-Wallet</Text>
            <Text style={styles.headerSubtitle}>Manage your finances</Text>
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
        
        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceHeader}>
            <Text style={styles.balanceLabel}>Total Balance</Text>
            <View style={styles.profitBadge}>
              <Text style={styles.trendIcon}>↑</Text>
              <Text style={styles.profitText}>2.5%</Text>
            </View>
          </View>
          <Text style={styles.balanceAmount}>$2,459.50</Text>
          
          <View style={styles.actionButtons}>
            <TouchableOpacity 
              style={[styles.actionButton, styles.primaryAction]}
              onPress={() => navigation.navigate('SendMoney')}
            >
              <Text style={styles.actionSendButtonIcon}>⇄</Text>
              <Text style={styles.primaryActionText}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.actionButton, styles.secondaryAction]}
              onPress={() => navigation.navigate('ReceiveMoney')}
            >
              <Text style={styles.actionButtonIcon}>↓</Text>
              <Text style={styles.secondaryActionText}>Receive</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.actionButton, styles.secondaryAction]}
              onPress={() => navigation.navigate('AddMoney')}
            >
              <Text style={styles.actionButtonIcon}>+</Text>
              <Text style={styles.secondaryActionText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      {/* Quick Actions */}
      <View style={styles.quickActions}>
        {quickActions.map((action) => (
          <TouchableOpacity 
            key={action.id}
            style={styles.quickActionItem}
            onPress={() => navigation.navigate(action.screen as any)}
          >
            <View style={[styles.quickActionIcon, { backgroundColor: action.color }]}>
              <Text style={styles.quickActionIconText}>{action.icon}</Text>
            </View>
            <Text style={styles.quickActionText}>{action.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Transaction History */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Transaction History</Text>
            <View style={styles.filterButtons}>
              <TouchableOpacity style={[styles.filterButton, styles.activeFilter]}>
                <Text style={styles.activeFilterText}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.inactiveFilterText}>Income</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.inactiveFilterText}>Expense</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.transactionList}>
            {transactions.map((txn) => (
              <View key={txn.id} style={styles.transactionItem}>
                <View style={[styles.transactionIcon, { backgroundColor: txn.color }]}>
                  <Text style={styles.transactionIconText}>{txn.icon}</Text>
                </View>
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionType}>{txn.type}</Text>
                  <Text style={styles.transactionDescription}>{txn.description}</Text>
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
        </View>
        
        {/* Upcoming Payments */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Payments</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.paymentList}>
            {upcomingPayments.map((payment) => (
              <View key={payment.id} style={styles.paymentItem}>
                <View style={styles.paymentItemTop}>
                  <View style={[styles.paymentIcon, { backgroundColor: payment.color }]}>
                    <Text style={styles.paymentIconText}>{payment.icon}</Text>
                  </View>
                  <View style={styles.paymentDetails}>
                    <Text style={styles.paymentType}>{payment.type}</Text>
                    <Text style={styles.paymentDescription}>{payment.description}</Text>
                  </View>
                  <Text style={styles.paymentAmount}>${payment.amount.toFixed(2)}</Text>
                </View>
                <View style={styles.paymentButtonContainer}>
                  <TouchableOpacity style={styles.paymentButton}>
                    <Text style={styles.paymentButtonText}>Pay Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('ShopHome')}
        >
          <Text style={styles.navIcon}>🛍️</Text>
          <Text style={styles.navText}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={[styles.navIcon, styles.activeNav]}>💳</Text>
          <Text style={[styles.navText, styles.activeNav]}>Wallet</Text>
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
    marginTop: -35,
  },
  header: {
    backgroundColor: '#315B0E',
    paddingTop: 50,
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  headerSubtitle: {
    color: '#A5B4FC',
    fontSize: 12,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6366F1',
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
  balanceCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  balanceLabel: {
    color: '#6B7280',
    fontSize: 12,
  },
  profitBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DCFCE7',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  trendIcon: {
    fontSize: 12,
    color: '#16A34A',
    marginRight: 4,
  },
  profitText: {
    color: '#16A34A',
    fontSize: 12,
    fontWeight: '500',
  },
  balanceAmount: {
    color: '#111827',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 8,
    gap: 6,
  },
  actionButtonIcon: {
    fontSize: 16,
    color: '#315B0E',
  },
  actionSendButtonIcon: {
    fontSize: 16,
    color: 'white',
  },
  primaryAction: {
    backgroundColor: '#315B0E',
  },
  primaryActionText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  secondaryAction: {
    backgroundColor: '#E0E7FF',
  },
  secondaryActionText: {
    color: '#315B0E',
    fontSize: 14,
    fontWeight: '500',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  quickActionItem: {
    alignItems: 'center',
  },
  quickActionIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickActionIconText: {
    fontSize: 24,
  },
  quickActionText: {
    fontSize: 12,
    color: '#374151',
  },
  content: {
    flex: 1,
    paddingBottom: 80,
  },
  scrollContent: {
    paddingBottom: 140,
  },  
  section: {
    marginBottom: 24,
    paddingHorizontal: 16,
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
    color: '#111827',
  },
  filterButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  filterButton: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
  },
  activeFilter: {
    backgroundColor: '#E0E7FF',
  },
  activeFilterText: {
    color: '#315B0E',
    fontSize: 12,
    fontWeight: '500',
  },
  inactiveFilterText: {
    color: '#6B7280',
    fontSize: 12,
  },
  seeAll: {
    fontSize: 14,
    color: '#315B0E',
    fontWeight: '500',
  },
  transactionList: {
    gap: 8,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
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
  transactionDescription: {
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
  paymentList: {
    gap: 8,
  },
  paymentItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  paymentItemTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  paymentIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  paymentIconText: {
    fontSize: 18,
  },
  paymentDetails: {
    flex: 1,
  },
  paymentType: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 2,
  },
  paymentDescription: {
    fontSize: 12,
    color: '#6B7280',
  },
  paymentAmount: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  paymentButtonContainer: {
    alignItems: 'flex-end',
  },
  paymentButton: {
    backgroundColor: '#E0E7FF',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  paymentButtonText: {
    color: '#315B0E',
    fontSize: 12,
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
    color: '#315B0E',
  },
});

export default WalletScreen;