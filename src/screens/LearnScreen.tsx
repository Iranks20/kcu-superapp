import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  TextInput,
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
  Profile: undefined;
  CourseDetail: undefined;
};

const LearnScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // Learning stats data
  const learningStats = [
    { id: '1', label: 'Courses', value: '12', color: '#3B82F6', bgColor: '#EFF6FF' },
    { id: '2', label: 'Hours', value: '48.5', color: '#10B981', bgColor: '#ECFDF5' },
    { id: '3', label: 'Certificates', value: '5', color: '#8B5CF6', bgColor: '#F5F3FF' },
  ];

  // Continue learning courses
  const continueLearning = [
    { 
      id: '1', 
      title: 'Introduction to Digital Marketing', 
      instructor: 'Sarah Johnson', 
      progress: 0.45, 
      hoursLeft: 2.5,
      rating: 4.8,
      icon: '💻',
      bgColor: '#C7D2FE',
      iconColor: '#4F46E5'
    },
    { 
      id: '2', 
      title: 'Data Analysis Fundamentals', 
      instructor: 'Michael Brown', 
      progress: 0.68, 
      hoursLeft: 1.2,
      rating: 4.6,
      icon: '📊',
      bgColor: '#D1FAE5',
      iconColor: '#10B981'
    }
  ];

  // Course categories
  const categories = [
    { id: '1', name: 'Technology', courses: 125, icon: '💻', bgColor: '#3B82F6' },
    { id: '2', name: 'Business', courses: 98, icon: '📈', bgColor: '#10B981' },
    { id: '3', name: 'Design', courses: 78, icon: '🎨', bgColor: '#8B5CF6' },
    { id: '4', name: 'Marketing', courses: 64, icon: '📢', bgColor: '#F97316' },
  ];

  // Recommended courses
  const recommendedCourses = [
    { 
      id: '1', 
      title: 'UX/UI Design Principles', 
      instructor: 'Alex Johnson', 
      duration: '8 hours', 
      level: 'Beginner',
      price: '$49.99',
      rating: 4.9,
      icon: '🎨',
      bgColor: '#FECACA',
      iconColor: '#EF4444'
    },
    { 
      id: '2', 
      title: 'Financial Planning 101', 
      instructor: 'Emily Wilson', 
      duration: '6 hours', 
      level: 'Intermediate',
      price: '$39.99',
      rating: 4.7,
      icon: '💰',
      bgColor: '#FEF3C7',
      iconColor: '#D97706'
    },
    { 
      id: '3', 
      title: 'Web Development Bootcamp', 
      instructor: 'David Miller', 
      duration: '12 hours', 
      level: 'All Levels',
      price: '$59.99',
      rating: 4.8,
      icon: '🌐',
      bgColor: '#CCFBF1',
      iconColor: '#0D9488'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.headerTitle}>e-Learn</Text>
            <Text style={styles.headerSubtitle}>Expand your knowledge</Text>
          </View>
          <View style={styles.headerIcons}>
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
            placeholder="Search for courses..."
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </View>
      
      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Learning Stats */}
        <View style={styles.section}>
          <View style={styles.statsCard}>
            <Text style={styles.sectionTitle}>Your Learning Stats</Text>
            <View style={styles.statsGrid}>
              {learningStats.map((stat) => (
                <View key={stat.id} style={[styles.statItem, { backgroundColor: stat.bgColor }]}>
                  <Text style={[styles.statLabel, { color: stat.color }]}>{stat.label}</Text>
                  <Text style={styles.statValue}>{stat.value}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        
        {/* Continue Learning */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Continue Learning</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.coursesList}>
            {continueLearning.map((course) => (
              <TouchableOpacity 
                key={course.id} 
                style={styles.courseCard}
                onPress={() => navigation.navigate('CourseDetail')}
              >
                <View style={[styles.courseImage, { backgroundColor: course.bgColor }]}>
                  <View style={[styles.courseIcon, { backgroundColor: course.iconColor }]}>
                    <Text style={styles.courseIconText}>{course.icon}</Text>
                  </View>
                  <View style={styles.resumeButton}>
                    <View style={styles.playButton}>
                      <Text style={styles.playIcon}>▶</Text>
                    </View>
                    <Text style={styles.resumeText}>Resume</Text>
                  </View>
                </View>
                <View style={styles.courseDetails}>
                  <Text style={styles.courseTitle}>{course.title}</Text>
                  <View style={styles.courseMeta}>
                    <Text style={styles.courseInstructor}>by {course.instructor}</Text>
                    <View style={styles.ratingContainer}>
                      <Text style={styles.ratingIcon}>⭐</Text>
                      <Text style={styles.ratingText}>{course.rating}</Text>
                    </View>
                  </View>
                  <View style={styles.progressContainer}>
                    <View style={styles.progressBar}>
                      <View style={[styles.progressFill, { width: `${course.progress * 100}%`, backgroundColor: course.iconColor }]} />
                    </View>
                    <Text style={styles.progressText}>
                      {Math.round(course.progress * 100)}% completed • {course.hoursLeft} hours left
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        {/* Course Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.categoriesGrid}>
            {categories.map((category) => (
              <TouchableOpacity 
                key={category.id} 
                style={[styles.categoryCard, { backgroundColor: category.bgColor }]}
              >
                <View style={styles.categoryHeader}>
                  <View style={styles.categoryIcon}>
                    <Text style={styles.categoryIconText}>{category.icon}</Text>
                  </View>
                  <Text style={styles.categoryName}>{category.name}</Text>
                </View>
                <Text style={styles.categoryCourses}>{category.courses} courses</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        {/* Recommended Courses */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommended For You</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.recommendedScroll}
          >
            {recommendedCourses.map((course) => (
              <TouchableOpacity 
                key={course.id} 
                style={styles.recommendedCard}
                onPress={() => navigation.navigate('CourseDetail')}
              >
                <View style={[styles.recommendedImage, { backgroundColor: course.bgColor }]}>
                  <View style={[styles.recommendedIcon, { backgroundColor: course.iconColor }]}>
                    <Text style={styles.recommendedIconText}>{course.icon}</Text>
                  </View>
                </View>
                <View style={styles.recommendedDetails}>
                  <Text style={styles.recommendedTitle}>{course.title}</Text>
                  <View style={styles.recommendedMeta}>
                    <Text style={styles.recommendedInstructor}>by {course.instructor}</Text>
                    <View style={styles.ratingContainer}>
                      <Text style={styles.ratingIcon}>⭐</Text>
                      <Text style={styles.ratingText}>{course.rating}</Text>
                    </View>
                  </View>
                  <View style={styles.recommendedFooter}>
                    <Text style={styles.recommendedInfo}>
                      {course.duration} • {course.level}
                    </Text>
                    <Text style={styles.recommendedPrice}>{course.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
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
    </SafeAreaView>
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
  scrollContent: {
    paddingBottom: 120,
  },  
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#6B7280',
  },
  headerIcons: {
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
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  statsCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  seeAll: {
    fontSize: 14,
    color: '#4F46E5',
    fontWeight: '500',
  },
  coursesList: {
    gap: 12,
  },
  courseCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  courseImage: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  courseIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  courseIconText: {
    fontSize: 28,
  },
  resumeButton: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  playButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  playIcon: {
    fontSize: 12,
    color: '#111827',
  },
  resumeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  courseDetails: {
    padding: 16,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 8,
  },
  courseMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  courseInstructor: {
    fontSize: 12,
    color: '#6B7280',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingIcon: {
    fontSize: 12,
    color: '#F59E0B',
    marginRight: 4,
  },
  ratingText: {
    fontSize: 12,
    color: '#6B7280',
  },
  progressContainer: {
    marginTop: 8,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
    marginBottom: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    color: '#6B7280',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  categoryIconText: {
    fontSize: 20,
    color: 'white',
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
  },
  categoryCourses: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  recommendedScroll: {
    paddingBottom: 8,
  },
  recommendedCard: {
    width: 240,
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  recommendedImage: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recommendedIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recommendedIconText: {
    fontSize: 28,
  },
  recommendedDetails: {
    padding: 12,
  },
  recommendedTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 8,
  },
  recommendedMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  recommendedInstructor: {
    fontSize: 12,
    color: '#6B7280',
  },
  recommendedFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recommendedInfo: {
    fontSize: 12,
    color: '#6B7280',
  },
  recommendedPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4F46E5',
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
});

export default LearnScreen;