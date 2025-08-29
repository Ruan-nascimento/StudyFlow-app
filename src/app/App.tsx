import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, ViewStyle } from 'react-native';
import { globalStyles } from '../styles/globals.styles';
import { Header } from '../layouts/header';
import { useState } from 'react';
import { View } from 'lucide-react';

export default function App() {

  const [selected, setSelected] = useState<"home" | "book" | "bookopen" | "user">("home");

  return (
    <SafeAreaView style={globalStyles.container as ViewStyle}>
        <View style={globalStyles.container}>
          <Text>Hello World</Text>
        </View>

        <Header selected={selected} setSelected={setSelected}/>
        <StatusBar style="light" translucent={true} />
    </SafeAreaView>
  );
}

