import { Form, ButtonContainer } from './styles'
import FormGroup from '../FormGroup'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'
import { useState } from 'react'
import { isEmailValid } from '../../utils'

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')
  const [, setErrors] = useState([])

  function handleSubmit(event) {
    event.preventDefault()
    console.log({ name, email, phone, category })
  }

  function handleNameChange(event) {
    setName(event.target.value)

    if (!event.target.value) {
      setErrors((prevState) => [...prevState, { field: "name", message: "Nome é obrigatório" }])
    }
    else {
      setErrors((prevState) => prevState.filter((error) => error.field !== 'name'))
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value)

    if (event.target.value && !isEmailValid(event.target.value)) {
      const errorAlreadyExist = errors.find((error) => error.field === 'email')
      if (errorAlreadyExist) {
        return
      }
      setErrors((prevState) => [...prevState, { field: "email", message: "E-mail inválido" }])
    }
    else {
      setErrors((prevState) => prevState.filter((error) => error.field !== 'email'))
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error="O formato do e-mail é inválido">
        <Input
          placeholder='Nome'
          error
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder='E-mail'
          value={email}
          onChange={handleEmailChange} />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder='Telefone'
          value={phone}
          onChange={(event) => setPhone(event.target.value)} />
      </FormGroup>
      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}>
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  )
}
