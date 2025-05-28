import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  OTPVerification: undefined;
  Home: undefined;
};

const OTPVerificationScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef<(TextInput | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(3 * 60 + 45); // 3 minutes 45 seconds

  // Handle OTP input change
  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 3) {
      inputs.current[index + 1]?.focus();
    }

    // Submit if last digit is entered
    if (index === 3 && value) {
      handleVerify();
    }
  };

  // Handle backspace
  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  // Verify OTP
  const handleVerify = () => {
    // Here you would typically validate the OTP
    navigation.navigate('Home');
  };

  // Resend OTP
  const handleResend = () => {
    setTimeLeft(3 * 60 + 45); // Reset timer
    // Here you would typically resend the OTP
  };

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
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
      
      {/* OTP Verification Content */}
      <ScrollView 
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Verification Code</Text>
        <Text style={styles.subtitle}>We've sent a code to +1 (123) 456-7890</Text>
        
        {/* OTP Input Fields */}
        <View style={styles.otpContainer}>
          {[0, 1, 2, 3].map((index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref)}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="number-pad"
              value={otp[index]}
              onChangeText={(value) => handleOtpChange(value, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              selectTextOnFocus
            />
          ))}
        </View>
        
        {/* Timer */}
        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>
            Code expires in <Text style={styles.timerHighlight}>{formatTime(timeLeft)}</Text>
          </Text>
        </View>
        
        {/* Verify Button */}
        <TouchableOpacity 
          style={styles.verifyButton}
          onPress={handleVerify}
        >
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>
        
        {/* Resend Code */}
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>
            Didn't receive the code?{' '}
            <Text style={styles.resendLink} onPress={handleResend}>
              Resend
            </Text>
          </Text>
        </View>
      </ScrollView>
      
      {/* Number Pad - Optional for React Native */}
      {/* In React Native, the system keyboard will appear automatically */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  content: {
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 40,
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
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  otpInput: {
    width: 56,
    height: 56,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
  },
  timerContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  timerText: {
    color: '#6b7280',
  },
  timerHighlight: {
    color: '#4f46e5',
    fontWeight: '500',
  },
  verifyButton: {
    backgroundColor: '#4f46e5',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  verifyButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  resendContainer: {
    alignItems: 'center',
  },
  resendText: {
    color: '#6b7280',
    fontSize: 14,
  },
  resendLink: {
    color: '#4f46e5',
    fontWeight: '500',
  },
});

export default OTPVerificationScreen;