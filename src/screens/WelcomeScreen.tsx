import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
  StatusBar
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define your navigation types
type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined; // Add this if you have a SignupScreen
};

const WelcomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* App Logo and Welcome Text */}
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>KCU</Text>
        </View>
        <Text style={styles.title}>Welcome to KCU</Text>
        <Text style={styles.subtitle}>Your all-in-one super app for daily needs</Text>
      </View>
      
      {/* Authentication Buttons */}
      <View style={styles.authContainer}>
      <TouchableOpacity 
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.signupButton}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
        
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or continue with</Text>
          <View style={styles.divider} />
        </View>
        
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <View style={[styles.socialIcon, { backgroundColor: '#3b5998' }]} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.socialButton}>
            <View style={[styles.socialIcon, { backgroundColor: '#db4437' }]} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.socialButton}>
            <View style={[styles.socialIcon, { backgroundColor: '#000000' }]} />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Terms and Privacy */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          By continuing, you agree to our{' '}
          <Text style={styles.link}>Terms of Service</Text> and{' '}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9ff',
    padding: 20,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
  },
  logo: {
    width: 96,
    height: 96,
    backgroundColor: 'green',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    elevation: 5,
  },
  logoText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 40,
  },
  authContainer: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  loginButton: {
    backgroundColor: 'green',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  signupButton: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginBottom: 24,
    elevation: 1,
  },
  signupButtonText: {
    color: 'green',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#e5e7eb',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#9ca3af',
    fontSize: 14,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  socialButton: {
    width: 56,
    height: 56,
    backgroundColor: 'white',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    elevation: 1,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  socialIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  footer: {
    paddingBottom: 40,
  },
  footerText: {
    textAlign: 'center',
    color: '#9ca3af',
    fontSize: 12,
  },
  link: {
    color: 'green',
    textDecorationLine: 'underline',
  },
});

export default WelcomeScreen;