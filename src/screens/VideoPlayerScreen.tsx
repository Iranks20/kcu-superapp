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
  Play: undefined;
  Home: undefined;
  Social: undefined;
  Profile: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

type Comment = {
  id: number;
  user: string;
  avatar: string;
  text: string;
  likes: number;
  time: string;
};

type RelatedVideo = {
  id: string;
  title: string;
  channel: string;
  views: string;
  uploadDate: string;
  duration: string;
  thumbnail: string;
};

export default function VideoPlayerScreen() {
  const navigation = useNavigation<NavigationProp>();
  const { width } = Dimensions.get('window');
  const videoHeight = width * (9/16); // 16:9 aspect ratio

  // Sample video data
  const video = {
    id: "v12345",
    title: "10 Tips for Better Smartphone Photography",
    views: 1245678,
    likes: 45678,
    uploadDate: "2 weeks ago",
    channel: {
      name: "Photography Masterclass",
      subscribers: "2.4M",
      avatar: "https://placehold.co/100x100/e2e8f0/1e293b?text=PM"
    },
    description: "Learn how to take stunning photos with just your smartphone! In this video, we cover composition, lighting, editing, and more to help you capture professional-looking images without expensive equipment.",
    thumbnail: "https://placehold.co/1280x720/e2e8f0/1e293b?text=Photography+Tips",
    comments: [
      {
        id: 1,
        user: "Alex Johnson",
        avatar: "https://placehold.co/100x100/e2e8f0/1e293b?text=AJ",
        text: "These tips completely changed how I take photos with my phone. The composition advice was especially helpful!",
        likes: 342,
        time: "3 days ago"
      },
      {
        id: 2,
        user: "Sarah Miller",
        avatar: "https://placehold.co/100x100/e2e8f0/1e293b?text=SM",
        text: "I've been using the editing app you recommended and it's amazing. Thanks for sharing these great tips!",
        likes: 128,
        time: "1 week ago"
      },
      {
        id: 3,
        user: "David Chen",
        avatar: "https://placehold.co/100x100/e2e8f0/1e293b?text=DC",
        text: "Could you do a follow-up video specifically about night photography with smartphones?",
        likes: 56,
        time: "2 weeks ago"
      }
    ] as Comment[]
  };

  // Sample related videos
  const relatedVideos = [
    {
      id: "v23456",
      title: "Smartphone Photography: Editing Like a Pro",
      channel: "Photography Masterclass",
      views: "845K",
      uploadDate: "1 month ago",
      duration: "18:24",
      thumbnail: "https://placehold.co/640x360/e2e8f0/1e293b?text=Editing"
    },
    {
      id: "v34567",
      title: "Best Camera Apps for iPhone and Android 2023",
      channel: "Tech Reviews",
      views: "1.2M",
      uploadDate: "3 weeks ago",
      duration: "12:45",
      thumbnail: "https://placehold.co/640x360/e2e8f0/1e293b?text=Camera+Apps"
    },
    {
      id: "v45678",
      title: "Landscape Photography Fundamentals",
      channel: "Nature Shots",
      views: "567K",
      uploadDate: "2 months ago",
      duration: "22:18",
      thumbnail: "https://placehold.co/640x360/e2e8f0/1e293b?text=Landscape"
    },
    {
      id: "v56789",
      title: "Portrait Mode: Getting the Perfect Shot",
      channel: "Photography Masterclass",
      views: "723K",
      uploadDate: "3 months ago",
      duration: "15:32",
      thumbnail: "https://placehold.co/640x360/e2e8f0/1e293b?text=Portrait"
    }
  ] as RelatedVideo[];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" translucent />
      
      {/* Video player section */}
      <View style={styles.videoContainer}>
        <Image
          source={{ uri: video.thumbnail }}
          style={[styles.videoThumbnail, { height: videoHeight }]}
        />
        <View style={styles.playButtonContainer}>
          <TouchableOpacity style={styles.playButton}>
            <Text style={styles.playButtonIcon}>▶️</Text>
          </TouchableOpacity>
        </View>
        
        {/* Video controls */}
        <View style={styles.videoControls}>
          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlIcon}>⏯️</Text>
          </TouchableOpacity>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>3:45</Text>
              <Text style={styles.timeText}>10:28</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlIcon}>⏏️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main content */}
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
          {/* Video info */}
        <View style={styles.section}>
          <Text style={styles.videoTitle}>{video.title}</Text>
            
          <View style={styles.statsContainer}>
            <Text style={styles.statsText}>{video.views.toLocaleString()} views</Text>
            <Text style={styles.statsDot}>•</Text>
            <Text style={styles.statsText}>{video.uploadDate}</Text>
          </View>
            
          <View style={styles.channelContainer}>
            <View style={styles.channelInfo}>
              <Image
                source={{ uri: video.channel.avatar }}
                style={styles.channelAvatar}
                />
              <View>
                <Text style={styles.channelName}>{video.channel.name}</Text>
                <Text style={styles.subscriberCount}>{video.channel.subscribers} subscribers</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.subscribeButton}>
              <Text style={styles.subscribeButtonText}>Subscribe</Text>
            </TouchableOpacity>
          </View>
            
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>👍</Text>
              <Text style={styles.actionText}>{video.likes.toLocaleString()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>👎</Text>
              <Text style={styles.actionText}>Dislike</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>↗️</Text>
              <Text style={styles.actionText}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>🔖</Text>
              <Text style={styles.actionText}>Save</Text>
            </TouchableOpacity>
          </View>
            
          <View style={styles.descriptionContainer}>
            <Text style={styles.description} numberOfLines={3}>
                {video.description}
            </Text>
            <TouchableOpacity>
              <Text style={styles.showMoreText}>Show more</Text>
            </TouchableOpacity>
          </View>
        </View>

          {/* Comments section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Comments</Text>
            <TouchableOpacity style={styles.sortButton}>
              <Text style={styles.sortIcon}>↕️</Text>
              <Text style={styles.sortText}>Sort by</Text>
            </TouchableOpacity>
          </View>
            
            {/* Add comment */}
          <View style={styles.addCommentContainer}>
            <Image
              source={{ uri: "https://placehold.co/100x100/e2e8f0/1e293b?text=You" }}
              style={styles.userAvatar}
              />
            <TextInput
              style={styles.commentInput}
                  placeholder="Add a comment..."
              placeholderTextColor="#9CA3AF"
                />
          </View>
            
            {/* Comments list */}
          <View style={styles.commentsList}>
              {video.comments.map((comment) => (
              <View key={comment.id} style={styles.commentContainer}>
                <Image
                  source={{ uri: comment.avatar }}
                  style={styles.userAvatar}
                  />
                <View style={styles.commentContent}>
                  <View style={styles.commentHeader}>
                    <Text style={styles.commentUser}>{comment.user}</Text>
                    <Text style={styles.commentTime}>{comment.time}</Text>
                  </View>
                  <Text style={styles.commentText}>{comment.text}</Text>
                  <View style={styles.commentActions}>
                    <TouchableOpacity style={styles.commentAction}>
                      <Text style={styles.actionIcon}>👍</Text>
                      <Text style={styles.actionCount}>{comment.likes}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.commentAction}>
                      <Text style={styles.actionIcon}>👎</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.replyText}>Reply</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              ))}
          </View>
            
          <TouchableOpacity style={styles.showMoreButton}>
            <Text style={styles.showMoreButtonText}>Show More Comments</Text>
          </TouchableOpacity>
        </View>

          {/* Related videos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Related Videos</Text>
            
          <View style={styles.relatedVideosList}>
              {relatedVideos.map((relatedVideo) => (
              <TouchableOpacity 
                  key={relatedVideo.id}
                style={styles.relatedVideoItem}
                onPress={() => navigation.navigate('Play')}
                >
                <View style={styles.relatedVideoThumbnail}>
                  <Image
                    source={{ uri: relatedVideo.thumbnail }}
                    style={styles.thumbnailImage}
                    />
                  <View style={styles.durationBadge}>
                    <Text style={styles.durationText}>{relatedVideo.duration}</Text>
                  </View>
                </View>
                <View style={styles.relatedVideoInfo}>
                  <Text style={styles.relatedVideoTitle} numberOfLines={2}>
                    {relatedVideo.title}
                  </Text>
                  <Text style={styles.relatedVideoChannel}>{relatedVideo.channel}</Text>
                  <View style={styles.relatedVideoStats}>
                    <Text style={styles.relatedVideoViews}>{relatedVideo.views} views</Text>
                    <Text style={styles.relatedVideoDot}>•</Text>
                    <Text style={styles.relatedVideoDate}>{relatedVideo.uploadDate}</Text>
                  </View>
                </View>
              </TouchableOpacity>
              ))}
          </View>
        </View>
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
          onPress={() => navigation.navigate('Play')}
        >
          <Text style={[styles.navIcon, styles.activeNavIcon]}>▶️</Text>
          <Text style={[styles.navText, styles.activeNavText]}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Social')}
        >
          <Text style={styles.navIcon}>👥</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  videoContainer: {
    backgroundColor: '#000000',
    position: 'relative',
  },
  videoThumbnail: {
    width: '100%',
    resizeMode: 'cover',
  },
  playButtonContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonIcon: {
    fontSize: 32,
  },
  videoControls: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  controlButton: {
    padding: 8,
  },
  controlIcon: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  progressContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#4B5563',
    borderRadius: 2,
  },
  progressFill: {
    width: '33%',
    height: '100%',
    backgroundColor: '#EF4444',
    borderRadius: 2,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  timeText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 16,
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  statsText: {
    fontSize: 14,
    color: '#6B7280',
  },
  statsDot: {
    marginHorizontal: 8,
    color: '#6B7280',
  },
  channelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  channelInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  channelAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  channelName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
  },
  subscriberCount: {
    fontSize: 12,
    color: '#6B7280',
  },
  subscribeButton: {
    backgroundColor: '#EF4444',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  subscribeButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  actionButton: {
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
  descriptionContainer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  description: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
  showMoreText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2563EB',
    marginTop: 8,
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
    color: '#1F2937',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortIcon: {
    fontSize: 20,
    marginRight: 4,
  },
  sortText: {
    fontSize: 14,
    color: '#4B5563',
  },
  addCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  userAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  commentInput: {
    flex: 1,
    fontSize: 14,
    color: '#1F2937',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingVertical: 8,
  },
  commentsList: {
    gap: 16,
  },
  commentContainer: {
    flexDirection: 'row',
  },
  commentContent: {
    flex: 1,
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  commentUser: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
  },
  commentTime: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 8,
  },
  commentText: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 8,
  },
  commentActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentAction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  actionCount: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  replyText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
  },
  showMoreButton: {
    backgroundColor: '#EFF6FF',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 16,
  },
  showMoreButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2563EB',
  },
  relatedVideosList: {
    gap: 16,
  },
  relatedVideoItem: {
    flexDirection: 'row',
  },
  relatedVideoThumbnail: {
    width: 160,
    height: 90,
    borderRadius: 8,
    overflow: 'hidden',
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
  },
  durationBadge: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  durationText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  relatedVideoInfo: {
    flex: 1,
    marginLeft: 12,
  },
  relatedVideoTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
    marginBottom: 4,
  },
  relatedVideoChannel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  relatedVideoStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  relatedVideoViews: {
    fontSize: 12,
    color: '#6B7280',
  },
  relatedVideoDot: {
    marginHorizontal: 4,
    color: '#6B7280',
  },
  relatedVideoDate: {
    fontSize: 12,
    color: '#6B7280',
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
    color: '#EF4444',
  },
  activeNavText: {
    color: '#EF4444',
  },
});