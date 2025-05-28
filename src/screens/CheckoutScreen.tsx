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
  Platform,
  Image,
  Pressable
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Cart: undefined;
  OrderConfirmation: undefined;
  Profile: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function CheckoutScreen() {
  const navigation = useNavigation<NavigationProp>();
  
  // Sample cart summary data
  const cartSummary = {
    items: 4,
    subtotal: 349.97,
    shipping: 4.99,
    tax: 24.50,
    total: 379.46
  };

  // Sample saved addresses
  const savedAddresses = [
    {
      id: 1,
      name: "Home",
      recipient: "John Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
      phone: "+1 (555) 123-4567",
      isDefault: true
    },
    {
      id: 2,
      name: "Work",
      recipient: "John Doe",
      street: "456 Office Avenue",
      city: "New York",
      state: "NY",
      zip: "10002",
      country: "United States",
      phone: "+1 (555) 987-6543",
      isDefault: false
    }
  ];

  // Sample payment methods
  const paymentMethods = [
    {
      id: 1,
      type: "card",
      name: "Visa ending in 4242",
      icon: "https://placehold.co/40x40/e2e8f0/1e293b?text=Visa",
      isDefault: true
    },
    {
      id: 2,
      type: "wallet",
      name: "KCU Wallet",
      icon: "https://placehold.co/40x40/e2e8f0/1e293b?text=KCU",
      isDefault: false
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerLeft}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => navigation.navigate('Cart')}
            >
              <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Checkout</Text>
          </View>
        </View>
      </View>

      {/* Main content */}
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.content}>
          {/* Shipping address */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Shipping Address</Text>
              <TouchableOpacity>
                <Text style={styles.changeButton}>Change</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.addressCard}>
              <View style={styles.addressContent}>
                <View style={styles.addressIcon}>
                  <Text style={styles.locationIcon}>📍</Text>
                </View>
                <View style={styles.addressDetails}>
                  <View style={styles.addressHeader}>
                    <Text style={styles.addressName}>{savedAddresses[0].name}</Text>
                    {savedAddresses[0].isDefault && (
                      <View style={styles.defaultBadge}>
                        <Text style={styles.defaultBadgeText}>Default</Text>
                      </View>
                    )}
                  </View>
                  <Text style={styles.addressText}>{savedAddresses[0].recipient}</Text>
                  <Text style={styles.addressText}>{savedAddresses[0].street}</Text>
                  <Text style={styles.addressText}>
                    {savedAddresses[0].city}, {savedAddresses[0].state} {savedAddresses[0].zip}
                  </Text>
                  <Text style={styles.addressText}>{savedAddresses[0].country}</Text>
                  <Text style={styles.addressText}>{savedAddresses[0].phone}</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Delivery options */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Delivery Options</Text>
            
            <View style={styles.deliveryOptions}>
              <Pressable style={styles.deliveryOption}>
                <View style={styles.radioButton}>
                  <View style={styles.radioButtonSelected} />
                </View>
                <View style={styles.deliveryDetails}>
                  <Text style={styles.deliveryTitle}>Standard Delivery</Text>
                  <Text style={styles.deliverySubtitle}>3-5 business days</Text>
                  <Text style={styles.deliveryPrice}>$4.99</Text>
                </View>
              </Pressable>
              
              <Pressable style={styles.deliveryOption}>
                <View style={styles.radioButton} />
                <View style={styles.deliveryDetails}>
                  <Text style={styles.deliveryTitle}>Express Delivery</Text>
                  <Text style={styles.deliverySubtitle}>1-2 business days</Text>
                  <Text style={styles.deliveryPrice}>$9.99</Text>
                </View>
              </Pressable>
            </View>
          </View>

          {/* Payment method */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Payment Method</Text>
              <TouchableOpacity>
                <Text style={styles.changeButton}>Change</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.paymentCard}>
              <View style={styles.paymentContent}>
                <Image 
                  source={{ uri: paymentMethods[0].icon }}
                  style={styles.paymentIcon}
                />
                <View style={styles.paymentDetails}>
                  <View style={styles.paymentHeader}>
                    <Text style={styles.paymentName}>{paymentMethods[0].name}</Text>
                    {paymentMethods[0].isDefault && (
                      <View style={styles.defaultBadge}>
                        <Text style={styles.defaultBadgeText}>Default</Text>
                      </View>
                    )}
                  </View>
                  <Text style={styles.paymentExpiry}>Expires 12/2025</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Order summary */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Order Summary</Text>
            
            <View style={styles.summaryContent}>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Items ({cartSummary.items})</Text>
                <Text style={styles.summaryValue}>${cartSummary.subtotal.toFixed(2)}</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Shipping</Text>
                <Text style={styles.summaryValue}>${cartSummary.shipping.toFixed(2)}</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Tax</Text>
                <Text style={styles.summaryValue}>${cartSummary.tax.toFixed(2)}</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.summaryRow}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalValue}>${cartSummary.total.toFixed(2)}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Place order button */}
      <View style={styles.checkoutContainer}>
        <TouchableOpacity 
          style={styles.checkoutButton}
          onPress={() => navigation.navigate('OrderConfirmation')}
        >
          <Text style={styles.checkoutButtonText}>Place Order</Text>
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
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
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
    color: '#374151',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
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
  changeButton: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2563EB',
  },
  addressCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  addressContent: {
    flexDirection: 'row',
  },
  addressIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  locationIcon: {
    fontSize: 20,
  },
  addressDetails: {
    flex: 1,
  },
  addressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  addressName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
    marginRight: 8,
  },
  defaultBadge: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  defaultBadgeText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1D4ED8',
  },
  addressText: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 2,
  },
  deliveryOptions: {
    gap: 12,
  },
  deliveryOption: {
    flexDirection: 'row',
    padding: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2563EB',
    marginRight: 12,
    marginTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2563EB',
  },
  deliveryDetails: {
    flex: 1,
  },
  deliveryTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
  },
  deliverySubtitle: {
    fontSize: 12,
    color: '#6B7280',
  },
  deliveryPrice: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
    marginTop: 4,
  },
  paymentCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  paymentContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 12,
  },
  paymentDetails: {
    flex: 1,
  },
  paymentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  paymentName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
    marginRight: 8,
  },
  paymentExpiry: {
    fontSize: 12,
    color: '#6B7280',
  },
  summaryContent: {
    gap: 8,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 8,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  checkoutContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  checkoutButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});