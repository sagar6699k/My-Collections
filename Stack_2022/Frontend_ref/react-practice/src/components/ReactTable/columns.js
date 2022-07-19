import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    
    disableFilters: true  //for not having filter search box in id colimn.
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
    
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
    
  },
  {
    Header: "Age",
    Footer: "Age",
    accessor: "age",
    
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
    
  },
  {
    Header: "phone",
    Footer: "phone",
    accessor: "phone",
    
  },
];

//niche dikhaya gaya ye ek tarika hai for columnFillter

// {
//   Header: "Id",
//   Footer: "Id",
//   accessor: "id",
//   Filter: ColumnFilter,
//   disableFilters: true  //for not having filter search box in id colimn.
// },
// {
//   Header: "First Name",
//   Footer: "First Name",
//   accessor: "first_name",
//   Filter: ColumnFilter
// },
// {
//   Header: "Last Name",
//   Footer: "Last Name",
//   accessor: "last_name",
//   Filter: ColumnFilter
// },

//ya to tum aise likh sakte ho,ya fir filteringTable me ek defaultColumn krke usko usememo laga skte ho fir usko useTable me add krdo






export const GROUPED_COLUMN = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },

  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ]
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth",
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Header: "phone",
        Footer: "phone",
        accessor: "phone",
      },
    ]
  },
];
