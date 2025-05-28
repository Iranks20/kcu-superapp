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
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  ShopHome: undefined;
  Cart: undefined;
  Wallet: undefined;
  Profile: undefined;
  ProductDetail: { id: number };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function ShopCategoryScreen() {
  const navigation = useNavigation<NavigationProp>();
  const categoryName = "Electronics";
  
  // Sample products data
  const products = [
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 89.99,
      rating: 4.5,
      image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Earbuds",
      discount: 15,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      rating: 4.7,
      image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Watch",
      discount: 0,
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 129.99,
      rating: 4.3,
      image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Speaker",
      discount: 10,
    },
    {
      id: 4,
      name: "Noise-Cancelling Headphones",
      price: 249.99,
      rating: 4.8,
      image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Headphones",
      discount: 0,
    },
    {
      id: 5,
      name: "Smartphone Gimbal",
      price: 79.99,
      rating: 4.2,
      image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Gimbal",
      discount: 5,
    },
    {
      id: 6,
      name: "Portable Power Bank",
      price: 49.99,
      rating: 4.6,
      image: "https://placehold.co/300x300/e2e8f0/1e293b?text=PowerBank",
      discount: 0,
    },
  ];

  // Filter options
  const filters = [
    "All Items",
    "On Sale",
    "New Arrivals",
    "Best Rated",
    "Price: Low to High",
    "Price: High to Low",
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
              onPress={() => navigation.navigate('ShopHome')}
            >
              <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{categoryName}</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.iconText}>🔍</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.cartButton}
              onPress={() => navigation.navigate('Cart')}
            >
              <Text style={styles.cartIcon}>🛒</Text>
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>3</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Filter tabs */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.filterScroll}
          contentContainerStyle={styles.filterContainer}
        >
          {filters.map((filter, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.filterButton,
                index === 0 && styles.activeFilterButton
              ]}
            >
              <Text style={[
                styles.filterText,
                index === 0 && styles.activeFilterText
              ]}>
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Main content */}
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.productsGrid}>
          {products.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.productCard}
              onPress={() => navigation.navigate('ProductDetail', { id: product.id })}
            >
              <View style={styles.productImageContainer}>
                <Image
                  source={{ uri: product.image }}
                  style={styles.productImage}
                  resizeMode="cover"
                />
                {product.discount > 0 && (
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>-{product.discount}%</Text>
                  </View>
                )}
              </View>
              <View style={styles.productContent}>
                <Text style={styles.productName} numberOfLines={2}>
                  {product.name}
                </Text>
                <View style={styles.productFooter}>
                  <View style={styles.ratingContainer}>
                    <Text style={styles.starIcon}>⭐</Text>
                    <Text style={styles.ratingText}>{product.rating}</Text>
                  </View>
                  <View style={styles.priceContainer}>
                    {product.discount > 0 ? (
                      <>
                        <Text style={styles.originalPrice}>
                          ${product.price.toFixed(2)}
                        </Text>
                        <Text style={styles.discountedPrice}>
                          ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                        </Text>
                      </>
                    ) : (
                      <Text style={styles.price}>
                        ${product.price.toFixed(2)}
                      </Text>
                    )}
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
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
          <Text style={[styles.navIcon, styles.activeNavIcon]}>🛍️</Text>
          <Text style={[styles.navText, styles.activeNavText]}>Shop</Text>
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
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.navIcon}>👤</Text>
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
    marginTop: -30
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
  headerRight: {
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
    marginLeft: 12,
  },
  iconText: {
    fontSize: 20,
  },
  cartButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  cartIcon: {
    fontSize: 20,
  },
  cartBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#EF4444',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  filterScroll: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    marginRight: 8,
  },
  activeFilterButton: {
    backgroundColor: '#2563EB',
  },
  filterText: {
    fontSize: 14,
    color: '#4B5563',
  },
  activeFilterText: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 16,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  productCard: {
    width: '47%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImageContainer: {
    position: 'relative',
  },
  productImage: {
    width: '100%',
    aspectRatio: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#EF4444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  discountText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  productContent: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
    marginBottom: 8,
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    fontSize: 14,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 12,
    color: '#6B7280',
  },
  priceContainer: {
    alignItems: 'flex-end',
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
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  navText: {
    fontSize: 12,
    color: '#6B7280',
  },
  activeNavIcon: {
    color: '#2563EB',
  },
  activeNavText: {
    color: '#2563EB',
    fontWeight: '500',
  },
});