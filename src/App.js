import { Route, Routes } from "react-router-dom";
import HomeComponent from "./routes/home/HomeComponent";
import NavigationComponent from "./routes/navigation/NavigationComponent";
import AuthenticationComponent from "./routes/authentication/AuthenticationComponent";
import CheckoutComponent from "./routes/checkout/CheckoutComponent";
import CategoriesPreviewComponent from "./routes/categories-preview/CategoriesPreviewComponent";
import ShopComponent from "./routes/shop/ShopComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationComponent />}>
        <Route index element={<HomeComponent />} />
        <Route path="shop/*" element={<ShopComponent />} />
        <Route path="auth" element={<AuthenticationComponent />} />
        <Route path="checkout" element={<CheckoutComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
