import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const full_name = {
    f_name: "Rohit",
    l_name: "Sharma",
  };

  const users = [
    {
      f_name: "Rohit",
      l_name: "Sharma",
    },
    {
      f_name: "Hardik",
      l_name: "Pandya",
    },   
    {
      f_name: "Rishabh",
      l_name: "Pant",
    },
  ];

  return (
    <div className="App">
      <h1>Hello</h1>
      <Greet name={"007"} count={12} isLogin={true} />
      <Greet name={"Bond"} count={15} isLogin={false} />
      <hr />
      <Person name={full_name} />
      <hr />
      <PersonList userList={users}/>
    </div>
  );
}

export default App;
