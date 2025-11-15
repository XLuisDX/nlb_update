import Navbar from "./Navbar";
import HomeImg from "./HomeImg";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>NLB Tree Service and Gardening LLC</title>
        <meta name="description" content="NLB tree service home page" />
        <link rel="canonical" href="nlbtreeserviceandgardering.com" />
      </Helmet>
      <div id="home">
        <Navbar />
        <HomeImg />
      </div>
    </>
  );
};

export default Home;
