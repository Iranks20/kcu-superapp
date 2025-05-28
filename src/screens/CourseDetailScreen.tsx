import React, { useState } from 'react';
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
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Learn: undefined;
  Profile: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

type Course = {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  reviews: number;
  students: number;
  price: number;
  image: string;
  description: string;
  duration: string;
  level: string;
  category: string;
  topics: string[];
};

export default function CourseDetailsScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Sample course data
  const course: Course = {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    rating: 4.8,
    reviews: 1234,
    students: 5678,
    price: 89.99,
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Web+Dev",
    description: "Learn web development from scratch. Master HTML, CSS, JavaScript, React, Node.js, and more. Build real-world projects and get hired as a web developer.",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    category: "Web Development",
    topics: [
      "HTML5 & CSS3",
      "JavaScript ES6+",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
      "Authentication",
      "Deployment",
      "Git & GitHub"
    ]
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2563EB" translucent />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerLeft}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => navigation.navigate('Learn')}
            >
              <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Course Details</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.shareIcon}>📤</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main content */}
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.content}>
          {/* Course header */}
          <View style={styles.courseHeader}>
            <Image
              source={{ uri: course.image }}
              style={styles.courseImage}
            />
            <View style={styles.courseInfo}>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.instructor}>by {course.instructor}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>⭐ {course.rating}</Text>
                <Text style={styles.reviews}>({course.reviews} reviews)</Text>
                <Text style={styles.students}>{course.students} students</Text>
              </View>
            </View>
          </View>

          {/* Course tabs */}
          <View style={styles.tabsContainer}>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'overview' && styles.activeTab]}
              onPress={() => setActiveTab('overview')}
            >
              <Text style={[styles.tabText, activeTab === 'overview' && styles.activeTabText]}>
                Overview
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'curriculum' && styles.activeTab]}
              onPress={() => setActiveTab('curriculum')}
            >
              <Text style={[styles.tabText, activeTab === 'curriculum' && styles.activeTabText]}>
                Curriculum
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'reviews' && styles.activeTab]}
              onPress={() => setActiveTab('reviews')}
            >
              <Text style={[styles.tabText, activeTab === 'reviews' && styles.activeTabText]}>
                Reviews
              </Text>
            </TouchableOpacity>
          </View>

          {/* Course content */}
          <View style={styles.section}>
            {activeTab === 'overview' && (
              <View>
                <Text style={styles.sectionTitle}>About This Course</Text>
                <Text style={styles.description}>{course.description}</Text>
                
                <View style={styles.detailsContainer}>
                  <View style={styles.detailRow}>
                    <Text style={styles.detailIcon}>⏱️</Text>
                    <View>
                      <Text style={styles.detailLabel}>Duration</Text>
                      <Text style={styles.detailValue}>{course.duration}</Text>
                    </View>
                  </View>
                  <View style={styles.detailRow}>
                    <Text style={styles.detailIcon}>📊</Text>
                    <View>
                      <Text style={styles.detailLabel}>Level</Text>
                      <Text style={styles.detailValue}>{course.level}</Text>
                    </View>
                  </View>
                  <View style={styles.detailRow}>
                    <Text style={styles.detailIcon}>📚</Text>
                    <View>
                      <Text style={styles.detailLabel}>Category</Text>
                      <Text style={styles.detailValue}>{course.category}</Text>
                    </View>
                  </View>
                </View>

                <Text style={styles.sectionTitle}>What You'll Learn</Text>
                <View style={styles.topicsList}>
                  {course.topics.map((topic, index) => (
                    <View key={index} style={styles.topicItem}>
                      <Text style={styles.topicIcon}>✓</Text>
                      <Text style={styles.topicText}>{topic}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {activeTab === 'curriculum' && (
              <View style={styles.emptyState}>
                <Text style={styles.emptyStateIcon}>📚</Text>
                <Text style={styles.emptyStateTitle}>Curriculum Coming Soon</Text>
                <Text style={styles.emptyStateText}>
                  The detailed curriculum for this course is being prepared.
                </Text>
              </View>
            )}

            {activeTab === 'reviews' && (
              <View style={styles.emptyState}>
                <Text style={styles.emptyStateIcon}>⭐</Text>
                <Text style={styles.emptyStateTitle}>No Reviews Yet</Text>
                <Text style={styles.emptyStateText}>
                  Be the first to review this course.
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>

      {/* Bottom action button */}
      <View style={styles.actionContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.price}>${course.price}</Text>
        </View>
        <TouchableOpacity style={styles.enrollButton}>
          <Text style={styles.enrollButtonText}>Enroll Now</Text>
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
    backgroundColor: '#2563EB',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
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
    color: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  shareIcon: {
    fontSize: 24,
    color: '#FFFFFF',
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
  courseHeader: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  courseImage: {
    width: '100%',
    height: 200,
  },
  courseInfo: {
    padding: 16,
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  instructor: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rating: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
  },
  reviews: {
    fontSize: 14,
    color: '#6B7280',
  },
  students: {
    fontSize: 14,
    color: '#6B7280',
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#EFF6FF',
    borderRadius: 8,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  activeTabText: {
    color: '#2563EB',
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
    marginBottom: 24,
  },
  detailsContainer: {
    gap: 16,
    marginBottom: 24,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  detailIcon: {
    fontSize: 16,
    marginRight: 12,
    marginTop: 2,
  },
  detailLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 2,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
  },
  topicsList: {
    gap: 12,
  },
  topicItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicIcon: {
    fontSize: 16,
    color: '#2563EB',
    marginRight: 12,
  },
  topicText: {
    fontSize: 14,
    color: '#4B5563',
    flex: 1,
  },
  emptyState: {
    alignItems: 'center',
    padding: 32,
  },
  emptyStateIcon: {
    fontSize: 64,
    color: '#D1D5DB',
    marginBottom: 16,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1F2937',
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  actionContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  priceContainer: {
    flex: 1,
  },
  priceLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 2,
  },
  price: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1F2937',
  },
  enrollButton: {
    flex: 2,
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  enrollButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
}); 