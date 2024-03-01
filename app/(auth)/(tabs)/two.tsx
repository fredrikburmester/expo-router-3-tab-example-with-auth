import { Button, StyleSheet } from "react-native";

import { View, Text } from "@/components/Themed";
import { useAuth } from "@/context/AuthProvider";
import { useEffect } from "react";

export default function TabTwoScreen() {
  const { user, logout } = useAuth();

  useEffect(() => {
    console.log("two", user);
  }, []);

  if (!user) return <Text>Loading...</Text>;

  return (
    <View className="flex-1 flex flex-col justify-center px-4 items-center">
      <Text>Account</Text>
      <Text>{user?.username || "No username"}</Text>
      <Button title="Log out" onPress={logout} />
    </View>
  );
}
