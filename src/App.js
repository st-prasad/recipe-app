import { BrowserRouter, Link } from "react-router-dom";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Link to={"/"}>Home</Link>
      </div>
      <Search />
      <Category />
      <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
