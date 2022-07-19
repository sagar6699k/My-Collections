import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "../MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMN } from "./columns";
import "./basictable.css";

const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  // const grouped_columns = useMemo(() => GROUPED_COLUMN, [])
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    page,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    pageCount,
    state,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  const { pageIndex } = state;

  console.log("Latest_data --->", page, pageOptions);

  return (
    <>
      <table id="users_table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        
          
        <span>
            | Go to the page: {" "}
                  <input type="number"
                      defaultValue={pageIndex + 1}
                      onChange={(e) => {
                          const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                          gotoPage(pageNumber)
                      }}
                  />
                      
        </span>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Prev
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount-1)} disabled={!canNextPage}>
          {">>"}
        </button>
      </div>
    </>
  );
};

export default BasicTable;
