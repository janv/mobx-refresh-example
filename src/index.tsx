import { render } from "react-dom";
import  TSComponent from "./TSComponent";
import  JSComponent from "./JSComponent";

render(
    <div>
        hallo <TSComponent/>,
        hallo <JSComponent/>
    </div>,
    document.getElementById('root')
)