import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screens from "./screens/screens";
import store from "./components/Redux/store";
import { Provider } from "react-redux";

// <View style={styles.container}>
//   <Screens />
//   {/* <StatusBar style="auto" /> */}
// </View>

export default function App() {
  return (
    <Provider store={store}>
      <Screens />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
