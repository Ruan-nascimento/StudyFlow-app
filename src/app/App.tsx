import { StatusBar } from 'expo-status-bar';
import { Text, View, ViewStyle } from 'react-native';
import { globalStyles } from '../styles/globals.styles';

export default function App() {
  return (
    <View style={globalStyles.container as ViewStyle}>
      <Text>Meu Primeiro App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

