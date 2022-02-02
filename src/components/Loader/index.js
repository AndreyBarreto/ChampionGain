import { Overlay } from "./styles";
import reactDom from "react-dom";


export default function Loader(){
    return reactDom.createPortal(
        <Overlay>
            <div className="loader"/>
        </Overlay>,
        document.getElementById('loader-root')
    );
}