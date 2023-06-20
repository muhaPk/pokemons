import React from 'react';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "./Pages/Home/Home"
import { Info } from "./Pages/Info/Info"
import "./index.scss";

function App() {

    return (
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/info/:id" element={<Info />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
    );
}

export default App;
