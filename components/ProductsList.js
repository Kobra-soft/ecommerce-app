import * as React from "react";
import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
/* import { products } from "../products"; */
// import Currency from "react-currency-formatter-v2";

export default function ProductCard({
  image,
  category,
  title,
  price,
  description,
}) {
  const [count, setCount] = React.useState(1);
  const { colorScheme } = useColorScheme();
  /*   const product = products[0]; */

  return (
    <View className="w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5">
      <View className="bg-white rounded-xl">
        <Image
          source={{ uri: image }}
          className="w-full h-72"
          style={{ resizeMode: "contain" }}
        />
      </View>
      <View className="mt-5">
        <Text className="text-sm text-black/60 dark:text-white/70 mb-2">
          {category}
        </Text>
        <Text className="text-lg font-semibold dark:text-white mb-4">
          {title}
        </Text>

        <View className="flex-row justify-between mb-5">
          <View className="flex-row items-center gap-3">
            <AntDesign
              name="minuscircleo"
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
              onPress={() => setCount(count - 1)}
            />
            <Text className="text-xl dark:text-white">{count}</Text>
            <AntDesign
              name="pluscircleo"
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
              onPress={() => setCount(count + 1)}
            />
          </View>
          <Text className="text-2xl font-extrabold dark:text-white">
            ${price * count}
            {/* <Currency quantity={price * count} currency="GBP" /> */}
          </Text>
        </View>

        <Text
          className="text-sm text-black/60 dark:text-white mr-0"
          numberOfLines={3}
        >
          {description}
        </Text>

        <TouchableOpacity className="flex-row bg-black w-11/12 self-center mt-5 justify-center dark:bg-white p-4 rounded-full">
          <Text className="text-white dark:text-black font-extrabold text-lg">
            Add To Basket
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
