import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Sources from "./component/Sources/Sources";
import LargeScreenContainer from "./component/container/LargeScreenContainer";

function App() {
  return (
    <div>
      <Navbar />
      <LargeScreenContainer source={<Sources />} />
    </div>
  );
}

export default App;
