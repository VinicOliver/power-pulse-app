import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Login() {
  return(
    <View style={styles.container}>
      <Text>Hello World from Login!</Text>

      <Link href="/register">
        <Text>Criar conta</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
