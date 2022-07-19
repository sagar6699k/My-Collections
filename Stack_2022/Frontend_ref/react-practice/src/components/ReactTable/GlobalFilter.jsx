import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'


export const GlobalFilter = ({ filter, setFilter }) => {

    const [value, setValue] = useState(filter)

    //ye debouncing same wesehi hai jese hum setTimeout se banate hai.
    const deBounceOnChange = useAsyncDebounce((val) => {
        setFilter(val || undefined)
    }, 1000)


    return (
        <span>
            Search : {' '}
            <input type="text" 
                value={value || ''}
                onChange={(e) => {
                    setValue(e.target.value)
                    deBounceOnChange(e.target.value)
                }}
            />
        </span>
    )
}
