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
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Social: undefined;
  SocialMessages: undefined;
  Profile: undefined;
  SocialChat: { userId: string };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type ChatRouteProp = RouteProp<RootStackParamList, 'SocialChat'>;

type User = {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
  lastActive: string;
};

type Message = {
  id: string;
  senderId: string;
  text: string;
  time: string;
  status: 'read' | 'delivered' | 'sent';
};

type ChatPartners = {
  [key: string]: User;
};

export default function SocialChatScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<ChatRouteProp>();
  const userId = route.params?.userId || 'user2';

  // Sample current user data
  const currentUser = {
    id: "user1",
    name: "John Doe",
    avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=JD"
  };

  // Sample chat partner data based on userId
  const chatPartners: ChatPartners = {
    user2: {
      id: "user2",
      name: "Sarah Johnson",
      avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=SJ",
      isOnline: true,
      lastActive: "Active now"
    },
    user3: {
      id: "user3",
      name: "Michael Chen",
      avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=MC",
      isOnline: false,
      lastActive: "Last seen 2h ago"
    },
    user4: {
      id: "user4",
      name: "Emily Rodriguez",
      avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=ER",
      isOnline: true,
      lastActive: "Active now"
    },
    user5: {
      id: "user5",
      name: "David Wilson",
      avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=DW",
      isOnline: false,
      lastActive: "Last seen yesterday"
    },
    user6: {
      id: "user6",
      name: "Jessica Taylor",
      avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=JT",
      isOnline: true,
      lastActive: "Active now"
    },
    user7: {
      id: "user7",
      name: "Robert Brown",
      avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=RB",
      isOnline: false,
      lastActive: "Last seen 3d ago"
    }
  };

  const chatPartner = chatPartners[userId] || chatPartners.user2;

  // Sample messages data
  const messages: Message[] = [
    {
      id: "msg1",
      senderId: chatPartner.id,
      text: "Hey there! How's your day going?",
      time: "10:30 AM",
      status: "read"
    },
    {
      id: "msg2",
      senderId: currentUser.id,
      text: "Pretty good, thanks! Just finishing up some work. How about you?",
      time: "10:32 AM",
      status: "read"
    },
    {
      id: "msg3",
      senderId: chatPartner.id,
      text: "I'm doing well! Just got back from the gym and about to grab lunch.",
      time: "10:35 AM",
      status: "read"
    },
    {
      id: "msg4",
      senderId: currentUser.id,
      text: "Nice! What are you planning to eat?",
      time: "10:36 AM",
      status: "read"
    },
    {
      id: "msg5",
      senderId: chatPartner.id,
      text: "Thinking of getting a salad from that new place downtown. Have you tried it yet?",
      time: "10:38 AM",
      status: "read"
    },
    {
      id: "msg6",
      senderId: currentUser.id,
      text: "Not yet, but I've heard good things about it. Let me know how it is!",
      time: "10:40 AM",
      status: "read"
    },
    {
      id: "msg7",
      senderId: chatPartner.id,
      text: "Will do! By the way, are we still meeting for coffee tomorrow?",
      time: "10:42 AM",
      status: "read"
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.navigate('SocialMessages')}
          >
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <View style={styles.headerUserInfo}>
            <Image 
              source={{ uri: chatPartner.avatar }} 
              style={styles.headerAvatar}
            />
            <View style={styles.headerUserDetails}>
              <Text style={styles.headerName}>{chatPartner.name}</Text>
              <Text style={styles.headerStatus}>{chatPartner.lastActive}</Text>
            </View>
          </View>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerIcon}>📞</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerIcon}>🎥</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerIcon}>⋮</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Chat messages */}
      <KeyboardAvoidingView 
        style={styles.chatContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <ScrollView 
          style={styles.messagesContainer}
          contentContainerStyle={styles.messagesContent}
        >
          <View style={styles.dateDivider}>
            <Text style={styles.dateText}>Today</Text>
          </View>
          
          {messages.map((message) => {
            const isFromCurrentUser = message.senderId === currentUser.id;
            return (
              <View 
                key={message.id} 
                style={[
                  styles.messageWrapper,
                  isFromCurrentUser ? styles.messageWrapperRight : styles.messageWrapperLeft
                ]}
              >
                <View style={styles.messageContainer}>
                  {!isFromCurrentUser && (
                    <Image 
                      source={{ uri: chatPartner.avatar }} 
                      style={styles.messageAvatar}
                    />
                  )}
                  <View style={[
                    styles.messageBubble,
                    isFromCurrentUser ? styles.messageBubbleRight : styles.messageBubbleLeft
                  ]}>
                    <Text style={[
                      styles.messageText,
                      isFromCurrentUser ? styles.messageTextRight : styles.messageTextLeft
                    ]}>
                      {message.text}
                    </Text>
                  </View>
                </View>
                <View style={[
                  styles.messageFooter,
                  isFromCurrentUser ? styles.messageFooterRight : styles.messageFooterLeft
                ]}>
                  <Text style={styles.messageTime}>{message.time}</Text>
                  {isFromCurrentUser && (
                    <Text style={styles.messageStatus}>
                      {message.status === 'read' ? '✓✓' : '✓'}
                    </Text>
                  )}
                </View>
              </View>
            );
          })}
        </ScrollView>

        {/* Message input */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TouchableOpacity style={styles.inputButton}>
              <Text style={styles.inputIcon}>😊</Text>
            </TouchableOpacity>
            <TextInput 
              style={styles.input}
              placeholder="Message..."
              placeholderTextColor="#9CA3AF"
            />
            <View style={styles.inputActions}>
              <TouchableOpacity style={styles.inputButton}>
                <Text style={styles.inputIcon}>📎</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.inputButton}>
                <Text style={styles.inputIcon}>📷</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.inputButton}>
                <Text style={styles.inputIcon}>🎤</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.sendButton}>
              <Text style={styles.sendIcon}>➤</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>

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
          onPress={() => navigation.navigate('SocialMessages')}
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
  headerUserInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerUserDetails: {
    marginLeft: 12,
  },
  headerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  headerStatus: {
    fontSize: 12,
    color: '#6B7280',
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
  chatContainer: {
    flex: 1,
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 16,
  },
  dateDivider: {
    alignItems: 'center',
    marginBottom: 16,
  },
  dateText: {
    fontSize: 12,
    color: '#6B7280',
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  messageWrapper: {
    marginBottom: 16,
  },
  messageWrapperLeft: {
    alignItems: 'flex-start',
  },
  messageWrapperRight: {
    alignItems: 'flex-end',
  },
  messageContainer: {
    flexDirection: 'row',
    maxWidth: '75%',
  },
  messageAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
    alignSelf: 'flex-end',
  },
  messageBubble: {
    padding: 12,
    borderRadius: 16,
  },
  messageBubbleLeft: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 4,
  },
  messageBubbleRight: {
    backgroundColor: '#2563EB',
    borderTopRightRadius: 4,
  },
  messageText: {
    fontSize: 14,
    lineHeight: 20,
  },
  messageTextLeft: {
    color: '#1F2937',
  },
  messageTextRight: {
    color: '#FFFFFF',
  },
  messageFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  messageFooterLeft: {
    marginLeft: 40,
  },
  messageFooterRight: {
    marginRight: 8,
  },
  messageTime: {
    fontSize: 12,
    color: '#6B7280',
  },
  messageStatus: {
    fontSize: 12,
    color: '#2563EB',
    marginLeft: 4,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    padding: 12,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 24,
    paddingHorizontal: 12,
  },
  inputButton: {
    padding: 8,
  },
  inputIcon: {
    fontSize: 24,
    color: '#4B5563',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    color: '#1F2937',
    paddingHorizontal: 8,
  },
  inputActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sendButton: {
    width: 40,
    height: 40,
    backgroundColor: '#2563EB',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  sendIcon: {
    fontSize: 20,
    color: '#FFFFFF',
    transform: [{ rotate: '90deg' }],
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