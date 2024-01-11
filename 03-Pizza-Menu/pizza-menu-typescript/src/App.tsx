import Header from "./containers/header";
import Menu from "./containers/menu";
import Footer from "./containers/footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </div>
  );
}
