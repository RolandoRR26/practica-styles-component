import Header from "./components/Header";
import Login from "./components/Login";
import { Route, Routes } from 'react-router-dom';
import Body from "./components/Body";
import Footer from "./components/Footer";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./theme";


function App() {
  return (
    <ThemeProvider theme={Theme}>    <div>
      <GlobalStyle/>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cats" element={<Body />} />          
      </Routes>
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
