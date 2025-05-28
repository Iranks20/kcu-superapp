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
  TextInput,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Social: undefined;
  News: undefined;
  Profile: undefined;
  SocialMessages: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

type User = {
  name: string;
  username: string;
  avatar: string;
  isVerified?: boolean;
};

type Post = {
  id: number;
  user: User;
  content: string;
  images: string[];
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
};

type Story = {
  id: number;
  user: {
    name: string;
    avatar: string;
    isViewed: boolean;
    isOwn: boolean;
  };
};

export default function SocialFeedScreen() {
  const navigation = useNavigation<NavigationProp>();

  // Sample user data
  const currentUser = {
    name: "John Doe",
    avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=JD",
    username: "@johndoe"
  };

  // Sample posts data
  const posts = [
    {
      id: 1,
      user: {
        name: "Sarah Johnson",
        username: "@sarahj",
        avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=SJ",
        isVerified: true
      },
      content: "Just finished a 10k run! 🏃‍♀️ Feeling amazing and ready to take on the day. Who else is getting their fitness on this morning?",
      images: ["https://placehold.co/600x400/e2e8f0/1e293b?text=Running"],
      timestamp: "15 minutes ago",
      likes: 42,
      comments: 8,
      shares: 3,
      isLiked: true
    },
    {
      id: 2,
      user: {
        name: "Tech Insider",
        username: "@techinsider",
        avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=TI",
        isVerified: true
      },
      content: "Breaking: The newest smartphone from Apple has just been announced with revolutionary AI capabilities. What features are you most excited about?",
      images: [],
      timestamp: "2 hours ago",
      likes: 128,
      comments: 64,
      shares: 22,
      isLiked: false
    },
    {
      id: 3,
      user: {
        name: "Michael Chen",
        username: "@mikechen",
        avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=MC",
        isVerified: false
      },
      content: "Just tried the new café downtown and the coffee is absolutely amazing! ☕ Highly recommend their specialty lattes. Anyone want to join me there tomorrow?",
      images: [
        "https://placehold.co/600x400/e2e8f0/1e293b?text=Coffee+1",
        "https://placehold.co/600x400/e2e8f0/1e293b?text=Coffee+2"
      ],
      timestamp: "5 hours ago",
      likes: 76,
      comments: 15,
      shares: 4,
      isLiked: false
    },
    {
      id: 4,
      user: {
        name: "Travel Enthusiast",
        username: "@traveltheworld",
        avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=TE",
        isVerified: true
      },
      content: "The sunset in Bali last night was absolutely breathtaking! 🌅 Sometimes nature just leaves you speechless. What's the most beautiful sunset you've ever seen?",
      images: ["https://placehold.co/600x400/e2e8f0/1e293b?text=Sunset"],
      timestamp: "1 day ago",
      likes: 215,
      comments: 32,
      shares: 18,
      isLiked: true
    }
  ] as Post[];

  // Sample stories data
  const stories = [
    {
      id: 1,
      user: {
        name: "You",
        avatar: currentUser.avatar,
        isViewed: false,
        isOwn: true
      }
    },
    {
      id: 2,
      user: {
        name: "Emily",
        avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=EM",
        isViewed: false,
        isOwn: false
      }
    },
    {
      id: 3,
      user: {
        name: "David",
        avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=DV",
        isViewed: false,
        isOwn: false
      }
    },
    {
      id: 4,
      user: {
        name: "Jessica",
        avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=JS",
        isViewed: true,
        isOwn: false
      }
    },
    {
      id: 5,
      user: {
        name: "Robert",
        avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=RB",
        isViewed: true,
        isOwn: false
      }
    },
    {
      id: 6,
      user: {
        name: "Sophia",
        avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=SP",
        isViewed: false,
        isOwn: false
      }
    }
  ] as Story[];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>KCU Social</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerIcon}>🔍</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.headerButton}
            onPress={() => navigation.navigate('SocialMessages')}
          >
            <Text style={styles.headerIcon}>💬</Text>
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>3</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main content */}
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Stories */}
        <View style={styles.storiesContainer}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.storiesScrollContent}
          >
            {stories.map((story) => (
              <View key={story.id} style={styles.storyItem}>
                <View style={[
                  styles.storyRing,
                  story.user.isViewed ? styles.storyRingViewed : styles.storyRingUnviewed
                ]}>
                  <View style={styles.storyAvatarContainer}>
                    <Image
                      source={{ uri: story.user.avatar }}
                      style={styles.storyAvatar}
                      />
                      {story.user.isOwn && (
                      <View style={styles.addStoryButton}>
                        <Text style={styles.addStoryIcon}>+</Text>
                      </View>
                      )}
                  </View>
                </View>
                <Text style={styles.storyUsername} numberOfLines={1}>
                  {story.user.name}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Create post */}
        <View style={styles.createPostContainer}>
          <View style={styles.createPostHeader}>
            <Image
              source={{ uri: currentUser.avatar }}
              style={styles.userAvatar}
            />
            <TouchableOpacity style={styles.createPostInput}>
              <Text style={styles.createPostPlaceholder}>
                What's on your mind, {currentUser.name.split(' ')[0]}?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.createPostActions}>
            <TouchableOpacity style={styles.createPostAction}>
              <Text style={[styles.actionIcon, styles.liveIcon]}>📹</Text>
              <Text style={styles.actionText}>Live Video</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.createPostAction}>
              <Text style={[styles.actionIcon, styles.photoIcon]}>📸</Text>
              <Text style={styles.actionText}>Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.createPostAction}>
              <Text style={[styles.actionIcon, styles.feelingIcon]}>😊</Text>
              <Text style={styles.actionText}>Feeling</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Posts */}
          {posts.map((post) => (
          <View key={post.id} style={styles.postContainer}>
              {/* Post header */}
            <View style={styles.postHeader}>
              <View style={styles.postUserInfo}>
                <Image
                  source={{ uri: post.user.avatar }}
                  style={styles.postUserAvatar}
                  />
                <View>
                  <View style={styles.postUserNameContainer}>
                    <Text style={styles.postUserName}>{post.user.name}</Text>
                      {post.user.isVerified && (
                      <Text style={styles.verifiedBadge}>✓</Text>
                      )}
                  </View>
                  <View style={styles.postMetaInfo}>
                    <Text style={styles.postUsername}>{post.user.username}</Text>
                    <Text style={styles.postDot}>•</Text>
                    <Text style={styles.postTimestamp}>{post.timestamp}</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.postOptions}>
                <Text style={styles.optionsIcon}>⋮</Text>
              </TouchableOpacity>
            </View>

              {/* Post content */}
            <View style={styles.postContent}>
              <Text style={styles.postText}>{post.content}</Text>
                
                {post.images.length > 0 && (
                <View style={[
                  styles.postImages,
                  post.images.length > 1 ? styles.postImagesGrid : styles.postImagesSingle
                ]}>
                    {post.images.map((image, index) => (
                    <Image
                        key={index}
                      source={{ uri: image }}
                      style={styles.postImage}
                      />
                    ))}
                </View>
                )}
            </View>

              {/* Post stats */}
            <View style={styles.postStats}>
              <View style={styles.likesContainer}>
                <View style={styles.likesIcon}>
                  <Text style={styles.likesIconText}>👍</Text>
                </View>
                <Text style={styles.statsText}>{post.likes} likes</Text>
              </View>
              <View style={styles.statsRight}>
                <Text style={styles.statsText}>{post.comments} comments</Text>
                <Text style={styles.statsDot}>•</Text>
                <Text style={styles.statsText}>{post.shares} shares</Text>
              </View>
            </View>

              {/* Post actions */}
            <View style={styles.postActions}>
              <TouchableOpacity style={[
                styles.postAction,
                post.isLiked && styles.postActionActive
              ]}>
                <Text style={[
                  styles.actionIcon,
                  post.isLiked && styles.actionIconActive
                ]}>👍</Text>
                <Text style={[
                  styles.actionText,
                  post.isLiked && styles.actionTextActive
                ]}>Like</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.postAction}>
                <Text style={styles.actionIcon}>💬</Text>
                <Text style={styles.actionText}>Comment</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.postAction}>
                <Text style={styles.actionIcon}>↗️</Text>
                <Text style={styles.actionText}>Share</Text>
              </TouchableOpacity>
            </View>
          </View>
          ))}
      </ScrollView>

      {/* Bottom navigation */}
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
          onPress={() => navigation.navigate('Social')}
        >
          <Text style={[styles.navIcon, styles.activeNavIcon]}>👥</Text>
          <Text style={[styles.navText, styles.activeNavText]}>Social</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('News')}
        >
          <Text style={styles.navIcon}>📰</Text>
          <Text style={styles.navText}>News</Text>
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    marginLeft: 16,
  },
  headerIcon: {
    fontSize: 24,
  },
  notificationBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#EF4444',
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  storiesContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
  },
  storiesScrollContent: {
    paddingHorizontal: 16,
  },
  storyItem: {
    alignItems: 'center',
    marginRight: 16,
    width: 64,
  },
  storyRing: {
    padding: 2,
    borderRadius: 32,
    marginBottom: 4,
  },
  storyRingUnviewed: {
    backgroundColor: '#F59E0B',
  },
  storyRingViewed: {
    backgroundColor: '#E5E7EB',
  },
  storyAvatarContainer: {
    position: 'relative',
  },
  storyAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  addStoryButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#2563EB',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  addStoryIcon: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  storyUsername: {
    fontSize: 12,
    color: '#4B5563',
    textAlign: 'center',
  },
  createPostContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginTop: 8,
  },
  createPostHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  createPostInput: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  createPostPlaceholder: {
    color: '#6B7280',
    fontSize: 14,
  },
  createPostActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  createPostAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    fontSize: 20,
    marginRight: 4,
  },
  actionText: {
    fontSize: 14,
    color: '#4B5563',
  },
  liveIcon: {
    color: '#EF4444',
  },
  photoIcon: {
    color: '#10B981',
  },
  feelingIcon: {
    color: '#F59E0B',
  },
  postContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginTop: 8,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  postUserInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postUserAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  postUserNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postUserName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
  },
  verifiedBadge: {
    fontSize: 12,
    color: '#2563EB',
    marginLeft: 4,
  },
  postMetaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postUsername: {
    fontSize: 12,
    color: '#6B7280',
  },
  postDot: {
    marginHorizontal: 4,
    color: '#6B7280',
  },
  postTimestamp: {
    fontSize: 12,
    color: '#6B7280',
  },
  postOptions: {
    padding: 4,
  },
  optionsIcon: {
    fontSize: 20,
    color: '#6B7280',
  },
  postContent: {
    marginTop: 12,
  },
  postText: {
    fontSize: 14,
    color: '#1F2937',
    lineHeight: 20,
  },
  postImages: {
    marginTop: 12,
  },
  postImagesSingle: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  postImagesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -2,
  },
  postImage: {
    height: 200,
    borderRadius: 8,
  },
  postStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  likesIconText: {
    fontSize: 10,
    color: '#FFFFFF',
  },
  statsText: {
    fontSize: 12,
    color: '#6B7280',
  },
  statsRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsDot: {
    marginHorizontal: 4,
    color: '#6B7280',
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  postAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postActionActive: {
  },
  actionIconActive: {
    color: '#2563EB',
  },
  actionTextActive: {
    color: '#2563EB',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingVertical: 8,
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
  },
});