import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App';

type ProductDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetail'>;

const ProductDetailScreen = () => {
  const navigation = useNavigation<ProductDetailScreenNavigationProp>();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('black');

  const colors = [
    { id: 'black', name: 'Black', hex: '#000000' },
    { id: 'white', name: 'White', hex: '#FFFFFF' },
    { id: 'blue', name: 'Blue', hex: '#3B82F6' },
    { id: 'red', name: 'Red', hex: '#EF4444' },
  ];

  const reviews = [
    {
      id: '1',
      name: 'Sarah Johnson',
      rating: 5,
      date: '2 days ago',
      comment: 'These earbuds are amazing! The sound quality is excellent and the noise cancellation works really well. Battery life is as advertised. Highly recommend!'
    },
    {
      id: '2',
      name: 'Michael Brown',
      rating: 4,
      date: '1 week ago',
      comment: 'Great earbuds for the price. The touch controls take some getting used to, but overall I\'m very satisfied with my purchase.'
    }
  ];

  const similarProducts = [
    { id: '1', name: 'Bluetooth Speaker', price: 59.99 },
    { id: '2', name: 'Wireless Headphones', price: 129.99 },
    { id: '3', name: 'Charging Case', price: 29.99 },
    { id: '4', name: 'Earbuds Pro', price: 149.99 },
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Text 
        key={i} 
        style={[
          styles.starIcon, 
          i < rating ? styles.filledStar : styles.emptyStar
        ]}
      >
        ★
      </Text>
    ));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Product Details</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.icon}>❤️</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => navigation.navigate('Cart')}
          >
            <Text style={styles.icon}>🛒</Text>
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>3</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Main Content */}
      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Product Images */}
        <View style={styles.imageContainer}>
          <View style={styles.mainImage}>
            <Text style={styles.productImagePlaceholder}>🎧</Text>
          </View>
          
          {/* Image Indicators */}
          <View style={styles.imageIndicators}>
            {[1, 2, 3, 4].map((_, i) => (
              <View 
                key={i} 
                style={[
                  styles.imageIndicator, 
                  i === 0 && styles.activeIndicator
                ]} 
              />
            ))}
          </View>
          
          {/* Thumbnails */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.thumbnailsContainer}
          >
            {[1, 2, 3, 4].map((_, i) => (
              <TouchableOpacity 
                key={i}
                style={[
                  styles.thumbnail,
                  i === 0 && styles.activeThumbnail
                ]}
              >
                <Text style={styles.thumbnailPlaceholder}>🎧</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        
        {/* Product Info */}
        <View style={styles.productInfo}>
          <View style={styles.titleRow}>
            <Text style={styles.productTitle}>Wireless Bluetooth Earbuds</Text>
            <View style={styles.inStockBadge}>
              <Text style={styles.inStockText}>In Stock</Text>
            </View>
          </View>
          
          <View style={styles.ratingContainer}>
            <View style={styles.stars}>
              {renderStars(4.9)}
            </View>
            <Text style={styles.ratingText}>4.9 (120 reviews)</Text>
          </View>
          
          <View style={styles.priceContainer}>
            <Text style={styles.currentPrice}>$89.99</Text>
            <Text style={styles.originalPrice}>$129.99</Text>
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>-30%</Text>
            </View>
          </View>
          
          {/* Color Selection */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Color</Text>
            <View style={styles.colorsContainer}>
              {colors.map(color => (
                <TouchableOpacity
                  key={color.id}
                  style={[
                    styles.colorOption,
                    selectedColor === color.id && styles.selectedColor,
                    { backgroundColor: color.hex }
                  ]}
                  onPress={() => setSelectedColor(color.id)}
                >
                  {selectedColor === color.id && (
                    <Text style={styles.colorCheck}>✓</Text>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
          
          {/* Quantity Selection */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Quantity</Text>
            <View style={styles.quantitySelector}>
              <TouchableOpacity 
                style={styles.quantityButton}
                onPress={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityValue}>{quantity}</Text>
              <TouchableOpacity 
                style={styles.quantityButton}
                onPress={() => setQuantity(quantity + 1)}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Description */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.descriptionText}>
              Experience premium sound quality with these wireless Bluetooth earbuds. Featuring active noise cancellation, 
              touch controls, and up to 24 hours of battery life with the charging case. Water and sweat resistant, 
              perfect for workouts and everyday use.
            </Text>
          </View>
          
          {/* Features */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Key Features</Text>
            {[
              'Active Noise Cancellation',
              '24 Hour Battery Life',
              'Water & Sweat Resistant (IPX4)',
              'Touch Controls',
              'Bluetooth 5.0'
            ].map((feature, i) => (
              <View key={i} style={styles.featureItem}>
                <Text style={styles.featureIcon}>✓</Text>
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>
          
          {/* Reviews */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Reviews</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>
            
            {reviews.map(review => (
              <View key={review.id} style={styles.reviewCard}>
                <View style={styles.reviewHeader}>
                  <View style={styles.reviewerInfo}>
                    <View style={styles.avatar} />
                    <View>
                      <Text style={styles.reviewerName}>{review.name}</Text>
                      <View style={styles.reviewStars}>
                        {renderStars(review.rating)}
                      </View>
                    </View>
                  </View>
                  <Text style={styles.reviewDate}>{review.date}</Text>
                </View>
                <Text style={styles.reviewText}>{review.comment}</Text>
              </View>
            ))}
          </View>
          
          {/* Similar Products */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>You May Also Like</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>
            
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              style={styles.similarProductsContainer}
            >
              {similarProducts.map(product => (
                <TouchableOpacity 
                  key={product.id}
                  style={styles.similarProductCard}
                  onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
                >
                  <View style={styles.similarProductImage}>
                    <Text style={styles.productImagePlaceholder}>🎧</Text>
                  </View>
                  <Text style={styles.similarProductName} numberOfLines={1}>{product.name}</Text>
                  <Text style={styles.similarProductPrice}>${product.price.toFixed(2)}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      
      {/* Bottom Action Bar */}
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.totalText}>Total Price</Text>
          <Text style={styles.totalPrice}>$89.99</Text>
        </View>
        <TouchableOpacity 
          style={styles.addToCartButton}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text style={styles.cartIcon}>🛒</Text>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: -40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: '#4B5563',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
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
  cartBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 20,
    height: 20,
    backgroundColor: '#4F46E5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 80,
  },
  imageContainer: {
    marginBottom: 16,
  },
  mainImage: {
    height: 300,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImagePlaceholder: {
    fontSize: 80,
  },
  imageIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  imageIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D1D5DB',
    marginHorizontal: 3,
  },
  activeIndicator: {
    backgroundColor: '#4F46E5',
    width: 12,
  },
  thumbnailsContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  thumbnail: {
    width: 60,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activeThumbnail: {
    borderColor: '#4F46E5',
    borderWidth: 2,
  },
  thumbnailPlaceholder: {
    fontSize: 30,
  },
  productInfo: {
    paddingHorizontal: 16,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    flex: 1,
    marginRight: 12,
  },
  inStockBadge: {
    backgroundColor: '#D1FAE5',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  inStockText: {
    color: '#065F46',
    fontSize: 12,
    fontWeight: '500',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  stars: {
    flexDirection: 'row',
  },
  starIcon: {
    fontSize: 16,
    marginRight: 2,
  },
  filledStar: {
    color: '#F59E0B',
  },
  emptyStar: {
    color: '#D1D5DB',
  },
  ratingText: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 6,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 24,
  },
  currentPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4F46E5',
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 16,
    color: '#9CA3AF',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  discountBadge: {
    backgroundColor: '#FEE2E2',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  discountText: {
    color: '#DC2626',
    fontSize: 12,
    fontWeight: '500',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  seeAll: {
    fontSize: 14,
    color: '#4F46E5',
    fontWeight: '500',
  },
  colorsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  selectedColor: {
    borderColor: '#4F46E5',
    borderWidth: 2,
  },
  colorCheck: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    width: 40,
    height: 40,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 20,
    color: '#4B5563',
  },
  quantityValue: {
    width: 50,
    height: 40,
    backgroundColor: '#F3F4F6',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    color: '#111827',
  },
  descriptionText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 22,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureIcon: {
    color: '#10B981',
    fontSize: 16,
    marginRight: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#6B7280',
  },
  reviewCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  reviewerInfo: {
    flexDirection: 'row',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E5E7EB',
    marginRight: 12,
  },
  reviewerName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 2,
  },
  reviewStars: {
    flexDirection: 'row',
  },
  reviewDate: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  reviewText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  similarProductsContainer: {
    marginHorizontal: -16,
  },
  similarProductCard: {
    width: 140,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginLeft: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  similarProductImage: {
    height: 100,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  similarProductName: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '500',
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 4,
  },
  similarProductPrice: {
    fontSize: 14,
    color: '#4F46E5',
    fontWeight: 'bold',
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  totalText: {
    fontSize: 12,
    color: '#6B7280',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4F46E5',
  },
  addToCartButton: {
    flexDirection: 'row',
    backgroundColor: '#4F46E5',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  cartIcon: {
    fontSize: 20,
    color: '#FFFFFF',
    marginRight: 8,
  },
  addToCartText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});

export default ProductDetailScreen;