import './App.css';
import ClassCompo from './Components/ClassCompo';
import FunctionCompo from './Components/FunctionCompo';
import SearchCountry from './Components/SearchCountryApp/SearchCountry';
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
      <FetchingData />
    </div>
  );
}

export default App;
