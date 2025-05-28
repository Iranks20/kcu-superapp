import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  ShopHome: undefined;
  Wallet: undefined;
  Social: undefined;
  Profile: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function NewsScreen() {
  const navigation = useNavigation<NavigationProp>();
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      
      {/* Header - Fixed */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>e-News</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.iconText}>🔍</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.iconText}>🔔</Text>
              <View style={styles.notificationDot} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.profileButton}
              onPress={() => navigation.navigate('Profile')}
            >
              <Text style={styles.profileInitials}>AJ</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Tab Navigation */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>For You</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Technology</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Business</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      
      {/* Scrollable Content */}
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
      {/* Breaking News */}
        <View style={styles.breakingNewsContainer}>
          <View style={styles.breakingNewsHeader}>
            <View style={styles.breakingBadge}>
              <Text style={styles.breakingText}>BREAKING</Text>
            </View>
            <Text style={styles.latestUpdatesText}>Latest Updates</Text>
          </View>
          <View style={styles.breakingNewsContent}>
            <Text style={styles.breakingNewsTitle}>Tech Giant Announces New Smartphone Series</Text>
            <Text style={styles.breakingNewsDescription}>
              The latest flagship devices feature groundbreaking camera technology and all-day battery life.
            </Text>
            <View style={styles.breakingNewsFooter}>
              <Text style={styles.breakingNewsTime}>2 hours ago</Text>
              <Text style={styles.breakingNewsCategory}>Tech News</Text>
            </View>
          </View>
        </View>
        
        {/* Top Stories */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Top Stories</Text>
          
          <View style={styles.storyCard}>
            <View style={[styles.storyImage, { backgroundColor: '#4F46E5' }]} />
            <View style={styles.storyContent}>
              <View style={styles.storyHeader}>
                <View style={styles.techBadge}>
                  <Text style={styles.techBadgeText}>TECHNOLOGY</Text>
                </View>
                <Text style={styles.storyTime}>4 hours ago</Text>
              </View>
              <Text style={styles.storyTitle}>
                Artificial Intelligence Breakthrough Could Revolutionize Healthcare
              </Text>
              <Text style={styles.storyDescription}>
                Researchers have developed a new AI system that can predict patient outcomes with unprecedented accuracy, potentially transforming how doctors diagnose and treat diseases.
              </Text>
              <View style={styles.storyStats}>
                <View style={styles.statItem}>
                  <Text style={styles.iconText}>👁️</Text>
                  <Text style={styles.statText}>2.4K</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.iconText}>💬</Text>
                  <Text style={styles.statText}>128</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.storyCard}>
            <View style={[styles.storyImage, { backgroundColor: '#10B981' }]} />
            <View style={styles.storyContent}>
              <View style={styles.storyHeader}>
                <View style={styles.businessBadge}>
                  <Text style={styles.businessBadgeText}>BUSINESS</Text>
                </View>
                <Text style={styles.storyTime}>6 hours ago</Text>
              </View>
              <Text style={styles.storyTitle}>
                Global Markets Reach Record Highs Amid Economic Recovery
              </Text>
              <Text style={styles.storyDescription}>
                Stock markets around the world are experiencing unprecedented growth as economies bounce back from recent challenges, with tech and renewable energy sectors leading the charge.
              </Text>
              <View style={styles.storyStats}>
                <View style={styles.statItem}>
                  <Text style={styles.iconText}>👁️</Text>
                  <Text style={styles.statText}>1.8K</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.iconText}>💬</Text>
                  <Text style={styles.statText}>95</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        
        {/* Latest News */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Latest News</Text>
          
          <View style={styles.newsItem}>
            <View style={[styles.newsImage, { backgroundColor: '#A78BFA' }]} />
            <View style={styles.newsContent}>
              <View style={styles.scienceBadge}>
                <Text style={styles.scienceBadgeText}>SCIENCE</Text>
              </View>
              <Text style={styles.newsTitle}>
                New Study Reveals Potential for Life on Recently Discovered Exoplanet
              </Text>
              <View style={styles.newsMeta}>
                <Text style={styles.newsTime}>8 hours ago</Text>
                <Text style={styles.newsReadTime}>5 min read</Text>
              </View>
              <View style={styles.newsStats}>
                <View style={styles.statItem}>
                  <Text style={styles.iconText}>👁️</Text>
                  <Text style={styles.statText}>1.2K</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.iconText}>↗️</Text>
                  <Text style={styles.statText}>84</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.newsItem}>
            <View style={[styles.newsImage, { backgroundColor: '#F59E0B' }]} />
            <View style={styles.newsContent}>
              <View style={styles.sportsBadge}>
                <Text style={styles.sportsBadgeText}>SPORTS</Text>
              </View>
              <Text style={styles.newsTitle}>
                International Soccer Tournament Announces Expanded Format for Next Year
              </Text>
              <View style={styles.newsMeta}>
                <Text style={styles.newsTime}>10 hours ago</Text>
                <Text style={styles.newsReadTime}>3 min read</Text>
              </View>
              <View style={styles.newsStats}>
                <View style={styles.statItem}>
                  <Text style={styles.iconText}>👁️</Text>
                  <Text style={styles.statText}>2.5K</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.iconText}>↗️</Text>
                  <Text style={styles.statText}>156</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      
      {/* Bottom Navigation - Fixed */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.iconText}>🏠</Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('ShopHome')}
        >
          <Text style={styles.iconText}>🛍️</Text>
          <Text style={styles.navText}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Wallet')}
        >
          <Text style={styles.iconText}>💳</Text>
          <Text style={styles.navText}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Social')}
        >
          <Text style={styles.iconText}>💬</Text>
          <Text style={styles.navText}>Social</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.iconText}>👤</Text>
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
    marginTop: -25
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 80, // Add padding to account for bottom navigation
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    paddingHorizontal: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
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
    marginLeft: 12,
  },
  iconText: {
    fontSize: 20,
  },
  notificationDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  profileInitials: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#4F46E5',
  },
  tabText: {
    color: '#6B7280',
    fontSize: 14,
  },
  activeTabText: {
    color: '#4F46E5',
    fontWeight: '500',
  },
  breakingNewsContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 12,
    padding: 16,
  },
  breakingNewsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  breakingBadge: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  breakingText: {
    color: '#EF4444',
    fontSize: 12,
    fontWeight: '600',
  },
  latestUpdatesText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  breakingNewsContent: {
    backgroundColor: '#F3F4F6',
    padding: 12,
    borderRadius: 8,
  },
  breakingNewsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  breakingNewsDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  breakingNewsFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  breakingNewsTime: {
    fontSize: 12,
    color: '#6B7280',
  },
  breakingNewsCategory: {
    fontSize: 12,
    color: '#6B7280',
  },
  sectionContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  storyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  storyImage: {
    height: 200,
  },
  storyContent: {
    padding: 16,
  },
  storyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  techBadge: {
    backgroundColor: '#E0E7FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  techBadgeText: {
    color: '#4F46E5',
    fontSize: 12,
    fontWeight: '600',
  },
  businessBadge: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  businessBadgeText: {
    color: '#10B981',
    fontSize: 12,
    fontWeight: '600',
  },
  storyTime: {
    fontSize: 12,
    color: '#6B7280',
  },
  storyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  storyDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
  },
  storyStats: {
    flexDirection: 'row',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  statText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  latestNewsContainer: {
    marginBottom: 0, // Remove bottom margin since we're using paddingBottom in scrollViewContent
  },
  newsItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    flexDirection: 'row',
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  newsImage: {
    width: 96,
    height: 96,
    borderRadius: 8,
    marginRight: 12,
  },
  newsContent: {
    flex: 1,
  },
  scienceBadge: {
    backgroundColor: '#F3E8FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  scienceBadgeText: {
    color: '#A78BFA',
    fontSize: 12,
    fontWeight: '600',
  },
  sportsBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  sportsBadgeText: {
    color: '#F59E0B',
    fontSize: 12,
    fontWeight: '600',
  },
  newsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  newsMeta: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  newsTime: {
    fontSize: 12,
    color: '#6B7280',
  },
  newsReadTime: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 8,
  },
  newsStats: {
    flexDirection: 'row',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
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
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
});