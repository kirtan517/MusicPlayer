import { Routes, Route } from "react-router-dom";
import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";
import FavouritesComponent from "../components/favouritesComponent";

import HomeComponent from "../components/Home/homeComponents";
import SongComponent from "../components/Song/songComponent";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/favourites" element={<FavouritesComponent />} />
      <Route path="/song" element={<SongComponent />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
  );
};

export default AppRoutes;
