import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://illustrations.popsy.co/white/mobile-login.svg',
          }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome 👋</Text>
        <Text style={styles.subtitle}>
          This is your onboarding screen.  sfkjsdklfjnkjnjnjnjn
          Build beautiful apps with React Native 🚀
        </Text>
      </View>

      {/* Button Section */}
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.primaryButton}
          onPress={() => Alert.alert('Get Started', 'Primary button clicked')}
        >
          <Text style={styles.primaryButtonText}>Get Started</Text>
        </Pressable>

        <Pressable
          onPress={() => Alert.alert('Skipped')}
        >
          <Text style={styles.skipText}>Skip for now</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },

  imageContainer: {
    flex: 0.55,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: 260,
  },

  textContainer: {
    flex: 0.25,
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6B7280',
    lineHeight: 22,
  },

  buttonContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  primaryButton: {
    width: '100%',
    backgroundColor: '#4F46E5',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  skipText: {
    fontSize: 14,
    color: '#6B7280',
  },
});
