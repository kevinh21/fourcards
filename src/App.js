import logo from "./logo.svg";
import "./App.css";
import TitleText from "./components/TitleText";
import Team from "./components/Team/Team";
import Karma from "./components/Karma/Karma";
import Supervisor from "./components/Supervisor/Supervisor";
import Calculator from "./components/Calculator/Calculator";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div>
      <TitleText />
      <Team />
      <Layout />
      <Supervisor />
      <Calculator />
      <Karma />
    </div>
  );
}

export default App;
