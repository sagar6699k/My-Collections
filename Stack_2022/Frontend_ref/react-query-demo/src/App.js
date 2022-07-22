import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Superheroes } from "./components/Superheroes";
import { RQSuperheroes } from "./components/RQSuperheroes";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { GithubUsers } from "./components/GithubUsers";
import { TodoList } from "./components/TodoList";

//Created a instance of queryClient
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
                <Link to="/super-heroes">Traditional-Super-Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ-Super-Heroes</Link>
              </li>
              <li>
                <Link to="/github-users">Github</Link>
              </li>
              <li>
                <Link to="/todoList">TodoList</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/super-heroes" element={<Superheroes />} />
            <Route path="/rq-super-heroes" element={<RQSuperheroes />} />
            <Route path="/github-users" element={<GithubUsers />} />
            <Route path="/todoList" element={<TodoList />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"}/>
    </QueryClientProvider>
  );
}

export default App;
