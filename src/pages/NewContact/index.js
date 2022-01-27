import ContactForm from "../../components/ContactForm";
import PageHeader from "../../components/pageHeader";

export default function NewContact() {
  return (
  <>
    <PageHeader title="Novo Contato" />
    <ContactForm buttonLabel="Cadastrar"/>
  </>
  )
}
