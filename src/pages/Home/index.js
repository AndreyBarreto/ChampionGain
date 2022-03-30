import {
  Container,
  Header,
  ListHeader,
  Card,
  ErrorContainer
} from './style';
import { InputSearchContainer } from './style';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/icons/sad.svg'
import { Link } from 'react-router-dom';
import { useEffect, useState, useMemo, useCallback } from 'react';
// import Moldal from '../../components/Modal';
import Loader from '../../components/Loader';
import ContactsService from '../../services/ContactsService';
import APIError from '../../errors/APIError';
import Button from '../../components/Button'

export default function Home() {
  const [contacts, setContacts] = useState([])
  const [orderBy, setOrderBy] = useState('asc')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)


  const filteredContacts = useMemo(() => (contacts.filter((contact) => (
    contact.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  ))
  ), [contacts, searchTerm])

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true)

      const contactsList = await ContactsService.listContacts(orderBy)

      setHasError(false)

      setContacts(contactsList)
    }
    catch (error) {
      console.log(error instanceof APIError)
      setHasError(true)
    }
    finally {
      setIsLoading(false)
    }
  }, [orderBy])
  useEffect(() => {

    loadContacts()
    return () => console.log('Componente se desmanchou')
  }, [loadContacts])

  function handleToggleOrderBy() {
    setOrderBy((prevState) => prevState == 'asc' ? 'desc' : 'asc')
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value)

  }

  function handleTryAgain() {
    loadContacts()
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />
      {/* <Moldal danger /> */}
      <InputSearchContainer>
        <input type="text"
          value={searchTerm}
          placeholder="Pesquise pelo Campeonato..."
          onChange={handleChangeSearchTerm} />
      </InputSearchContainer>
      <Header hasError={hasError}>

        {!hasError && <strong>
          {filteredContacts.length}
          {filteredContacts.length == 1 ? ' Campeonato' : ' Campeonatos'}
        </strong>}
        <Link to="/new">Novo Campeonato</Link>
      </Header>


      {!hasError && (<>
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
      </>)}

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt='sad' />
          <div className='details'>
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>
            <Button type='button' onClick={handleTryAgain}>
              Tentar novamente
            </Button>
          </div>
        </ErrorContainer>)}


    </Container>);
}

