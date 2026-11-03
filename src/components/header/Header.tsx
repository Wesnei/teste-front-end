import BottomBar from "./BottomBar";
import MiddleBar from "./MiddleBar";
import TopBar from "./TopBar";

const Home = () => {
	return (
    <section className="header-container">
      <TopBar />
      <MiddleBar />
      <BottomBar />
    </section>
  );
}

export default Home;