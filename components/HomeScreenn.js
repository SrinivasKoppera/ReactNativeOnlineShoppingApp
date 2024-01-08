import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.homeContainer}>
        <Image
          source={require(".././assets/nxt-trendz-home-img.png")}
          style={styles.homeImage}
        />
        <Text style={styles.homeText}>
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </Text>
        <Button
          title="Shop Now"
          onPress={() => navigation.navigate("Products")}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "plum",
    padding: 10,
    flex: 1,
    paddingBottom: 40,
  },
  homeImage: {
    width: "100%",
    height: 300,
    marginBottom: 30,
  },
  homeText: {
    lineHeight: 25,
    padding: 20,
    marginBottom: 15,
  },
});
