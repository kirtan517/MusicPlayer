import { Routes, Route } from "react-router-dom";
import FavouritesComponent from "../components/favouritesComponent";

import HomeComponent from "../components/Home/homeComponents";
import SongComponent from "../components/Song/songComponent";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/favourites" element={<FavouritesComponent />} />
      <Route path="/song" element={<SongComponent />} />

    </Routes>
  );
};

export default AppRoutes;
