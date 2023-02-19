import { Routes, Route } from "react-router-dom";
import FavouritesComponent from "../components/favouritesComponent";

import HomeComponent from "../components/homeComponents";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path = '/' element = {<HomeComponent/>}/>
            <Route path = '/favourites' element = {<FavouritesComponent/>}/>
        </Routes>
    );
}
 
export default AppRoutes;