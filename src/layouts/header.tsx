import { View, ViewStyle } from "react-native";
import { globalStyles } from "../styles/globals.styles";
import { ButtonNavigation } from "../components/buttonsNavigation";
import { Book, BookOpen, Home, User2Icon } from "lucide-react-native";

interface HeaderProps {
    selected: "home" | "book" | "bookopen" | "user";
    setSelected: (selected: "home" | "book" | "bookopen" | "user") => void;
}

export function Header({selected, setSelected}: HeaderProps) {
  return (
    <View style={globalStyles.header as ViewStyle}>
        <ButtonNavigation 
        icon={Home} 
        size='lg' 
        variant={selected === "home" ? "primary" : "ghost"} 
        onPress={() => setSelected("home")}/>

        <ButtonNavigation 
        icon={Book} 
        size='lg' 
        variant={selected === "book" ? "primary" : "ghost"} 
        onPress={() => setSelected("book")}/>

        <ButtonNavigation 
        icon={BookOpen} 
        size='lg' 
        variant={selected === "bookopen" ? "primary" : "ghost"} 
        onPress={() => setSelected("bookopen")}/>
        
        <ButtonNavigation 
        icon={User2Icon} 
        size='lg' 
        variant={selected === "user" ? "primary" : "ghost"} 
        onPress={() => setSelected("user")}/>
    </View>
  );
}
