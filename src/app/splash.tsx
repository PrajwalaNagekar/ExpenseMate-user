import { useEffect } from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(auth)/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4F46E5",
      }}
    >
      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
          color: "#FFFFFF",
        }}
      >
        Expense Tracker
      </Text>

      <Text
        style={{
          marginTop: 10,
          fontSize: 16,
          color: "#E5E7EB",
        }}
      >
        Manage Your Expenses Easily
      </Text>
    </View>
  );
}