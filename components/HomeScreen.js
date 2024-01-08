import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "./Redux/actions/getProductsAction";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const products = useSelector((state) => state.products.products);
  const error = useSelector((state) => state.error);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getProducts());
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ index, item }) => {
    if (index === 0) {
      return (
        <Text style={styles.productsHeading} key="heading">
          Products
        </Text>
      );
    }

    const { title, image, id, price } = item;

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Product", { id: id })}
        key={id.toString()}
      >
        <View style={styles.imageCard}>
          <Image style={styles.imageStyles} source={{ uri: `${image}` }} />
          <View>
            <Text style={styles.priceStyle}>Price ${price}</Text>
          </View>
          <Text style={styles.productTitle}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error loading products</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.productsContainer}
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 18,
  },
  productsContainer: {},
  productsHeading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    padding: 10,
  },
  imageCard: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginLeft: "10%",
    borderRadius: 10,
  },
  imageStyles: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  priceStyle: {
    marginTop: 10,
    fontWeight: "bold",
  },
  productTitle: {
    textAlign: "center",
    fontSize: 11,
    marginTop: 10,
  },
});
