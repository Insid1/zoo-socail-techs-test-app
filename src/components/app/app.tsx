import MainPage from 'components/main/main';
import { Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';
import * as S from './app.styled';
import { appTheme } from './common';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<div>Not found page</div>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
