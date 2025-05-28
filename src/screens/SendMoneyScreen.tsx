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
  Wallet: undefined;
  SendMoney: undefined;
};

const SendMoneyScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [amount, setAmount] = React.useState('');
  const [recipient, setRecipient] = React.useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Send Money</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Amount Input */}
        <View style={styles.amountContainer}>
          <Text style={styles.currencySymbol}>$</Text>
          <TextInput
            style={styles.amountInput}
            placeholder="0.00"
            keyboardType="decimal-pad"
            value={amount}
            onChangeText={setAmount}
          />
        </View>

        {/* Recipient Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Recipient</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter recipient name or phone number"
            value={recipient}
            onChangeText={setRecipient}
          />
        </View>

        {/* Recent Recipients */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Recipients</Text>
          <View style={styles.recentRecipients}>
            {['John Doe', 'Sarah Smith', 'Mike Johnson'].map((name, index) => (
              <TouchableOpacity key={index} style={styles.recipientItem}>
                <View style={styles.recipientAvatar}>
                  <Text style={styles.recipientInitial}>{name[0]}</Text>
                </View>
                <Text style={styles.recipientName}>{name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Send Button */}
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send Money</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    marginTop: -40,
  },
  header: {
    backgroundColor: '#315B0E',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    color: 'white',
    fontSize: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  placeholder: {
    width: 40,
  },
  content: {
    padding: 16,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 32,
  },
  currencySymbol: {
    fontSize: 32,
    color: '#111827',
    marginRight: 8,
  },
  amountInput: {
    fontSize: 32,
    color: '#111827',
    fontWeight: '600',
    minWidth: 150,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  recentRecipients: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  recipientItem: {
    alignItems: 'center',
    width: 80,
  },
  recipientAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E0E7FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  recipientInitial: {
    fontSize: 20,
    color: '#315B0E',
    fontWeight: '600',
  },
  recipientName: {
    fontSize: 12,
    color: '#374151',
    textAlign: 'center',
  },
  sendButton: {
    backgroundColor: '#315B0E',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SendMoneyScreen; 