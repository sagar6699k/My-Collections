import React from 'react'

export const GlobalFilter = ({ filter, setFilter }) => {
    return (
        <span>
            Search : {' '}
            <input type="text" value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
        </span>
    )
}
