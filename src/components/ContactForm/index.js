import { Form, ButtonContainer } from './styles'
import FormGroup from '../FormGroup'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'
import { useState, useEffect } from 'react'
import { isEmailValid, formatPhone } from '../../utils'
import useErrors from '../../hooks/userErrors'
import CategoriesService from '../../services/CategoriesService'


export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [categories, setCategories] = useState([])

  const { setError, removeError, getErrorMessageByFieldName, errors } = useErrors()

  const isFormValid = (name && errors.length === 0)


  useEffect(() => {
    async function loadCategories() {
      const categoriesList = await CategoriesService.listCategories()
      setCategories(categoriesList)

    }


    loadCategories()

  }, [])


  function handleSubmit(event) {
    event.preventDefault()
    console.log({ name, email, phone: phone.replace(/\D/g, ""), categoryId })
  }

  function handleNameChange(event) {
    setName(event.target.value)

    if (!event.target.value) {
      setError({ field: "name", message: "Nome é obrigatório" })
    }
    else {
      removeError('name')
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value)

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: "email", message: "E-mail inválido" })
    }
    else {
      removeError('email')
    }
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value))
  }


  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder='Nome *'
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type='email'
          error={getErrorMessageByFieldName('email')}
          placeholder='E-mail'
          value={email}
          onChange={handleEmailChange} />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder='Telefone'
          value={phone}
          maxLength="15"
          onChange={handlePhoneChange} />
      </FormGroup>
      <FormGroup>
        <Select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}>
          <option value="">Sem Categoria</option>
          {categories.map(({ id, name }) => (
            <option key={id} value={id}>{name}</option>
          ))}
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form >
  )
}
