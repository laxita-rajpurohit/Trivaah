import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProductListingPage } from "./pages/ProductListingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categorySlug" element={<ProductListingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
