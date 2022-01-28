import { Overlay,Container,Footer } from "./styles"
import Button from '../Button'
export default function Moldal(){
    return (
        <Overlay>
            <Container>
                <h1>Título do Modal</h1>
                <p>corpo do modal</p>
                <Footer>
                    <button className="cancel-button" type="button">
                        Cancelar
                    </button>
                    <Button type="button">
                        Deletar
                    </Button>
                </Footer>
            </Container>
        </Overlay>
    )
}