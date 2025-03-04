import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="h-screen max-h-screen w-screen max-w-screen flex-col dark:bg-gray-950">
      <Header></Header>
      <MainPage></MainPage>
    </div>
  );
}

export default App;
