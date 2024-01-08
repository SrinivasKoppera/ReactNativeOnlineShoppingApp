import { View, Text, StyleSheet, Button, Image, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

import removeFromCart from "./Redux/actions/removeFromCartAction";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const navigation = useNavigation();
  if (cart.length === 0) {
    return (
      <View style={styles.emptyCartContainer}>
        <Icon name="shoppingcart" size={100} />
        <Text style={styles.emptyText}>Your cart is Empty</Text>
        <Button
          title="Go to Shopping"
          color="#8ACDD7"
          onPress={() => navigation.navigate("Products")}
        />
      </View>
    );
  }

  const onPressRemoveBtn = (id) => {
    dispatch(removeFromCart(id));
  };

  const renderItem = ({ item }) => {
    const { title, image, price, id } = item;
    return (
      <View style={styles.card} key={id.toString()}>
        <View style={styles.cardInnerStyles}>
          <View>
            <Image source={{ uri: image }} width={80} height={80} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.heading} numberOfLines={2} ellipsizeMode="tail">
              {title}
            </Text>
            <Text style={styles.priceText}>Price ${price}</Text>
          </View>
        </View>
        <View style={styles.removeBtnContainer}>
          <Text style={styles.removeBtn} onPress={() => onPressRemoveBtn(id)}>
            Remove
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  emptyCartContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "plum",
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "900",
    margin: 20,
  },
  cartContainer: {
    flex: 1,
    backgroundColor: "plum",
    padding: 15,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 5,
    margin: 5,
  },
  cardInnerStyles: {
    display: "flex",
    flexDirection: "row",
  },
  itemsCountContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
    padding: 1,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#939699",
  },

  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  heading: {
    fontSize: 14,
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: "auto",
    marginTop: 35,
    margin: 20,
    backgroundColor: "#343a40",
    color: "#fff",
    width: "45%",
    borderRadius: 8,
    // padding: 5,
  },
  removeBtnContainer: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "flex-end",
    // marginRight: 16,
    margin: 10,
  },
  removeBtn: {
    backgroundColor: "#ff002e",
    borderRadius: 5,
    padding: 10,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    // width: "40%",
    fontSize: 16,
  },
});
