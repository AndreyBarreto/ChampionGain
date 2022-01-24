import { ThemeProvider } from 'styled-components';
import GlobalSyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import { Container } from './styles';
import Header from '../Header';
import ChampionshipList from '../ChampionshipList';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalSyles />
      <Container>
        <Header />
        <ChampionshipList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
