import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
    return (
    <BrowserRouter>
     <TopBar />
      <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/login" element={user ? <Home /> :<Login />}>
          </Route>
          <Route path="/register" element={user ? <Home /> : <Register />}>
          </Route>
          <Route path="/post/:postId" element={<Single />}>
          </Route>
          <Route path="/write" element={user ? <Write /> : <Register />}>
          </Route>
          <Route path="/settings" element={user ? <Settings /> : <Register />}>
          </Route>
      </Routes>
    </BrowserRouter>

  );
};

export default App;
