import { ThemeProvider } from 'styled-components';
import GlobalSyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import { Container } from './styles';
import Header from '../Header';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalSyles />
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
