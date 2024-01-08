import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../components/HomeScreen";
import SingleProductScreen from "../components/SingleProductScreen";
import Cart from "../components/CartScreen";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useSelector } from "react-redux";
import Home from "../components/HomeScreenn";

const Screens = () => {
  const Stack = createNativeStackNavigator();
  const cart = useSelector((state) => state.cart.cart);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerRight: () => (
              <View style={styles.cartIconContainer}>
                <Icon
                  onPress={() => navigation.navigate("Cart")}
                  name="shoppingcart"
                  size={30}
                />
                <Text style={styles.cartIconText}>{cart.length}</Text>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Products"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <View style={styles.cartIconContainer}>
                <Icon
                  onPress={() => navigation.navigate("Cart")}
                  name="shoppingcart"
                  size={30}
                />
                <Text style={styles.cartIconText}>{cart.length}</Text>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Product"
          component={SingleProductScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <View style={styles.cartIconContainer}>
                <Icon
                  onPress={() => navigation.navigate("Cart")}
                  name="shoppingcart"
                  size={30}
                />
                <Text style={styles.cartIconText}>{cart.length}</Text>
              </View>
            ),
          })}
        />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;

const styles = StyleSheet.create({
  cartIconContainer: {
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    // borderWidth: 1,
  },
  cartIconText: {
    left: -8,
    height: 15,
    width: 15,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 10,
    fontSize: 10,
    color: "#fff",
    fontWeight: "900",
  },
});
