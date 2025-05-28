import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  OTPVerification: undefined;

};

const SignupScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [agreeTerms, setAgreeTerms] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
      </View>

      {/* Signup Form */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Create your account by filling the details below</Text>

        {/* Tab Selection */}
        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
            <Text style={styles.activeTabText}>Phone</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Email</Text>
          </TouchableOpacity>
        </View>

        {/* Phone Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone Number</Text>
          <View style={styles.phoneInputContainer}>
            <View style={styles.countryCode}>
              <Text style={styles.countryCodeText}>+1</Text>
            </View>
            <TextInput
              style={styles.phoneInput}
              placeholder="(123) 456-7890"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
          </View>
        </View>

        {/* Password Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Create Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Create a password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity 
              style={styles.showPasswordButton}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Text style={styles.showPasswordIcon}>
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Terms & Conditions */}
        <View style={styles.rememberMeContainer}>
          <TouchableOpacity 
            style={styles.checkbox}
            onPress={() => setAgreeTerms(!agreeTerms)}
          >
            {agreeTerms && <Text style={styles.checkmark}>✓</Text>}
          </TouchableOpacity>
          <Text style={styles.rememberMeText}>I agree to the Terms & Conditions</Text>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.loginButton}
        onPress={() => navigation.navigate('OTPVerification')}>
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>
            Already have an account?{' '}
            <Text style={styles.signupLink}>Log in</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingBottom: 40,
  },
  header: {
    padding: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: '#4b5563',
  },
  formContainer: {
    paddingHorizontal: 24,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 32,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    marginBottom: 24,
  },
  tabButton: {
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#4f46e5',
  },
  activeTabText: {
    color: '#4f46e5',
    fontWeight: '600',
  },
  tabText: {
    color: '#9ca3af',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  phoneInputContainer: {
    flexDirection: 'row',
  },
  countryCode: {
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 12,
    justifyContent: 'center',
  },
  countryCodeText: {
    color: '#6b7280',
  },
  phoneInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderLeftWidth: 0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    padding: 12,
  },
  passwordContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
  },
  passwordInput: {
    flex: 1,
    padding: 12,
  },
  showPasswordButton: {
    padding: 12,
    justifyContent: 'center',
  },
  showPasswordIcon: {
    fontSize: 20,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 4,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    fontSize: 12,
    color: '#4f46e5',
  },
  rememberMeText: {
    fontSize: 14,
    color: '#374151',
  },
  loginButton: {
    backgroundColor: '#4f46e5',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  signupContainer: {
    alignItems: 'center',
  },
  signupText: {
    color: '#6b7280',
    fontSize: 14,
  },
  signupLink: {
    color: '#4f46e5',
    fontWeight: '500',
  },
});

export default SignupScreen;
