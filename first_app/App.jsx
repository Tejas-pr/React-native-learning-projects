import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Dialog, Portal } from 'react-native-paper';

const App = () => {
  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          icon="camera"
          mode="elevated"
          onPress={() => setVisible(true)}
        >
          Press me
        </Button>
      </View>
      <View>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Actions>
              <Button onPress={() => console.log('Cancel')}>Cancel</Button>
              <Button onPress={() => console.log('Ok')}>Ok</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
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
});
