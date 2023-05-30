import {render} from "react-dom";
import React from "react";
import App from "./App";


render(
    <div>
        <App/>
    </div>,
    // куда рендерить будем компонент
    document.getElementById('root')
)