import {
  Container, Header, ListContainer, Card,
} from './style';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

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
        <div className="info">
          <div className="contact-name">
            <strong>Andrey Barreto</strong>
            <small>instagram</small>
          </div>
          <span>andreyvbarreto@gmail.com</span>
          <span>(48) 9 9660-6873</span>
        </div>
        <div className="actions">
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Trash" />
          </button>
        </div>
      </Card>
      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Andrey Barreto</strong>
            <small>instagram</small>
          </div>
          <span>andreyvbarreto@gmail.com</span>
          <span>(48) 9 9660-6873</span>
        </div>
        <div className="actions">
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Trash" />
          </button>
        </div>
      </Card>
      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Andrey Barreto</strong>
            <small>instagram</small>
          </div>
          <span>andreyvbarreto@gmail.com</span>
          <span>(48) 9 9660-6873</span>
        </div>
        <div className="actions">
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Trash" />
          </button>
        </div>
      </Card>
    </Container>
  );
}
