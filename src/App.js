import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {ClubsPage, NotFoundPage, PlayersPage} from "./pages";
import {TransferPage} from "./pages/transferPage/TransferPage";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'players'}/>}/>
                <Route path={'players'} element={<PlayersPage/>}/>
                <Route path={'clubs'} element={<ClubsPage/>}/>
                <Route path={'transfer'} element={<TransferPage/>}/>
            </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
};

export {App}