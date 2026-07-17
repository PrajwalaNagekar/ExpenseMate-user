import { useRouter } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back 👋</Text>
        <Text style={styles.subtitle}>
          Sign in to continue
        </Text>
      </View>

      <View style={styles.form}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />

        <Pressable>
          <Text style={styles.forgotPassword}>
            Forgot Password?
          </Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text>Don't have an account? </Text>

        <Pressable
          onPress={() =>
            router.push("/(auth)/register")
          }
        >
          <Text style={styles.link}>
            Register
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 25,
  },

  header: {
    marginBottom: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#111827",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: "#6B7280",
  },

  form: {
    gap: 18,
  },

  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
  },

  forgotPassword: {
    textAlign: "right",
    color: "#4F46E5",
  },

  button: {
    backgroundColor: "#4F46E5",
    padding: 16,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 35,
  },

  link: {
    color: "#4F46E5",
    fontWeight: "bold",
  },
});