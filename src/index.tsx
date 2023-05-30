import {render} from "react-dom";
import Counter from "./components/Counter";


render(
    <div>
        <Counter/>
    </div>,
    // куда рендерить будем компонент
    document.getElementById('root')
)