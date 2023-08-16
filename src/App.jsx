import Heading from "./components/Heading";
import Body from "./components/Body";

import "./App.css";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Heading />
        <Body />
      </div>
    </main>
  );
};

export default App;
