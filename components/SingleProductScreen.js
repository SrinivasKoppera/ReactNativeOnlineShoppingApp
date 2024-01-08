import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useRoute } from "@react-navigation/native";
import addToCart from "./Redux/actions/addToCartAction";

const SingleProductScreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const idFromRoute = route.params?.id;
  const products = useSelector((state) => state.products.products);

  // const message = useSelector((state) => state.cart.message);

  const singleProduct = products.filter(
    (eachItem) => eachItem.id === idFromRoute
  );
  // const { image, price, rating, description } = singleProduct[0];
  // console.log("This is Product Title : ", title);

  const onPressAddToCartBtn = () => {
    dispatch(addToCart(singleProduct[0]));

    // ToastAndroid.show(
    //   // "Item Added Successfull",
    //   message,
    //   ToastAndroid.SHORT
    // );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View style={styles.imageCard}>
            <Image
              style={styles.imageStyle}
              source={{ uri: singleProduct[0].image }}
            />
            <Text style={styles.price}>Price ${singleProduct[0].price}</Text>
            <Text style={styles.titleStyle}>{singleProduct[0].title}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.availability}>
                Available: {singleProduct[0].rating.count}
              </Text>
              <Text style={styles.rating}>
                Rating: {singleProduct[0].rating.rate}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.addToCartBtn}
              onPress={() => onPressAddToCartBtn()}
            >
              <Text style={styles.btnText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              {singleProduct[0].description}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SingleProductScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 650,
    flex: 1,
    backgroundColor: "plum",
    // justifyContent: "flex-start",
    // alignItems: "center",
  },
  imageCard: {
    backgroundColor: "#fff",
    paddingTop: 30,
    padding: 20,
    margin: 10,
    alignItems: "center",
    // justifyContent: "space-between",
    borderRadius: 20,
  },
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginTop: 20,
  },
  price: {
    marginTop: 30,
    fontWeight: "bold",
    fontSize: 14,
  },
  titleStyle: {
    marginTop: 40,
    fontSize: 12,
    textAlign: "center",
  },
  ratingContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 35,
    // borderWidth: 1,
  },
  availability: {
    fontSize: 12,
    fontWeight: "900",
  },
  addToCartBtn: {
    backgroundColor: "black",
    borderRadius: 5,
    padding: 8,
    marginTop: 20,
  },
  btnText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "900",
  },

  rating: {
    fontSize: 12,
    fontWeight: "900",
  },
  descriptionContainer: {
    padding: 20,
  },
  description: {
    textAlign: "justify",
    lineHeight: 22,
  },
});
