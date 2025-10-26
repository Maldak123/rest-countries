import Header from "./layout/Header";
import Main from "./pages/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import CountryPage from "./pages/CountryPage";
import Error from "./pages/Error";

const App = () => {
  return (
    <div className="font-nunito dark:bg-[hsl(207,26%,17%)] min-h-screen">
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Router>
          <Header />

          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Main />} />

            <Route path="countries">
              <Route path=":country" element={<CountryPage />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
