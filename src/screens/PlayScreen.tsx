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
  Play: undefined;
  Social: undefined;
  Profile: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function PlayScreen() {
  const navigation = useNavigation<NavigationProp>();
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>e-Play</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.iconText}>🔍</Text>
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
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.tabScroll}
          contentContainerStyle={styles.tabContainer}
        >
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>For You</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Games</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Videos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Music</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Podcasts</Text>
          </TouchableOpacity>
        </ScrollView>
        
        {/* Featured Content */}
        <View style={styles.featuredContent}>
          <View style={styles.featuredImage}>
            <View style={styles.featuredGradient} />
          </View>
          <View style={styles.featuredOverlay}>
            <View style={styles.featuredBadge}>
              <Text style={styles.featuredBadgeText}>NEW GAME</Text>
            </View>
            <Text style={styles.featuredTitle}>Cosmic Adventure</Text>
            <Text style={styles.featuredDescription}>
              Explore the universe in this exciting new space adventure game
            </Text>
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playButtonIcon}>▶️</Text>
              <Text style={styles.playButtonText}>Play Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      {/* Main Content - Scrollable */}
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {/* Popular Games */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Games</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.gamesGrid}>
            {['Racing Legends', 'Puzzle Master', 'Battle Royale', 'Word Challenge'].map((game, index) => (
              <View key={index} style={styles.gameCard}>
                <View style={[styles.gameImage, { backgroundColor: getGameColor(index) }]} />
                <View style={styles.gameContent}>
                  <Text style={styles.gameTitle}>{game}</Text>
                  <View style={styles.gameFooter}>
                    <View style={styles.ratingContainer}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Text key={star} style={[styles.star, star <= 4 ? styles.starFilled : styles.starEmpty]}>
                          ⭐
                        </Text>
                      ))}
                    </View>
                    <Text style={styles.gameCategory}>{getGameCategory(index)}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
        
        {/* Trending Videos */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Trending Videos</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.videosContainer}>
            {[
              {
                title: 'Top 10 Gaming Moments of the Year',
                channel: 'KCU Gaming Channel',
                views: '24K views',
                duration: '12:45'
              },
              {
                title: 'How to Master Puzzle Master in 5 Steps',
                channel: 'Game Tips & Tricks',
                views: '18K views',
                duration: '8:32'
              }
            ].map((video, index) => (
              <View key={index} style={styles.videoCard}>
                <View style={styles.videoThumbnail}>
                  <View style={[styles.videoGradient, { backgroundColor: getVideoColor(index) }]} />
                  <View style={styles.playIconContainer}>
                    <Text style={styles.playIcon}>▶️</Text>
                  </View>
                  <View style={styles.durationBadge}>
                    <Text style={styles.durationText}>{video.duration}</Text>
                  </View>
                </View>
                <View style={styles.videoContent}>
                  <Text style={styles.videoTitle}>{video.title}</Text>
                  <View style={styles.videoFooter}>
                    <Text style={styles.channelName}>{video.channel}</Text>
                    <View style={styles.viewsContainer}>
                      <Text style={styles.viewsIcon}>👁️</Text>
                      <Text style={styles.viewsText}>{video.views}</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
        
        {/* Music Playlists */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Music Playlists</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.playlistsGrid}>
            {[
              { title: 'Gaming Beats', songs: '32 songs', color: '#10B981' },
              { title: 'Chill Vibes', songs: '45 songs', color: '#6366F1' },
              { title: 'Workout Mix', songs: '28 songs', color: '#EF4444' },
              { title: 'Focus Mode', songs: '40 songs', color: '#F59E0B' }
            ].map((playlist, index) => (
              <View key={index} style={styles.playlistCard}>
                <View style={styles.playlistHeader}>
                  <View style={[styles.playlistIcon, { backgroundColor: playlist.color }]}>
                    <Text style={styles.playlistIconText}>🎵</Text>
                  </View>
                  <View>
                    <Text style={styles.playlistTitle}>{playlist.title}</Text>
                    <Text style={styles.playlistSongs}>{playlist.songs}</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.playButton}>
                  <Text style={styles.playButtonText}>Play</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
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
          onPress={() => navigation.navigate('Play')}
        >
          <Text style={[styles.navIcon, styles.activeNavIcon]}>🎮</Text>
          <Text style={[styles.navText, styles.activeNavText]}>Play</Text>
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
}

// Helper functions for colors and categories
const getGameColor = (index: number) => {
  const colors = ['#3B82F6', '#10B981', '#EF4444', '#F59E0B'];
  return colors[index % colors.length];
};

const getVideoColor = (index: number) => {
  const colors = ['#8B5CF6', '#3B82F6'];
  return colors[index % colors.length];
};

const getGameCategory = (index: number) => {
  const categories = ['Racing', 'Puzzle', 'Action', 'Word'];
  return categories[index % categories.length];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2937',
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    paddingHorizontal: 16,
    paddingBottom: 16,
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
    color: '#FFFFFF',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  iconText: {
    fontSize: 20,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F59E0B',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  profileInitials: {
    color: '#1F2937',
    fontSize: 14,
    fontWeight: 'bold',
  },
  tabScroll: {
    marginBottom: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  activeTab: {
    backgroundColor: '#F59E0B',
  },
  tabText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#1F2937',
  },
  featuredContent: {
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  featuredGradient: {
    width: '100%',
    height: '100%',
    backgroundColor: '#8B5CF6',
  },
  featuredOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  featuredBadge: {
    backgroundColor: '#F59E0B',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  featuredBadgeText: {
    color: '#1F2937',
    fontSize: 12,
    fontWeight: '500',
  },
  featuredTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  featuredDescription: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    marginBottom: 12,
  },
  playButton: {
    flexDirection: 'row',
    backgroundColor: '#F59E0B',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  playButtonIcon: {
    marginRight: 4,
  },
  playButtonText: {
    color: '#1F2937',
    fontSize: 14,
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
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
    color: '#FFFFFF',
  },
  seeAllText: {
    color: '#F59E0B',
    fontSize: 14,
    fontWeight: '500',
  },
  gamesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  gameCard: {
    width: '48%',
    backgroundColor: '#374151',
    borderRadius: 12,
    overflow: 'hidden',
  },
  gameImage: {
    height: 120,
  },
  gameContent: {
    padding: 12,
  },
  gameTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  gameFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 12,
    marginRight: 2,
  },
  starFilled: {
    color: '#F59E0B',
  },
  starEmpty: {
    color: '#4B5563',
  },
  gameCategory: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  videosContainer: {
    gap: 12,
  },
  videoCard: {
    backgroundColor: '#374151',
    borderRadius: 12,
    overflow: 'hidden',
  },
  videoThumbnail: {
    height: 180,
    position: 'relative',
  },
  videoGradient: {
    width: '100%',
    height: '100%',
  },
  playIconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    fontSize: 24,
  },
  durationBadge: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  durationText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  videoContent: {
    padding: 12,
  },
  videoTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  videoFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  channelName: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  viewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewsIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  viewsText: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  playlistsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  playlistCard: {
    width: '48%',
    backgroundColor: '#374151',
    borderRadius: 12,
    padding: 12,
  },
  playlistHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  playlistIcon: {
    width: 48,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  playlistIconText: {
    fontSize: 24,
  },
  playlistTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  playlistSongs: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#374151',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#4B5563',
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
    color: '#9CA3AF',
    fontSize: 12,
  },
  activeNavIcon: {
    color: '#F59E0B',
  },
  activeNavText: {
    color: '#F59E0B',
    fontWeight: '500',
  },
});