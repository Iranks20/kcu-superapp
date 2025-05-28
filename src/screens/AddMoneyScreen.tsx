import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  AddMoney: undefined;
};

const AddMoneyScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [amount, setAmount] = useState('');

  const quickAmounts = ['50', '100', '200', '500'];

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
        <Text style={styles.headerTitle}>Add Money</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Amount Input */}
        <View style={styles.amountContainer}>
          <Text style={styles.currencySymbol}>$</Text>
          <TextInput
            style={styles.amountInput}
            placeholder="0.00"
            keyboardType="decimal-pad"
            value={amount}
            onChangeText={setAmount}
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Quick Amounts */}
        <View style={styles.quickAmountsContainer}>
          {quickAmounts.map((quickAmount) => (
            <TouchableOpacity
              key={quickAmount}
              style={styles.quickAmountButton}
              onPress={() => setAmount(quickAmount)}
            >
              <Text style={styles.quickAmountText}>${quickAmount}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Payment Methods */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Payment Method</Text>
          <View style={styles.paymentMethods}>
            <TouchableOpacity style={styles.paymentMethod}>
              <View style={styles.paymentIcon}>
                <Text style={styles.paymentIconText}>💳</Text>
              </View>
              <View style={styles.paymentDetails}>
                <Text style={styles.paymentName}>Credit/Debit Card</Text>
                <Text style={styles.paymentInfo}>Visa, Mastercard, Amex</Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.paymentMethod}>
              <View style={styles.paymentIcon}>
                <Text style={styles.paymentIconText}>🏦</Text>
              </View>
              <View style={styles.paymentDetails}>
                <Text style={styles.paymentName}>Bank Transfer</Text>
                <Text style={styles.paymentInfo}>Direct from your bank</Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.paymentMethod}>
              <View style={[styles.paymentIcon, { backgroundColor: '#FFD700' }]}>
                <Text style={styles.paymentIconText}>📱</Text>
              </View>
              <View style={styles.paymentDetails}>
                <Text style={styles.paymentName}>MTN Mobile Money</Text>
                <Text style={styles.paymentInfo}>Instant transfer from MTN</Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.paymentMethod}>
              <View style={[styles.paymentIcon, { backgroundColor: '#FF0000' }]}>
                <Text style={styles.paymentIconText}>📱</Text>
              </View>
              <View style={styles.paymentDetails}>
                <Text style={styles.paymentName}>Airtel Money</Text>
                <Text style={styles.paymentInfo}>Instant transfer from Airtel</Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.paymentMethod}>
              <View style={styles.paymentIcon}>
                <Text style={styles.paymentIconText}>🏪</Text>
              </View>
              <View style={styles.paymentDetails}>
                <Text style={styles.paymentName}>Cash Deposit</Text>
                <Text style={styles.paymentInfo}>At partner locations</Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Add Money Button */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          style={[styles.addMoneyButton, !amount && styles.addMoneyButtonDisabled]}
          disabled={!amount}
        >
          <Text style={styles.addMoneyButtonText}>Add Money</Text>
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
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 32,
  },
  currencySymbol: {
    fontSize: 32,
    fontWeight: '600',
    color: '#111827',
    marginRight: 8,
  },
  amountInput: {
    fontSize: 32,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
    minWidth: 150,
  },
  quickAmountsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  quickAmountButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  quickAmountText: {
    fontSize: 16,
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
  paymentMethods: {
    gap: 12,
  },
  paymentMethod: {
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
  paymentIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  paymentIconText: {
    fontSize: 20,
  },
  paymentDetails: {
    flex: 1,
  },
  paymentName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 2,
  },
  paymentInfo: {
    fontSize: 14,
    color: '#6B7280',
  },
  chevron: {
    fontSize: 20,
    color: '#9CA3AF',
  },
  bottomContainer: {
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  addMoneyButton: {
    backgroundColor: '#315B0E',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  addMoneyButtonDisabled: {
    backgroundColor: '#9CA3AF',
  },
  addMoneyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AddMoneyScreen; 