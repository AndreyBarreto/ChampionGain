import {
  Container,
  Header,
  ListHeader,
  Card,
} from './style';
import { InputSearchContainer } from './style';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
// import Moldal from '../../components/Modal';
// import Loader from '../../components/Loader';


export default function Home() {
  const [contacts, setContacts] = useState([])
  const [orderBy, setOrderBy] = useState('asc')
  const [searchTerm, setSearchTerm] = useState('')


  const filteredContacts = useMemo(() => (contacts.filter((contact) => (
    contact.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  ))
  ), [contacts, searchTerm])

  useEffect(() => {
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
      .then(async (response) => {
        const json = await response.json();
        setContacts(json)
      })
      .catch((e) => console.log(e))

  }, [orderBy])

  function handleToggleOrderBy() {
    setOrderBy((prevState) => prevState == 'asc' ? 'desc' : 'asc')
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value)

  }

  return (
    <Container>
      {/* <Loader/> */}
      {/* <Moldal danger /> */}
      <InputSearchContainer>
        <input type="text"
          value={searchTerm}
          placeholder="Pesquise pelo Campeonato..."
          onChange={handleChangeSearchTerm} />
      </InputSearchContainer>
      <Header>

        {<strong>
          {filteredContacts.length}
          {filteredContacts.length == 1 ? ' Campeonato' : ' Campeonatos'}
        </strong>}
        <Link to="/new">Novo Campeonato</Link>
      </Header>
      {filteredContacts.length > 0 && (
        <ListHeader orderBy={orderBy}>
          <button type="button" className="sort-button" onClick={handleToggleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </ListHeader>)}

      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && <small>{contact.category_name}</small>}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>
          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
      ))}

    </Container>);
}

