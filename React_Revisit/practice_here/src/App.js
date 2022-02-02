import './App.css';
import ClassCompo from './Components/ClassCompo';
import Counter_Custom_hook from './Components/Counter_using_custom_hook/Counter';
import FunctionCompo from './Components/FunctionCompo';
import SearchCountry from './Components/SearchCountryApp/SearchCountry';
import Stopwatch from './Components/Stopwatch_app/Stopwatch';
import Ticktacktoe from './Components/Tic_tac_toe/Ticktacktoe';
import Timer from './Components/Timer_app/Timer';
import Todo from './Components/TodoList/Todo';
import AdvanceCounter from './Components/useReducer_practice/AdvanceCounter';
import Counter from './Components/useReducer_practice/Counter';
import FetchingData from './Components/useReducer_practice/FetchingData';


function App() {
  return (
    <div className="App">
      {/* <FunctionCompo /> */}
      {/* <ClassCompo /> */}
      {/* <SearchCountry /> */}
      {/* <Counter /> */}
      {/* <AdvanceCounter /> */}
      {/* <FetchingData /> */}
      {/* <Stopwatch /> */}
      {/* <Todo /> */}
      {/* <Ticktacktoe /> */}
      {/* <Counter_Custom_hook /> */}
      <Timer />


    </div>
  );
}

export default App;
