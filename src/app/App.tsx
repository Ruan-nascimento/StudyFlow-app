import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, TextStyle, View, ViewStyle } from 'react-native';
import { globalStyles } from '../styles/globals.styles';
import { ButtonNavigation } from '../components/buttonsNavigation';
import { Book, BookOpen, Home, User2Icon } from 'lucide-react-native';

export default function App() {
  return (
    <SafeAreaView style={globalStyles.container as ViewStyle}>
        <View style={globalStyles.header as ViewStyle}>
          <ButtonNavigation icon={Home} size='lg'/>
          <ButtonNavigation icon={Book} size='lg'/>
          <ButtonNavigation icon={BookOpen} size='lg'/>
          <ButtonNavigation icon={User2Icon} size='lg'/>
        </View>
        <StatusBar style="light" translucent={true} />
    </SafeAreaView>
  );
}

