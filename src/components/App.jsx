import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import { Header } from './Header/Header';
import { Filter } from './Filter/Filter';

const App = () => {
  return (
    <div>
      <Header>
        <h1>📖 Phonebook</h1>
      </Header>
      <Section>
        <h2>📞 Add Contact</h2>
        <ContactForm />
      </Section>
      <Section>
        <h2>🔍 Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};

export default App;
