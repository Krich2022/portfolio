import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Background from "./components/Background";

function App() {
  return (
    <>
      <Nav />
      <Background>
        <Outlet />
      </Background>
      <Footer />
    </>
  );
}

export default App;
