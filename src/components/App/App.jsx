import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from 'react-redux';
import { Header } from "../header/header";
import { NavigationPanel } from "../../layout/navigationPanel";
import { Home } from "../../pages/home/home";
import { Login } from "../../pages/login/login";
import { Registration } from "../../pages/registration/registration";
import { Profile } from "../../pages/profile/profile";
import { store } from "../../redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="routes-container">
          <Routes>
            <Route element={<NavigationPanel />} >
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
