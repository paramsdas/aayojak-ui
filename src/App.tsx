import "./App.css";
import MainPanel from "./components/MainPanel/MainPanel";
import NavigationPanel from "./components/NavigationPanel/NavigationPanel";

function App() {
  return (
    <>
      <div className="main">
        <NavigationPanel></NavigationPanel>
        <MainPanel></MainPanel>
      </div>
    </>
  );
}

export default App;
