import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Wallet: undefined;
  QRScanner: undefined;
  // Add other screens as needed
};

const QRScannerScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // Recent scans data
  const recentScans = [
    { id: '1', type: 'Payment to Coffee Shop', time: 'Today, 10:23 AM', amount: 4.50, icon: '💸' },
    { id: '2', type: 'Transfer to John', time: 'Yesterday, 5:45 PM', amount: 25.00, icon: '💳' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.icon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Scan QR Code</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
      </View>
      
      {/* Scanner Area */}
      <View style={styles.scannerContainer}>
        <View style={styles.scannerFrame}>
          {/* Scanner Animation */}
          <View style={styles.scannerLine} />
          
          {/* Corner Markers */}
          <View style={[styles.cornerMarker, styles.topLeft]} />
          <View style={[styles.cornerMarker, styles.topRight]} />
          <View style={[styles.cornerMarker, styles.bottomLeft]} />
          <View style={[styles.cornerMarker, styles.bottomRight]} />
          
          {/* Scanner Overlay */}
          <View style={styles.scannerOverlay}>
            <View style={styles.pingCircle}>
              <View style={styles.innerCircle} />
            </View>
          </View>
        </View>
        
        <Text style={styles.instructionText}>
          Position the QR code within the frame to scan
        </Text>
        
        {/* Flash Toggle */}
        <TouchableOpacity style={styles.flashButton}>
          <Text style={styles.icon}>⚡</Text>
          <Text style={styles.flashButtonText}>Toggle Flash</Text>
        </TouchableOpacity>
      </View>
      
      {/* Bottom Actions */}
      <View style={styles.bottomContainer}>
        <View style={styles.recentScansContainer}>
          <Text style={styles.recentScansTitle}>Recent Scans</Text>
          
          <View style={styles.recentScansList}>
            {recentScans.map((scan) => (
              <View key={scan.id} style={styles.scanItem}>
                <View style={styles.scanIcon}>
                  <Text style={styles.scanIconText}>{scan.icon}</Text>
                </View>
                <View style={styles.scanDetails}>
                  <Text style={styles.scanType}>{scan.type}</Text>
                  <Text style={styles.scanTime}>{scan.time}</Text>
                </View>
                <Text style={styles.scanAmount}>${scan.amount.toFixed(2)}</Text>
              </View>
            ))}
          </View>
          
          <View style={styles.viewAllContainer}>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All History</Text>
              <Text style={styles.icon}>→</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      {/* Camera Switch Button */}
      <View style={styles.cameraSwitchButton}>
        <TouchableOpacity style={styles.switchButton}>
          <Text style={styles.icon}>🔄</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1f2937',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1f2937',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    color: 'white',
  },
  scannerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  scannerFrame: {
    width: '100%',
    aspectRatio: 1,
    maxWidth: 300,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
    position: 'relative',
  },
  scannerLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#6366f1',
  },
  cornerMarker: {
    position: 'absolute',
    width: 32,
    height: 32,
    borderColor: '#6366f1',
  },
  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderTopLeftRadius: 8,
  },
  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderTopRightRadius: 8,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderBottomLeftRadius: 8,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderBottomRightRadius: 8,
  },
  scannerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pingCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(99, 102, 241, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(99, 102, 241, 0.4)',
  },
  instructionText: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginBottom: 24,
    fontSize: 14,
  },
  flashButton: {
    backgroundColor: '#1f2937',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  flashButtonText: {
    color: 'white',
    fontSize: 14,
  },
  bottomContainer: {
    padding: 16,
  },
  recentScansContainer: {
    backgroundColor: '#1f2937',
    borderRadius: 12,
    padding: 16,
  },
  recentScansTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
  },
  recentScansList: {
    gap: 12,
  },
  scanItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scanIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(99, 102, 241, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  scanIconText: {
    fontSize: 20,
  },
  scanDetails: {
    flex: 1,
  },
  scanType: {
    color: 'white',
    fontSize: 14,
  },
  scanTime: {
    color: '#9ca3af',
    fontSize: 12,
  },
  scanAmount: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  viewAllContainer: {
    borderTopWidth: 1,
    borderTopColor: '#374151',
    marginTop: 12,
    paddingTop: 12,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  viewAllText: {
    color: '#818cf8',
    fontSize: 14,
  },
  cameraSwitchButton: {
    position: 'absolute',
    bottom: 180,
    right: 16,
  },
  switchButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#1f2937',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default QRScannerScreen;