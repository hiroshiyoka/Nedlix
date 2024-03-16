import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { styles, theme } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../components/Cast";
import MovieList from "../components/MovieList";
import Loading from "../components/Loading";
import { fetchMovieDetails, image500 } from "../api/moviedb";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const topMargin = ios ? "" : "mt-3";

export default function MovieScreen() {
  const [isFavourite, toggleFavourite] = useState(false);
  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const navigation = useNavigation();
  let movieName = "Godfather";

  useEffect(() => {
    setLoading(true);
    getMovieDetails(item.id);
  }, [item]);

  const getMovieDetails = async (id) => {
    const data = await fetchMovieDetails(id);
    if (data) setMovie(data);
    setLoading(false);
  };

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      <View className="w-full">
        <SafeAreaView
          className={
            "absolute z-20 w-full flex-row justify-between items-center px-4" +
            topMargin
          }
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.background}
            className="rounded-xl p-1"
          >
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <HeartIcon
              size="35"
              color={isFavourite ? theme.background : "white"}
            />
          </TouchableOpacity>
        </SafeAreaView>

        {loading ? (
          <Loading />
        ) : (
          <View>
            <Image
              source={{ uri: image500(movie?.poster_path) }}
              style={{ width, height: height * 0.55 }}
            />
            <LinearGradient
              colors={[
                "transparent",
                "rgba(23, 23, 23, 0.8)",
                "rgba(23, 23, 23, 1)",
              ]}
              style={{ width, height: height * 0.4 }}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              className="absolute bottom-0"
            />
          </View>
        )}
      </View>

      <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
        <Text className="text-white text-center text-3xl font-bold tracking-wide">
          {movie?.title}
        </Text>
        <Text className="text-neutral-400 font-semibold text-base text-center">
          {movie?.status} - {movie?.release_date?.split("-")[0]} -{" "}
          {movie?.runtime} min
        </Text>
        <View className="flex-row justify-center mx-4 space-x-2">
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Crime
          </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Drama
          </Text>
        </View>
        <Text className="text-neutral-400 mx-4 tracking-wide">
          The Godfather "Don" Vito Corleone is the head of the Corleone mafia
          family in New York. He is at the event of his daughter's wedding.
          Michael, Vito's youngest son and a decorated WW II Marine is also
          present at the wedding. Michael seems to be uninterested in being a
          part of the family business. Vito is a powerful man, and is kind to
          all those who give him respect but is ruthless against those who do
          not. But when a powerful and treacherous rival wants to sell drugs and
          needs the Don's influence for the same, Vito refuses to do it. What
          follows is a clash between Vito's fading old values and the new ways
          which may cause Michael to do the thing he was most reluctant in doing
          and wage a mob war against all the other mafia families which could
          tear the Corleone family apart.
        </Text>
      </View>

      <Cast navigation={navigation} cast={cast} />

      {/* <MovieList
        title="Similar Movies"
        hideSeeAll={true}
        data={similarMovies}
      /> */}
    </ScrollView>
  );
}
