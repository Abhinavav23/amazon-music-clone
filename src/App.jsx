import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { AuthProvider } from "./provider/AuthProvider";
import { MusicPlayer } from "./components/music/MusicPlayer";
import { AuthNavigator } from "./navigator/AuthNavigator";
import { Social } from "./pages/Social";
import { Library } from "./components/Library";
import { Suspense, lazy, useState } from "react";
import { UseReducerEx } from "./components/UseReducerEx";
// import { PremiumOptions } from "./components/PremiumOptions";
const Premium = lazy(() => import("./components/PremiumOptions"));

function App() {
  const [isPremiumUser, setIsPremiumUser] = useState(false);
  return (
    <div className="app-container">
      {/* navbar */}
      <AuthProvider>
        <Navbar />
        <UseReducerEx />
        <main className="app-container">
          <button onClick={() => setIsPremiumUser(true)}>go Premium</button>
          {isPremiumUser && (
            <Suspense fallback={<div>Loading Premium...</div>}>
              <Premium />
            </Suspense>
          )}
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/social" element={<Social />} />
            <Route path="/library/*" element={<Library />} />
            {/* <Route path="/library/liked" element={<h3></h3>}/> */}

            {/* <Route path="likedSongs" element={<h3>Songs liked by you</h3>} />
              <Route path="downloads" element={<h3>Songs downloaded by you</h3>} /> */}
            {/* </Route> */}
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
            <Route
              path="/post/:postId"
              element={<AuthNavigator>{/* <MusicPlayer /> */}</AuthNavigator>}
            />
            <Route path="/myprofile" element={<h2>My Profile</h2>} />
            <Route path="*" element={<h3>Page not Found !!</h3>} />
          </Routes>
        </main>
      </AuthProvider>
    </div>
  );
}

export default App;
