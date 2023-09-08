import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";
import { Notfound } from "./Components/Notfound";
import { Nav } from "./Components/Nav";
import { Footer } from "./Components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";
import { createContext, useState } from "react";
import { Todo } from "./Components/Todo";
export const favName = createContext();
const App = () => {
  const [name, setName] = useState("Hossein Farahkordmahaleh");
  const client = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false, refetchOnMount: false },
    },
  });
  return (
    <favName.Provider value={{ name, setName }}>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </favName.Provider>
  );
};

export default App;
