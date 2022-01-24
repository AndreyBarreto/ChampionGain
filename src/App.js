import { ThemeProvider } from 'styled-components';
import GlobalSyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalSyles />
      <h1>teste</h1>
    </ThemeProvider>
  );
}

export default App;
