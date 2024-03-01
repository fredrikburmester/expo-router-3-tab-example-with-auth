import React, { useState } from "react";
import { Text, View, TextInput } from "@/components/Themed";
import { Alert, SafeAreaView, TouchableOpacity } from "react-native";
import { useAuth } from "@/context/AuthProvider";

export default function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const _login = (username: string, password: string) => {
    if (username === "" || password === "")
      Alert.alert("Error", "Please enter a username and password");
    else login(username, password);
  };

  return (
    <SafeAreaView className="flex-1 flex flex-col">
      <View className="flex-1 flex flex-col justify-center px-4">
        <Text className="text-3xl mb-2">Log in</Text>
        <Text className="mb-2 opacity-70">
          Any username and password is a valid login.
        </Text>
        <View>
          <Text className="font-semibold text-lg mb-1">Username</Text>
          <TextInput
            placeholder="username"
            className="border border-gray-500 rounded-xl p-3"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View>
          <Text className="font-semibold text-lg mb-1">Password</Text>
          <TextInput
            placeholder="password"
            className="border border-gray-500 rounded-xl p-3"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <Button
          style={{ marginTop: 20 }}
          title="Log in"
          onPress={() => _login(username, password)}
        />
      </View>
    </SafeAreaView>
  );
}

const Button = ({
  title,
  onPress,
  style,
}: {
  title: string;
  onPress: () => void;
  style?: any;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[style]}
      className={`bg-blue-500 rounded-xl px-2 py-3`}
    >
      <Text className="text-white text-center">{title}</Text>
    </TouchableOpacity>
  );
};
