// components/DateRangePicker.js
import { useState } from "react"
import { DateRange } from "react-date-range"
import "react-date-range/dist/styles.css" // main css file
import "react-date-range/dist/theme/default.css" // theme css file

const DateRangePicker = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ])

    const handleSelect = (ranges) => {
        setState([ranges.selection])
        console.log("Journey Date:", ranges.selection.startDate)
        console.log("Return Date:", ranges.selection.endDate)
    }

    return (
        <DateRange
            editableDateInputs={true}
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            ranges={state}
        />
    )
}

export default DateRangePicker
