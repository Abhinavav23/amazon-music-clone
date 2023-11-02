import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { AuthProvider } from "./provider/AuthProvider";
import { MusicPlayer } from "./components/music/MusicPlayer";
import { AuthNavigator } from "./navigator/AuthNavigator";

function App() {
  return (
    <div className="app-container">
      {/* navbar */}
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/social" element={<h3>Social</h3>} />
          <Route path="/library" element={<h3>Library</h3>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/play/:musicId"
            element={
              <AuthNavigator>
                <MusicPlayer />
              </AuthNavigator>
            }
          />
          <Route path="/myprofile" element={<h2>My Profile</h2>} />
          <Route path="*" element={<h3>Page not Found !!</h3>} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
