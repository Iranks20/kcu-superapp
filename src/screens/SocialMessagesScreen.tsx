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
  SocialChat: { userId: string };
  Profile: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

type User = {
  id: string;
  name: string;
  avatar: string;
  isOnline?: boolean;
};

type Message = {
  text: string;
  time: string;
  isRead: boolean;
  isFromCurrentUser: boolean;
};

type Conversation = {
  id: string;
  user: User;
  lastMessage: Message;
  unreadCount: number;
};

export default function SocialMessagesScreen() {
  const navigation = useNavigation<NavigationProp>();

  // Sample user data
  const currentUser = {
    id: "user1",
    name: "John Doe",
    avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=JD"
  };

  // Sample conversations data
  const conversations = [
    {
      id: "conv1",
      user: {
        id: "user2",
        name: "Sarah Johnson",
        avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=SJ",
        isOnline: true
      },
      lastMessage: {
        text: "Are we still meeting for coffee tomorrow?",
        time: "10:42 AM",
        isRead: true,
        isFromCurrentUser: false
      },
      unreadCount: 0
    },
    {
      id: "conv2",
      user: {
        id: "user3",
        name: "Michael Chen",
        avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=MC",
        isOnline: false
      },
      lastMessage: {
        text: "I'll send you the project files when I get home",
        time: "Yesterday",
        isRead: false,
        isFromCurrentUser: false
      },
      unreadCount: 2
    },
    {
      id: "conv3",
      user: {
        id: "user4",
        name: "Emily Rodriguez",
        avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=ER",
        isOnline: true
      },
      lastMessage: {
        text: "Thanks for the recommendation!",
        time: "Yesterday",
        isRead: true,
        isFromCurrentUser: true
      },
      unreadCount: 0
    },
    {
      id: "conv4",
      user: {
        id: "user5",
        name: "David Wilson",
        avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=DW",
        isOnline: false
      },
      lastMessage: {
        text: "Let me know when you've checked out that new restaurant",
        time: "Monday",
        isRead: true,
        isFromCurrentUser: false
      },
      unreadCount: 0
    },
    {
      id: "conv5",
      user: {
        id: "user6",
        name: "Jessica Taylor",
        avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=JT",
        isOnline: true
      },
      lastMessage: {
        text: "Did you see the game last night?",
        time: "Monday",
        isRead: false,
        isFromCurrentUser: false
      },
      unreadCount: 1
    },
    {
      id: "conv6",
      user: {
        id: "user7",
        name: "Robert Brown",
        avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=RB",
        isOnline: false
      },
      lastMessage: {
        text: "I've shared the vacation photos with you",
        time: "Last week",
        isRead: true,
        isFromCurrentUser: false
      },
      unreadCount: 0
    }
  ] as Conversation[];

  // Sample active users for stories/quick access
  const activeUsers = conversations
    .filter(conv => conv.user.isOnline)
    .map(conv => conv.user);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.navigate('Social')}
          >
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Messages</Text>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerIcon}>🔍</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerIcon}>⋮</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search messages"
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </View>

      {/* Main content */}
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Active now */}
        {activeUsers.length > 0 && (
          <View style={styles.activeNowContainer}>
            <Text style={styles.sectionTitle}>Active Now</Text>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.activeUsersScroll}
            >
              {activeUsers.map((user) => (
                <TouchableOpacity
                  key={user.id}
                  style={styles.activeUserItem}
                  onPress={() => navigation.navigate('SocialChat', { userId: user.id })}
                >
                  <View style={styles.activeUserAvatarContainer}>
                    <Image
                      source={{ uri: user.avatar }}
                      style={styles.activeUserAvatar}
                    />
                    <View style={styles.onlineIndicator} />
                  </View>
                  <Text style={styles.activeUserName} numberOfLines={1}>
                    {user.name.split(' ')[0]}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        {/* Conversations list */}
        <View style={styles.conversationsContainer}>
          <View style={styles.conversationsHeader}>
            <Text style={styles.sectionTitle}>Messages</Text>
            <View style={styles.filterButtons}>
              <TouchableOpacity style={[styles.filterButton, styles.filterButtonActive]}>
                <Text style={[styles.filterButtonText, styles.filterButtonTextActive]}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterButtonText}>Unread</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.conversationsList}>
            {conversations.map((conversation) => (
              <TouchableOpacity
                key={conversation.id}
                style={[
                  styles.conversationItem,
                  conversation.unreadCount > 0 && styles.conversationItemUnread
                ]}
                onPress={() => navigation.navigate('SocialChat', { userId: conversation.user.id })}
              >
                <View style={styles.conversationAvatarContainer}>
                  <Image
                    source={{ uri: conversation.user.avatar }}
                    style={styles.conversationAvatar}
                  />
                  {conversation.user.isOnline && (
                    <View style={styles.onlineIndicator} />
                  )}
                </View>
                <View style={styles.conversationContent}>
                  <View style={styles.conversationHeader}>
                    <Text style={[
                      styles.conversationName,
                      conversation.unreadCount > 0 && styles.conversationNameUnread
                    ]}>
                      {conversation.user.name}
                    </Text>
                    <Text style={styles.conversationTime}>
                      {conversation.lastMessage.time}
                    </Text>
                  </View>
                  <View style={styles.conversationFooter}>
                    <Text style={[
                      styles.conversationMessage,
                      conversation.unreadCount > 0 && styles.conversationMessageUnread
                    ]} numberOfLines={1}>
                      {conversation.lastMessage.isFromCurrentUser && "You: "}
                      {conversation.lastMessage.text}
                    </Text>
                    {conversation.unreadCount > 0 && (
                      <View style={styles.unreadBadge}>
                        <Text style={styles.unreadCount}>
                          {conversation.unreadCount}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* New message button */}
      <TouchableOpacity style={styles.newMessageButton}>
        <Text style={styles.newMessageIcon}>+</Text>
      </TouchableOpacity>

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
          <Text style={styles.navIcon}>👥</Text>
          <Text style={styles.navText}>Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Social')}
        >
          <Text style={[styles.navIcon, styles.activeNavIcon]}>💬</Text>
          <Text style={[styles.navText, styles.activeNavText]}>Messages</Text>
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
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 12,
  },
  backIcon: {
    fontSize: 24,
    color: '#4B5563',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
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
    color: '#4B5563',
  },
  searchContainer: {
    padding: 16,
    paddingTop: 8,
    backgroundColor: '#FFFFFF',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  searchIcon: {
    fontSize: 20,
    color: '#9CA3AF',
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
    color: '#1F2937',
  },
  scrollView: {
    flex: 1,
  },
  activeNowContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4B5563',
    marginBottom: 12,
  },
  activeUsersScroll: {
    paddingRight: 16,
  },
  activeUserItem: {
    alignItems: 'center',
    marginRight: 16,
    width: 56,
  },
  activeUserAvatarContainer: {
    position: 'relative',
  },
  activeUserAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    backgroundColor: '#10B981',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 6,
  },
  activeUserName: {
    fontSize: 12,
    color: '#4B5563',
    marginTop: 4,
    textAlign: 'center',
  },
  conversationsContainer: {
    marginTop: 8,
  },
  conversationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  filterButtons: {
    flexDirection: 'row',
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
    marginLeft: 8,
  },
  filterButtonActive: {
    backgroundColor: '#EFF6FF',
  },
  filterButtonText: {
    fontSize: 12,
    color: '#4B5563',
  },
  filterButtonTextActive: {
    color: '#2563EB',
  },
  conversationsList: {
    backgroundColor: '#FFFFFF',
  },
  conversationItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  conversationItemUnread: {
    backgroundColor: '#EFF6FF',
  },
  conversationAvatarContainer: {
    position: 'relative',
  },
  conversationAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  conversationContent: {
    flex: 1,
    marginLeft: 12,
  },
  conversationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  conversationName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4B5563',
  },
  conversationNameUnread: {
    color: '#1F2937',
  },
  conversationTime: {
    fontSize: 12,
    color: '#6B7280',
  },
  conversationFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  conversationMessage: {
    flex: 1,
    fontSize: 12,
    color: '#6B7280',
    marginRight: 8,
  },
  conversationMessageUnread: {
    color: '#1F2937',
    fontWeight: '500',
  },
  unreadBadge: {
    backgroundColor: '#2563EB',
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadCount: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  newMessageButton: {
    position: 'absolute',
    bottom: 80,
    right: 16,
    width: 48,
    height: 48,
    backgroundColor: '#2563EB',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  newMessageIcon: {
    fontSize: 24,
    color: '#FFFFFF',
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