import { DateRange } from "react-date-range"
import "react-date-range/dist/styles.css" // main css file
import "react-date-range/dist/theme/default.css" // theme css file

const DateRangePicker = ({ setJourneyDate, setReturnDate }) => {
    const handleSelect = (ranges) => {
        const startDate = ranges.selection.startDate.toLocaleDateString()
        const endDate = ranges.selection.endDate.toLocaleDateString()

        setJourneyDate(startDate)
        setReturnDate(endDate)
    }

    return (
        <DateRange
            editableDateInputs={true}
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            ranges={[
                {
                    startDate: new Date(),
                    endDate: new Date(),
                    key: "selection",
                },
            ]}
        />
    )
}

export default DateRangePicker
