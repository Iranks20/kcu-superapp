import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  FlatList,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  ShopHome: undefined;
  ShopCart: undefined;
  ShopCategory: undefined;
  ProductDetail: undefined;
  Home: undefined;
  Wallet: undefined;
  Social: undefined;
  Profile: undefined;
};

const ShopHomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // Categories Data
  const categories = [
    { id: '1', name: 'Electronics', icon: '📱', color: '#FEE2E2' },
    { id: '2', name: 'Fashion', icon: '👕', color: '#DBEAFE' },
    { id: '3', name: 'Groceries', icon: '🛒', color: '#D1FAE5' },
    { id: '4', name: 'Books', icon: '📚', color: '#EDE9FE' },
    { id: '5', name: 'Health', icon: '❤️', color: '#FCE7F3' },
    { id: '6', name: 'Toys', icon: '🧸', color: '#FEF3C7' },
  ];

  // Products Data
  const products = [
    { 
      id: '1', 
      name: 'Wireless Earbuds', 
      price: 89.99, 
      rating: 4.8, 
      reviewCount: 120,
      icon: '🎧'
    },
    { 
      id: '2', 
      name: 'Smart Watch', 
      price: 129.99, 
      rating: 4.2, 
      reviewCount: 85,
      icon: '⌚'
    },
    { 
      id: '3', 
      name: 'Bluetooth Speaker', 
      price: 59.99, 
      rating: 4.3, 
      reviewCount: 42,
      icon: '🔊'
    },
    { 
      id: '4', 
      name: 'Laptop Stand', 
      price: 29.99, 
      rating: 4.9, 
      reviewCount: 98,
      icon: '💻'
    },
  ];

  // Brands Data
  const brands = [
    { id: '1', name: 'Brand 1' },
    { id: '2', name: 'Brand 2' },
    { id: '3', name: 'Brand 3' },
    { id: '4', name: 'Brand 4' },
    { id: '5', name: 'Brand 5' },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Text key={i} style={styles.starIcon}>★</Text>);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<Text key={i} style={styles.starIcon}>☆</Text>);
      } else {
        stars.push(<Text key={i} style={[styles.starIcon, styles.starEmpty]}>★</Text>);
      }
    }
    
    return stars;
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.shopTitle}>e-Shop</Text>
            <Text style={styles.shopSubtitle}>Find what you need</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.icon}>🔔</Text>
              <View style={styles.notificationBadge} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.iconButton}
              onPress={() => navigation.navigate('ShopCart')}
            >
              <Text style={styles.icon}>🛒</Text>
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>3</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for products..."
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </View>
      
      {/* Main Content */}
      <ScrollView style={styles.content}>
        {/* Promotions Carousel */}
        <View style={styles.promotionCard}>
          <View style={styles.promotionContent}>
            <View style={styles.promotionText}>
              <View style={styles.promotionBadge}>
                <Text style={styles.promotionBadgeText}>Limited Offer</Text>
              </View>
              <Text style={styles.promotionTitle}>Summer Sale</Text>
              <Text style={styles.promotionDescription}>Get up to 50% off on selected items</Text>
              <TouchableOpacity style={styles.promotionButton}>
                <Text style={styles.promotionButtonText}>Shop Now</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.promotionDiscount}>
              <Text style={styles.discountText}>50%</Text>
            </View>
          </View>
          
          {/* Carousel Indicators */}
          <View style={styles.carouselIndicators}>
            <View style={[styles.indicator, styles.activeIndicator]} />
            <View style={styles.indicator} />
            <View style={styles.indicator} />
          </View>
        </View>
        
        {/* Categories */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesContainer}
          >
            {categories.map((category) => (
              <TouchableOpacity 
                key={category.id}
                style={styles.categoryItem}
                onPress={() => navigation.navigate('ShopCategory')}
              >
                <View style={[styles.categoryIcon, { backgroundColor: category.color }]}>
                  <Text style={styles.categoryIconText}>{category.icon}</Text>
                </View>
                <Text style={styles.categoryName}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        
        {/* Featured Products */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Products</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.productsGrid}>
            {products.map((product) => (
              <TouchableOpacity 
                key={product.id}
                style={styles.productCard}
                onPress={() => navigation.navigate('ProductDetail')}
              >
                <View style={styles.productImage}>
                  <Text style={styles.productIcon}>{product.icon}</Text>
                </View>
                <View style={styles.productDetails}>
                  <Text style={styles.productName} numberOfLines={1}>{product.name}</Text>
                  <View style={styles.ratingContainer}>
                    <View style={styles.stars}>
                      {renderStars(product.rating)}
                    </View>
                    <Text style={styles.reviewCount}>({product.reviewCount})</Text>
                  </View>
                  <View style={styles.priceContainer}>
                    <Text style={styles.price}>${product.price.toFixed(2)}</Text>
                    <TouchableOpacity style={styles.addButton}>
                      <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        {/* Popular Brands */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Brands</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.brandsContainer}
          >
            {brands.map((brand) => (
              <View key={brand.id} style={styles.brandCard}>
                <View style={styles.brandImage} />
              </View>
            ))}
          </ScrollView>
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
        <TouchableOpacity style={styles.navItem}>
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
    paddingBottom: 16,
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
  shopTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  shopSubtitle: {
    fontSize: 12,
    color: '#6B7280',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
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
  cartBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 20,
    height: 20,
    backgroundColor: '#315B0E',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
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
  promotionCard: {
    backgroundColor: '#315B0E',
    borderRadius: 16,
    margin: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  promotionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  promotionText: {
    flex: 1,
    paddingRight: 16,
  },
  promotionBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  promotionBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  promotionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  promotionDescription: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    marginBottom: 12,
  },
  promotionButton: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
  },
  promotionButtonText: {
    color: '#315B0E',
    fontSize: 14,
    fontWeight: '500',
  },
  promotionDiscount: {
    width: 80,
    height: 80,
    backgroundColor: '#4338CA',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  discountText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  carouselIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#A5B4FC',
    marginHorizontal: 3,
  },
  activeIndicator: {
    backgroundColor: 'white',
    width: 12,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  seeAll: {
    fontSize: 14,
    color: '#315B0E',
    fontWeight: '500',
  },
  categoriesContainer: {
    marginHorizontal: -4,
  },
  categoryItem: {
    width: 80,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  categoryIcon: {
    width: 64,
    height: 64,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryIconText: {
    fontSize: 24,
  },
  categoryName: {
    fontSize: 12,
    color: '#374151',
    textAlign: 'center',
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -6,
  },
  productCard: {
    width: '50%',
    padding: 6,
  },
  productImage: {
    backgroundColor: '#E5E7EB',
    borderRadius: 12,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  productIcon: {
    fontSize: 40,
  },
  productDetails: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  productName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  stars: {
    flexDirection: 'row',
  },
  starIcon: {
    fontSize: 12,
    color: '#F59E0B',
    marginRight: 1,
  },
  starEmpty: {
    color: '#D1D5DB',
  },
  reviewCount: {
    fontSize: 10,
    color: '#6B7280',
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#315B0E',
  },
  addButton: {
    width: 28,
    height: 28,
    backgroundColor: '#E0E7FF',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#315B0E',
    fontSize: 14,
    fontWeight: 'bold',
  },
  brandsContainer: {
    marginHorizontal: -8,
  },
  brandCard: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 12,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  brandImage: {
    width: 48,
    height: 48,
    backgroundColor: '#E5E7EB',
    borderRadius: 8,
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
  },
  navItem: {
    alignItems: 'center',
    paddingVertical: 4,
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
  activeNavIcon: {
    color: '#315B0E',
  },
  activeNavText: {
    color: '#315B0E',
    fontWeight: '500',
  },
});

export default ShopHomeScreen;