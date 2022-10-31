import {Navigate, Route, Routes} from "react-router-dom";

import {LoggedInLayout, MainLayout} from "./layouts";
import {ClubsPage, LoginPage, NotFoundPage, PlayersPage, RegisterPage, TransferPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'login'}/>}/>
                <Route path={'register'} element={<RegisterPage/>}/>
                <Route path={'login'} element={<LoginPage/>}/>
            </Route>

            <Route path={'/'} element={<LoggedInLayout/>}>
                <Route path={'players'} element={<PlayersPage/>}/>
                <Route path={'clubs'} element={<ClubsPage/>}/>
                <Route path={'transfer'} element={<TransferPage/>}/>
            </Route>

            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
};

export {App}