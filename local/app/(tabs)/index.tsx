import { View, Image, StyleSheet, Platform } from 'react-native';
import { useRouter } from 'expo-router';

import Home from './home';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
    }
});