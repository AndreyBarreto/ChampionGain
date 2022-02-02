import {
  Container,
  Header,
  ListContainer,
  Card,
} from './style';
import { InputSearchContainer } from './style';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { Link } from 'react-router-dom';
import Moldal from '../../components/Modal';
import Loader from '../../components/Loader';


export default function Home() {
  return (
    <Container>
      <Loader/>
      {/* <Moldal danger /> */}
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo Campeonato..." />
      </InputSearchContainer>
      <Header>
        <strong>3 Campeonatos</strong>
        <Link to="/new">Novo Campeonato</Link>
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
          <Link to="/edit/123">
            <img src={edit} alt="Edit" />
          </Link>
          <button type="button">
            <img src={trash} alt="Trash" />
          </button>
        </div>
      </Card>
    </Container>);
}
