import './App.css';
import Car from './components/ClassComponent/Car';
import ClassCompo from './components/ClassComponent/ClassCompo';
import BasicTable from './components/ReactTable/BasicTable';
import FilteringTable from './components/ReactTable/FilteringTable';
import PaginationTable from './components/ReactTable/PaginationTable';
import SortingTable from './components/ReactTable/SortingTable';
import SearchCountry from './components/SearchCountry';

function App() {
  return (
    <div className="App">
      {/* This is Class component. */}
      {/* <Car/>  */}
      {/* <ClassCompo/> */}
      {/* <SearchCountry/> */}
      {/* <BasicTable/> */}
      {/* <SortingTable/> */}
      {/* <FilteringTable /> */}
      <PaginationTable />
    </div>
  );
}

export default App;
