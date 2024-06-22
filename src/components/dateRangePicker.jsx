import { formatDateToMMMDDYYYY, formatDateToYYYYMMDD } from "@/utils/dateUtils"
import { DateRange } from "react-date-range"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"

const DateRangePicker = ({
    journeyDate,
    returnDate,
    setJourneyDate,
    setReturnDate,
}) => {
    const handleSelect = (ranges) => {
        const startDate = formatDateToYYYYMMDD(ranges.selection.startDate)
        const endDate = formatDateToYYYYMMDD(ranges.selection.endDate)

        setJourneyDate(startDate)
        setReturnDate(endDate)
    }

    // Convert dates to the display format
    const formattedJourneyDate = formatDateToMMMDDYYYY(journeyDate)
    const formattedReturnDate = formatDateToMMMDDYYYY(returnDate)

    return (
        <DateRange
            editableDateInputs={true}
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            ranges={[
                {
                    startDate: new Date(journeyDate),
                    endDate: new Date(returnDate),
                    key: "selection",
                },
            ]}
            showDateDisplay={false}
        >
            <input
                type="text"
                name="journeyDate"
                value={`${formattedJourneyDate} - ${formattedReturnDate}`}
                readOnly
                className="flight-card mt-8 px-3 py-5 outline-none"
            />
        </DateRange>
    )
}

export default DateRangePicker
