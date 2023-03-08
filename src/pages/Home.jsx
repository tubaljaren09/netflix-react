import React from "react";

// Components
import Main from "../components/Main";
import Row from "../components/Row";
import Requests from "../Requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row title="Popular" fetchURL={Requests.requestPopular} />
      <Row title="Top Rated" fetchURL={Requests.requestTopRated} />
      <Row title="Upcoming" fetchURL={Requests.requestUpcoming} />
      <Row title="Now Playing" fetchURL={Requests.requestPlaying} />
    </div>
  );
};

export default Home;
