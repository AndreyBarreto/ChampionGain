import { Container } from "./styles";
import Input from '../Input'

export default function FormGroup({ children, error }) {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  )
}
