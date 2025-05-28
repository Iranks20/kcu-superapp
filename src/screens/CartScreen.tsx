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
  TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  ShopHome: undefined;
  Cart: undefined;
  Checkout: undefined;
  Profile: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function CartScreen() {
  const navigation = useNavigation<NavigationProp>();
  
  // Sample cart items data
  const cartItems = [
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 89.99,
      quantity: 1,
      image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Earbuds",
      discount: 15,
    },
    {
      id: 4,
      name: "Noise-Cancelling Headphones",
      price: 249.99,
      quantity: 1,
      image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Headphones",
      discount: 0,
    },
    {
      id: 6,
      name: "Portable Power Bank",
      price: 49.99,
      quantity: 2,
      image: "https://placehold.co/300x300/e2e8f0/1e293b?text=PowerBank",
      discount: 0,
    },
  ];

  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = item.discount > 0 
      ? item.price * (1 - item.discount / 100) 
      : item.price;
    return total + (itemPrice * item.quantity);
  }, 0);
  
  const shipping = 4.99;
  const tax = subtotal * 0.07; // 7% tax
  const total = subtotal + shipping + tax;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerLeft}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => navigation.navigate('ShopHome')}
            >
              <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Shopping Cart</Text>
          </View>
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.deleteIcon}>🗑️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main content */}
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {cartItems.length > 0 ? (
          <View style={styles.content}>
            {/* Cart items */}
            <View style={styles.cartItems}>
              {cartItems.map((item) => (
                <View key={item.id} style={styles.cartItem}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.itemImage}
                    resizeMode="cover"
                  />
                  <View style={styles.itemContent}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <View style={styles.priceContainer}>
                      {item.discount > 0 ? (
                        <View>
                          <Text style={styles.originalPrice}>
                            ${item.price.toFixed(2)}
                          </Text>
                          <Text style={styles.discountedPrice}>
                            ${(item.price * (1 - item.discount / 100)).toFixed(2)}
                          </Text>
                        </View>
                      ) : (
                        <Text style={styles.price}>
                          ${item.price.toFixed(2)}
                        </Text>
                      )}
                    </View>
                    <View style={styles.itemFooter}>
                      <View style={styles.quantityContainer}>
                        <TouchableOpacity style={styles.quantityButton}>
                          <Text style={styles.quantityButtonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{item.quantity}</Text>
                        <TouchableOpacity style={styles.quantityButton}>
                          <Text style={styles.quantityButtonText}>+</Text>
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity style={styles.removeButton}>
                        <Text style={styles.removeIcon}>🗑️</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
            </View>

            {/* Promo code */}
            <View style={styles.promoContainer}>
              <TextInput
                style={styles.promoInput}
                placeholder="Enter promo code"
                placeholderTextColor="#9CA3AF"
              />
              <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Apply</Text>
              </TouchableOpacity>
            </View>

            {/* Order summary */}
            <View style={styles.summaryContainer}>
              <Text style={styles.summaryTitle}>Order Summary</Text>
              <View style={styles.summaryContent}>
                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>Subtotal</Text>
                  <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
                </View>
                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>Shipping</Text>
                  <Text style={styles.summaryValue}>${shipping.toFixed(2)}</Text>
                </View>
                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>Tax</Text>
                  <Text style={styles.summaryValue}>${tax.toFixed(2)}</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.summaryRow}>
                  <Text style={styles.totalLabel}>Total</Text>
                  <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🛒</Text>
            <Text style={styles.emptyTitle}>Your cart is empty</Text>
            <Text style={styles.emptyText}>
              Looks like you haven't added any items to your cart yet.
            </Text>
            <TouchableOpacity 
              style={styles.continueButton}
              onPress={() => navigation.navigate('ShopHome')}
            >
              <Text style={styles.continueButtonText}>Continue Shopping</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      {/* Checkout button */}
      {cartItems.length > 0 && (
        <View style={styles.checkoutContainer}>
          <TouchableOpacity 
            style={styles.checkoutButton}
            onPress={() => navigation.navigate('Checkout')}
          >
            <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    marginTop:-35
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
  deleteButton: {
    padding: 8,
  },
  deleteIcon: {
    fontSize: 20,
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
  cartItems: {
    gap: 12,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemContent: {
    flex: 1,
    marginLeft: 12,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
    marginBottom: 4,
  },
  priceContainer: {
    marginBottom: 8,
  },
  originalPrice: {
    fontSize: 12,
    color: '#9CA3AF',
    textDecorationLine: 'line-through',
  },
  discountedPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
  },
  quantityButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  quantityButtonText: {
    fontSize: 16,
    color: '#4B5563',
  },
  quantityText: {
    fontSize: 14,
    color: '#1F2937',
    paddingHorizontal: 8,
  },
  removeButton: {
    padding: 4,
  },
  removeIcon: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  promoContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  promoInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 8,
    color: '#1F2937',
  },
  applyButton: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    justifyContent: 'center',
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  summaryContainer: {
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
  summaryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
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
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  continueButton: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
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