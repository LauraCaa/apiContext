import React from 'react';
import Container from './components/Container';
import { LangContextProvider } from "./context/LangContext";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <div>
      {/* Wrap the entire application with the language context provider */}
      <LangContextProvider>
        {/* Wrap the application with the theme context provider */}
        <ThemeContextProvider>
          {/* Render the main container component */}
          <Container></Container>
        </ThemeContextProvider>
      </LangContextProvider>
    </div>
  );
}

export default App;
