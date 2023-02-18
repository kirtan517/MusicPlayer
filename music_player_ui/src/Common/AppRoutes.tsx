import { Routes, Route } from "react-router-dom";

import HomeComponent from "../components/homeComponents";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path = '/' element = {<HomeComponent/>}/>
        </Routes>
    );
}
 
export default AppRoutes;