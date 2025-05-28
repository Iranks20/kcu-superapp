'use client';
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
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
  SocialFeed: undefined;
  SocialMessages: undefined;
  SocialChat: { userId: string };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function SocialScreen() {
  const navigation = useNavigation<NavigationProp>();
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>e-Social</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.iconText}>🔔</Text>
              <View style={styles.notificationDot} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.iconText}>📷</Text>
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
          <TouchableOpacity 
            style={[styles.tab, styles.activeTab]}
            onPress={() => navigation.navigate('SocialFeed')}
          >
            <Text style={[styles.tabText, styles.activeTabText]}>Feed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Friends</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.tab}
            onPress={() => navigation.navigate('SocialMessages')}
          >
            <Text style={styles.tabText}>Messages</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Groups</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      
      {/* Stories */}
      <View style={styles.storiesContainer}>
        <Text style={styles.sectionTitle}>Stories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesScroll}>
          <View style={styles.storyItem}>
            <View style={styles.storyCircle}>
              <View style={styles.addStoryButton}>
                <Text style={styles.iconText}>➕</Text>
              </View>
            </View>
            <Text style={styles.storyName}>Your Story</Text>
          </View>
          
          {['Sarah', 'Michael', 'Jessica', 'David', 'Emma'].map((name, index) => (
            <TouchableOpacity 
              key={name} 
              style={styles.storyItem}
              onPress={() => navigation.navigate('SocialChat', { userId: `user${index + 2}` })}
            >
              <View style={[styles.storyCircle, styles.storyCircleActive]}>
                <View style={[styles.storyContent, { backgroundColor: ['#60A5FA', '#34D399', '#FBBF24', '#F87171', '#A78BFA'][index] }]} />
              </View>
              <Text style={styles.storyName}>{name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
      {/* Create Post */}
      <View style={styles.createPostContainer}>
        <View style={styles.createPostHeader}>
          <View style={styles.profileButton}>
            <Text style={styles.profileInitials}>AJ</Text>
          </View>
          <TouchableOpacity 
            style={styles.createPostInput}
            onPress={() => navigation.navigate('SocialFeed')}
          >
            <Text style={styles.createPostPlaceholder}>What's on your mind?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.createPostActions}>
          <TouchableOpacity style={styles.createPostAction}>
            <Text style={styles.iconText}>🎥</Text>
            <Text style={styles.createPostActionText}>Live</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.createPostAction}>
            <Text style={styles.iconText}>📸</Text>
            <Text style={styles.createPostActionText}>Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.createPostAction}>
            <Text style={styles.iconText}>😊</Text>
            <Text style={styles.createPostActionText}>Feeling</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Feed Posts */}
      <ScrollView style={styles.feedContainer}>
        {/* Post 1 */}
        <View style={styles.postContainer}>
          <View style={styles.postHeader}>
            <TouchableOpacity 
              style={styles.postUser}
              onPress={() => navigation.navigate('SocialChat', { userId: 'user2' })}
            >
              <View style={[styles.userAvatar, { backgroundColor: '#60A5FA' }]} />
              <View>
                <Text style={styles.userName}>Sarah Williams</Text>
                <Text style={styles.postTime}>15 minutes ago</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.iconText}>⋮</Text>
            </TouchableOpacity>
          </View>
          
          <Text style={styles.postText}>
            Just finished my morning hike! The view was absolutely breathtaking today. 🏞️ #MorningHike #NatureLover
          </Text>
          
          <View style={styles.postImage}>
            <View style={styles.postImagePlaceholder} />
          </View>
          
          <View style={styles.postStats}>
            <View style={styles.likesContainer}>
              <View style={styles.likesAvatars}>
                <View style={[styles.likeAvatar, { backgroundColor: '#EF4444' }]} />
                <View style={[styles.likeAvatar, { backgroundColor: '#3B82F6' }]} />
                <View style={[styles.likeAvatar, { backgroundColor: '#10B981' }]} />
              </View>
              <Text style={styles.statsText}>87 likes</Text>
            </View>
            <Text style={styles.statsText}>24 comments</Text>
          </View>
          
          <View style={styles.postActions}>
            <TouchableOpacity style={styles.postAction}>
              <Text style={styles.iconText}>❤️</Text>
              <Text style={styles.postActionText}>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.postAction}>
              <Text style={styles.iconText}>💬</Text>
              <Text style={styles.postActionText}>Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.postAction}>
              <Text style={styles.iconText}>↗️</Text>
              <Text style={styles.postActionText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Post 2 */}
        <View style={styles.postContainer}>
          <View style={styles.postHeader}>
            <TouchableOpacity 
              style={styles.postUser}
              onPress={() => navigation.navigate('SocialChat', { userId: 'user3' })}
            >
              <View style={[styles.userAvatar, { backgroundColor: '#34D399' }]} />
              <View>
                <Text style={styles.userName}>Michael Chen</Text>
                <Text style={styles.postTime}>2 hours ago</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.iconText}>⋮</Text>
            </TouchableOpacity>
          </View>
          
          <Text style={styles.postText}>
            Just launched my new tech startup! 🚀 Excited to share this journey with everyone. #StartupLife #TechInnovation
          </Text>
          
          <View style={styles.postImage}>
            <View style={[styles.postImagePlaceholder, { backgroundColor: '#34D399' }]} />
          </View>
          
          <View style={styles.postStats}>
            <View style={styles.likesContainer}>
              <View style={styles.likesAvatars}>
                <View style={[styles.likeAvatar, { backgroundColor: '#EF4444' }]} />
                <View style={[styles.likeAvatar, { backgroundColor: '#3B82F6' }]} />
                <View style={[styles.likeAvatar, { backgroundColor: '#10B981' }]} />
              </View>
              <Text style={styles.statsText}>156 likes</Text>
            </View>
            <Text style={styles.statsText}>42 comments</Text>
          </View>
          
          <View style={styles.postActions}>
            <TouchableOpacity style={styles.postAction}>
              <Text style={styles.iconText}>❤️</Text>
              <Text style={styles.postActionText}>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.postAction}>
              <Text style={styles.iconText}>💬</Text>
              <Text style={styles.postActionText}>Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.postAction}>
              <Text style={styles.iconText}>↗️</Text>
              <Text style={styles.postActionText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Post 3 */}
        <View style={styles.postContainer}>
          <View style={styles.postHeader}>
            <TouchableOpacity 
              style={styles.postUser}
              onPress={() => navigation.navigate('SocialChat', { userId: 'user4' })}
            >
              <View style={[styles.userAvatar, { backgroundColor: '#FBBF24' }]} />
              <View>
                <Text style={styles.userName}>Jessica Martinez</Text>
                <Text style={styles.postTime}>5 hours ago</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.iconText}>⋮</Text>
            </TouchableOpacity>
          </View>
          
          <Text style={styles.postText}>
            Cooking up a storm in the kitchen today! 🍳 Made my famous paella recipe. Who wants to join for dinner? #Foodie #HomeCooking
          </Text>
          
          <View style={styles.postImage}>
            <View style={[styles.postImagePlaceholder, { backgroundColor: '#FBBF24' }]} />
          </View>
          
          <View style={styles.postStats}>
            <View style={styles.likesContainer}>
              <View style={styles.likesAvatars}>
                <View style={[styles.likeAvatar, { backgroundColor: '#EF4444' }]} />
                <View style={[styles.likeAvatar, { backgroundColor: '#3B82F6' }]} />
                <View style={[styles.likeAvatar, { backgroundColor: '#10B981' }]} />
              </View>
              <Text style={styles.statsText}>203 likes</Text>
            </View>
            <Text style={styles.statsText}>67 comments</Text>
          </View>
          
          <View style={styles.postActions}>
            <TouchableOpacity style={styles.postAction}>
              <Text style={styles.iconText}>❤️</Text>
              <Text style={styles.postActionText}>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.postAction}>
              <Text style={styles.iconText}>💬</Text>
              <Text style={styles.postActionText}>Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.postAction}>
              <Text style={styles.iconText}>↗️</Text>
              <Text style={styles.postActionText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      
      {/* Bottom Navigation */}
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
          <Text style={[styles.iconText, styles.activeIconText]}>💬</Text>
          <Text style={[styles.navText, styles.activeNavText]}>Social</Text>
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
  storiesContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginLeft: 16,
    marginBottom: 12,
  },
  storiesScroll: {
    paddingHorizontal: 12,
  },
  storyItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  storyCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  storyCircleActive: {
    borderColor: '#4F46E5',
  },
  storyContent: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  addStoryButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyName: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  createPostContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  createPostHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  createPostInput: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginLeft: 12,
  },
  createPostPlaceholder: {
    color: '#6B7280',
  },
  createPostActions: {
    flexDirection: 'row',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  createPostAction: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  createPostActionText: {
    marginLeft: 4,
    color: '#6B7280',
    fontSize: 14,
  },
  feedContainer: {
    flex: 1,
  },
  postContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    padding: 16,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  postUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
  },
  postTime: {
    fontSize: 12,
    color: '#6B7280',
  },
  postText: {
    fontSize: 14,
    color: '#1F2937',
    marginBottom: 12,
  },
  postImage: {
    height: 200,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 12,
  },
  postImagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E5E7EB',
  },
  postStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesAvatars: {
    flexDirection: 'row',
    marginRight: 8,
  },
  likeAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    marginLeft: -4,
  },
  statsText: {
    fontSize: 12,
    color: '#6B7280',
  },
  postActions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 12,
  },
  postAction: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postActionText: {
    marginLeft: 4,
    color: '#6B7280',
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingVertical: 8,
    paddingHorizontal: 16,
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
  activeNavText: {
    color: '#4F46E5',
    fontWeight: '500',
  },
  iconText: {
    fontSize: 20,
  },
  activeIconText: {
    color: '#4F46E5',
  },
});