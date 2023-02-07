import { Route, Routes } from "react-router-dom";
import HomeComponent from "./routes/home/HomeComponent";
import NavigationComponent from "./routes/navigation/NavigationComponent";
import AuthenticationComponent from "./routes/authentication/AuthenticationComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationComponent />}>
        <Route index element={<HomeComponent />} />
        <Route path="auth" element={<AuthenticationComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
