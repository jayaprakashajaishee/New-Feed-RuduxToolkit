import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import LargeScreenContainer from "./component/container/LargeScreenContainer";
import SmallScreenContainer from "./component/container/SmallScreenContainer";

function App() {
  return (
    <div>
      <Navbar />
      <LargeScreenContainer />
      <SmallScreenContainer />
    </div>
  );
}

export default App;
