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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  ShopHome: undefined;
  Profile: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function OrderConfirmationScreen() {
  const navigation = useNavigation<NavigationProp>();
  
  // Sample order data
  const order = {
    id: "KCU-2023-78945",
    date: "November 15, 2023",
    total: 379.46,
    paymentMethod: "Visa ending in 4242",
    items: 4,
    estimatedDelivery: "November 18-20, 2023",
    shippingAddress: {
      recipient: "John Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerLeft}>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={styles.closeIcon}>✕</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Order Confirmation</Text>
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
          {/* Success message */}
          <View style={styles.successSection}>
            <View style={styles.successIconContainer}>
              <Text style={styles.checkmarkIcon}>✓</Text>
            </View>
            <Text style={styles.successTitle}>Order Placed Successfully!</Text>
            <Text style={styles.successMessage}>
              Thank you for your purchase. Your order has been received and is being processed.
            </Text>
            <View style={styles.orderNumberContainer}>
              <Text style={styles.orderNumberText}>
                Order Number: <Text style={styles.orderNumberValue}>{order.id}</Text>
              </Text>
            </View>
            <Text style={styles.emailText}>
              A confirmation email has been sent to your registered email address.
            </Text>
          </View>

          {/* Order details */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Order Details</Text>
            
            <View style={styles.detailsContent}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Order Date</Text>
                <Text style={styles.detailValue}>{order.date}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Total Amount</Text>
                <Text style={styles.detailValue}>${order.total.toFixed(2)}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Payment Method</Text>
                <Text style={styles.detailValue}>{order.paymentMethod}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Items</Text>
                <Text style={styles.detailValue}>{order.items}</Text>
              </View>
            </View>
          </View>

          {/* Shipping information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Shipping Information</Text>
            
            <View style={styles.shippingContent}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Estimated Delivery</Text>
                <Text style={styles.detailValue}>{order.estimatedDelivery}</Text>
              </View>
              <View>
                <Text style={styles.detailLabel}>Shipping Address</Text>
                <View style={styles.addressContainer}>
                  <Text style={styles.addressName}>{order.shippingAddress.recipient}</Text>
                  <Text style={styles.addressText}>{order.shippingAddress.street}</Text>
                  <Text style={styles.addressText}>
                    {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}
                  </Text>
                  <Text style={styles.addressText}>{order.shippingAddress.country}</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Tracking information */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Track Your Order</Text>
              <TouchableOpacity>
                <Text style={styles.viewDetailsButton}>View Details</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.trackingContainer}>
              <View style={styles.trackingSteps}>
                <View style={styles.trackingStep}>
                  <View style={[styles.trackingDot, styles.trackingDotActive]} />
                  <Text style={styles.trackingLabel}>Ordered</Text>
                </View>
                <View style={styles.trackingStep}>
                  <View style={[styles.trackingDot, styles.trackingDotActive]} />
                  <Text style={styles.trackingLabel}>Processing</Text>
                </View>
                <View style={styles.trackingStep}>
                  <View style={styles.trackingDot} />
                  <Text style={styles.trackingLabelInactive}>Shipped</Text>
                </View>
                <View style={styles.trackingStep}>
                  <View style={styles.trackingDot} />
                  <Text style={styles.trackingLabelInactive}>Delivered</Text>
                </View>
              </View>
              <View style={styles.trackingLine} />
              <View style={styles.trackingProgress} />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Action buttons */}
      <View style={styles.actionContainer}>
        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={styles.continueButton}
            onPress={() => navigation.navigate('ShopHome')}
          >
            <Text style={styles.continueButtonText}>Continue Shopping</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.homeButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.homeButtonText}>Go to Home</Text>
          </TouchableOpacity>
        </View>
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
  closeButton: {
    marginRight: 12,
  },
  closeIcon: {
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
  successSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  successIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#D1FAE5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkmarkIcon: {
    fontSize: 32,
    color: '#059669',
  },
  successTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  successMessage: {
    fontSize: 14,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 16,
  },
  orderNumberContainer: {
    backgroundColor: '#EFF6FF',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    marginBottom: 8,
  },
  orderNumberText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1E40AF',
  },
  orderNumberValue: {
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: 12,
    color: '#6B7280',
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
    marginBottom: 16,
  },
  viewDetailsButton: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2563EB',
  },
  detailsContent: {
    gap: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  detailLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
  },
  shippingContent: {
    gap: 12,
  },
  addressContainer: {
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  addressName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
    marginBottom: 4,
  },
  addressText: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 2,
  },
  trackingContainer: {
    position: 'relative',
    marginTop: 8,
  },
  trackingSteps: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  trackingStep: {
    alignItems: 'center',
  },
  trackingDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E5E7EB',
    marginBottom: 4,
  },
  trackingDotActive: {
    backgroundColor: '#2563EB',
  },
  trackingLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1F2937',
  },
  trackingLabelInactive: {
    fontSize: 12,
    color: '#6B7280',
  },
  trackingLine: {
    position: 'absolute',
    top: 12,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#E5E7EB',
    zIndex: -1,
  },
  trackingProgress: {
    position: 'absolute',
    top: 12,
    left: 0,
    width: '33%',
    height: 2,
    backgroundColor: '#2563EB',
    zIndex: -1,
  },
  actionContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  continueButton: {
    flex: 1,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#2563EB',
    borderRadius: 8,
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2563EB',
  },
  homeButton: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: '#2563EB',
    borderRadius: 8,
    alignItems: 'center',
  },
  homeButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});