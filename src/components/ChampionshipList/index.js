import {
  Container, Header, ListContainer, Card,
} from './style';
import arrow from '../../assets/images/icons/arrow.svg';

export default function ChampionshipList() {
  return (
    <Container>
      <Header>
        <strong>3 Campeonatos</strong>
        <a href="/">Novo Campeonato</a>
      </Header>
      <ListContainer>
        <button type="button" className="sort-button">
          <span>Nome</span>
          <img src={arrow} alt="arrow" />
        </button>
      </ListContainer>
      <Card>
        oioi
      </Card>
    </Container>
  );
}
