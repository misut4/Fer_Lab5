import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

import { appRoutes } from "./routes/appRoutes";
function App() {
    return (
        <div className="App">
            <Helmet>
                <title>misuta's Portfolio</title>
            </Helmet>
            <BrowserRouter>
                <Routes>
                    {appRoutes.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={route.component}
                            />
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
