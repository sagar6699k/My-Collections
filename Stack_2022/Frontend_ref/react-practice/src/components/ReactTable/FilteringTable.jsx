import React, { useMemo } from 'react'
import { useTable , useGlobalFilter} from "react-table";
import MOCK_DATA from "../MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMN } from "./columns";
import './basictable.css';
import { GlobalFilter } from './GlobalFilter';

const FilteringTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter

    } = useTable({
        columns,
        data
    }, useGlobalFilter)


    //distructuring globalfilter state from the state.
    const {globalFilter} = state;

    return (

        <>
        <GlobalFilter  filter={globalFilter} setFilter={setGlobalFilter}/>
        <table id="users_table" {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps}>{column.render('Header')}</th>
                        ))}

                    </tr>
                ))}

            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })
                            }

                        </tr>
                    )
                })}
            </tbody>

            <tfoot>
                {
                    footerGroups.map((footerGroup) => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {footerGroup.headers.map((column) => (
                                <th {...column.getFooterProps}>{column.render('Footer')}</th>
                            ))}
                        </tr>
                    ))
                }
            </tfoot>
        </table>
        </>
    )
}

export default FilteringTable