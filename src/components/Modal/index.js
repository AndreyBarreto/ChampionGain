import { Overlay, Container, Footer } from "./styles"
import Button from '../Button'
import reactDom from "react-dom"

export default function Moldal({ danger }) {
  return reactDom.createPortal(
    <Overlay>
    <Container danger={danger}>
      <h1>Título do Modal</h1>
      <p>corpo do modal</p>
      <Footer>
        <button className="cancel-button" type="button">
          Cancelar
        </button>
        <Button type="button" danger={danger}>
          Deletar
        </Button>
      </Footer>
    </Container>
  </Overlay>,
  document.getElementById('modal-root')
  )

}
