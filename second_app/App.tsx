import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FlatCards from './components/FlatCards';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    
    <GluestackUIProvider mode="dark">
      <SafeAreaView>
      <ScrollView>
        <FlatCards />
      </ScrollView>
    </SafeAreaView>
    </GluestackUIProvider>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
