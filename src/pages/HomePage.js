import React, { Fragment } from "react";
import MoviesList from "../components/movies/MoviesList";

const HomePage = () => {
  return (
    <Fragment>
      <section className="pd-10 movies-layout page-container">
        <h2 className="mb-5 text-3xl font-bold text-white capitalize">
          Now playing
        </h2>
        <MoviesList></MoviesList>
      </section>
      <section className="mt-20 pd-20 movies-layout page-container">
        <h2 className="mb-5 text-3xl font-bold text-white capitalize">
          Top rated
        </h2>
        <MoviesList type="top_rated"></MoviesList>
      </section>
      <section className="mt-20 pd-20 movies-layout page-container">
        <h2 className="mb-5 text-3xl font-bold text-white capitalize">
          Trending
        </h2>
        <MoviesList type="popular"></MoviesList>
      </section>
    </Fragment>
  );
};

export default HomePage;
