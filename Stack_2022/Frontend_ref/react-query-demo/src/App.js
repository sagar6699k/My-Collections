import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Superheroes } from "./components/Superheroes";
import { RQSuperheroes } from "./components/RQSuperheroes";
// import { QueryClientProvider, QueryClient } from "react-query";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/super-heroes" element={<Superheroes />} />
            <Route path="/rq-super-heroes" element={<RQSuperheroes />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
