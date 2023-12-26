import { Routes, Route } from "react-router-dom";
import { Header } from "../header/header";
import { NavigationPanel } from "../../layout/navigationPanel";
import { Home } from "../../pages/home/home";
import { Login } from "../../pages/login/login";
import { Registration } from "../../pages/registration/registration";
import { Profile } from "../../pages/profile/profile";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="routes-container">
        <Routes>
          <Route element={<NavigationPanel />} >
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
