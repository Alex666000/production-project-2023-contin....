import {render} from "react-dom";
import React from "react";
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";

// index.scss импортием в Арр чтобы стили применились дЛя всех вложенных компонентов
import {ThemeProvider} from "app/providers/ThemeProvider";

import "./shared/config/i18n/i18n";

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