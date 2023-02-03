import { Route, Routes } from "react-router-dom";
import HomeComponent from "./routes/home/HomeComponent";
import NavigationComponent from "./routes/navigation/NavigationComponent";
import SignInComponent from "./routes/sign-in/SignInComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationComponent />}>
        <Route index element={<HomeComponent />} />
        <Route path="sign-in" element={<SignInComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
