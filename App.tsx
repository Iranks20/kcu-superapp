import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import {
  WelcomeScreen,
  LoginScreen,
  SignupScreen,
  OTPVerificationScreen,
  HomeScreen,
  ShopHomeScreen,
  ProductDetailScreen,
  ShopCategoryScreen,
  CartScreen,
  CheckoutScreen,
  OrderConfirmationScreen,
  WalletScreen,
  QRScannerScreen,
  LearnScreen,
  CourseDetailScreen,
  SocialScreen,
  SocialFeedScreen,
  SocialMessagesScreen,
  SocialChatScreen,
  NewsScreen,
  HealthScreen,
  MedicalAppointmentsScreen,
  FitnessTrackingScreen,
  PlayScreen,
  VideoPlayerScreen,
  ProfileScreen
} from './src/screens';

enableScreens();

// Define your complete navigation types
type RootStackParamList = {
  // Authentication Flow
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  OTPVerification: undefined;
  
  // Main App
  Home: undefined;
  
  // Shop Flow
  ShopHome: undefined;
  ProductDetail: { productId: string };
  ShopCategory: { categoryId: string };
  Cart: undefined;
  Checkout: undefined;
  OrderConfirmation: { orderId: string };
  
  // Wallet Flow
  Wallet: undefined;
  QRScanner: undefined;
  
  // Learn Flow
  Learn: undefined;
  CourseDetail: { courseId: string };
  
  // Social Flow
  Social: undefined;
  SocialFeed: undefined;
  SocialMessages: undefined;
  SocialChat: { chatId: string };
  
  // News Flow
  News: undefined;
  
  // Health Flow
  Health: undefined;
  MedicalAppointments: undefined;
  FitnessTracking: undefined;
  
  // Play Flow
  Play: undefined;
  VideoPlayer: { videoId: string };
  
  // Profile Flow
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: '#ffffff',
              paddingTop: StatusBar.currentHeight
            }
          }}
        >
          {/* Authentication Stack */}
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
          
          {/* Main App Stack */}
          <Stack.Screen name="Home" component={HomeScreen} />
          
          {/* Shop Stack */}
          <Stack.Screen name="ShopHome" component={ShopHomeScreen} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
          <Stack.Screen name="ShopCategory" component={ShopCategoryScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
          <Stack.Screen name="OrderConfirmation" component={OrderConfirmationScreen} />
          
          {/* Wallet Stack */}
          <Stack.Screen name="Wallet" component={WalletScreen} />
          <Stack.Screen name="QRScanner" component={QRScannerScreen} />
          
          {/* Learn Stack */}
          <Stack.Screen name="Learn" component={LearnScreen} />
          <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
          
          {/* Social Stack */}
          <Stack.Screen name="Social" component={SocialScreen} />
          <Stack.Screen name="SocialFeed" component={SocialFeedScreen} />
          <Stack.Screen name="SocialMessages" component={SocialMessagesScreen} />
          <Stack.Screen name="SocialChat" component={SocialChatScreen} />
          
          {/* News Stack */}
          <Stack.Screen name="News" component={NewsScreen} />
          
          {/* Health Stack */}
          <Stack.Screen name="Health" component={HealthScreen} />
          <Stack.Screen name="MedicalAppointments" component={MedicalAppointmentsScreen} />
          <Stack.Screen name="FitnessTracking" component={FitnessTrackingScreen} />
          
          {/* Play Stack */}
          <Stack.Screen name="Play" component={PlayScreen} />
          <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} />
          
          {/* Profile Stack */}
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;