import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { fetcher, tmdAPI } from "../../config";
import MoviesCart, { MovieCardsSkeleton } from "./MoviesCart";
import useSWR from "swr";

//https://api.themoviedb.org/3/movie/now_playing?api_key=4184e5eb217c25917620c65b18c083b7
const MoviesList = ({ type = "now_playing" }) => {
  // const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(tmdAPI.getMovieList(type), fetcher);
  const isLoading = !data && !error;
  const movies = data?.results || [];
  // console.log("movies: ", movies);
  // useEffect(() => {
  //   if (data && data.results) setMovies(data.results);
  // }, [data]);

  return (
    <div className="movies-list">
      {isLoading && (
        <>
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            <SwiperSlide>
              <MovieCardsSkeleton></MovieCardsSkeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardsSkeleton></MovieCardsSkeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardsSkeleton></MovieCardsSkeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardsSkeleton></MovieCardsSkeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardsSkeleton></MovieCardsSkeleton>
            </SwiperSlide>
          </Swiper>
        </>
      )}
      {!isLoading && (
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <MoviesCart item={item}></MoviesCart>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

export default MoviesList;
