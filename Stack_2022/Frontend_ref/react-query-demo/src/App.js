import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Superheroes } from "./components/Superheroes";
import { RQSuperheroes } from "./components/RQSuperheroes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GithubUsers } from "./components/GithubUsers";
import { TodoList } from "./components/TodoList";
import { SingleSuperHero } from "./components/SingleSuperHero";
import { CustomModal } from "./utils/CustomModal";

//Created a instance of queryClient
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link className="navbar_links" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="navbar_links" to="/super-heroes">
                Traditional-Super-Heroes
              </Link>
            </li>
            <li>
              <Link className="navbar_links" to="/rq-super-heroes">
                RQ-Super-Heroes
              </Link>
            </li>
            <li>
              <Link className="navbar_links" to="/github-users">
                Github
              </Link>
            </li>
            <li>
              <Link className="navbar_links" to="/todoList">
                TodoList
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/super-heroes" element={<Superheroes />} />
          <Route path="/rq-super-heroes" element={<RQSuperheroes />} />
          <Route path="/github-users" element={<GithubUsers />} />
          <Route path="/todoList" element={<TodoList />} />
          <Route
            path="/todoList/:todoId"
            element={<CustomModal />}
          />
          <Route
            path="/single-super-hero/:heroId"
            element={<SingleSuperHero />}
          />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
    </QueryClientProvider>
  );
}

export default App;
