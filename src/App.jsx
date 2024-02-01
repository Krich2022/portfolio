import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Background from "./components/Background";

function App() {
  return (
    <>
      <Header />
      <Background>
        <Outlet />
      </Background>
      <Footer />
    </>
  );
}

export default App;
