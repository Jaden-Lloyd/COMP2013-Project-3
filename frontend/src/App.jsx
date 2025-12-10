import "./App.css";
import products from "./data/products";
import GroceriesAppContainer from "./Components/GroceriesAppContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotAuthorized from "./Components/NotAuthorized";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<LoginPage />} />
          <Route path="/create-user" element={<RegisterPage />} /> */}
          <Route path="/main" element={<GroceriesAppContainer />} />
          {/* <Route path="/add-product" element={} />
          <Route path="/edit-product" element={} /> */}
          <Route path="/not-authorized" element={<NotAuthorized />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
