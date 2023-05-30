import {render} from "react-dom";
import React from "react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
// index.scss импортием в Арр чтобы стили применились дЛя всех вложенных компонентов
import 'styles/index.scss'
import ThemeProvider from "./theme/ThemeProvider";


render(
    <div>
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </div>,
    document.getElementById('root')
)