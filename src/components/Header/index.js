import { Container, InputSearchContainer } from './styles';

export default function Header() {
  return (
    <Container>
      <span>Champion</span>
      <span style={{ color: '#5061FC' }}>Gain</span>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo Campeonato..." />
      </InputSearchContainer>
    </Container>

  );
}
