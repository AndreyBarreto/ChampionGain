import { Overlay } from "./styles";
import reactDom from "react-dom";


export default function Loader({ isLoading }) {
    if (!isLoading) {
        return null
    }
    return reactDom.createPortal(
        <Overlay>
            <div className="loader" />
        </Overlay>,
        document.getElementById('loader-root')
    );
}