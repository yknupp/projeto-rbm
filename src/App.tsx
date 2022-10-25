import "./App.css";

import { Route, Routes } from "react-router";

import { BrowserRouter } from "react-router-dom";
import ExamplePage from "pages/example-page";
import LoginPage from "pages/login";
import ThemeContext from "contexts/theme-context";
import useTheme from "hooks/useTheme";

function App() {
  const { theme, setTheme } = useTheme();
  return (
    <ThemeContext theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ExamplePage />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext>
  );
}

export default App;
