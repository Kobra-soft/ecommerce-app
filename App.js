import { StatusBar } from "expo-status-bar";
import { Switch, Text, View } from "react-native";
import { useColorScheme } from "nativewind";
import ProductsList from "./components/ProductsList";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-200 dark:bg-black">
      <View className={"flex-row w-full gap-5 items-center"}>
        <Text className="dark:text-white text-2xl font-extrabold bottom-0.5">
          New collection
        </Text>
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      </View>
      <ProductsList />
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </SafeAreaView>
  );
}
