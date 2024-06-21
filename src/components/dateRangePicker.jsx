import React from "react";
import { DateRange } from "react-date-range";
import { formatDateToYYYYMMDD, formatDateToMMMDDYYYY } from "@/utils/dateUtils"; // Adjust the path as per your actual structure

const DateRangePicker = ({ journeyDate, returnDate, setJourneyDate, setReturnDate }) => {
    const handleSelect = (ranges) => {
        const startDate = formatDateToYYYYMMDD(ranges.selection.startDate);
        const endDate = formatDateToYYYYMMDD(ranges.selection.endDate);

        setJourneyDate(startDate);
        setReturnDate(endDate);
    };

    // Convert dates to the display format
    const formattedJourneyDate = formatDateToMMMDDYYYY(new Date(journeyDate));
    const formattedReturnDate = formatDateToMMMDDYYYY(new Date(returnDate));

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
            showDateDisplay={false} // Disable default date display
        >
            <input
                type="text"
                name="journeyDate"
                value={`${formattedJourneyDate} - ${formattedReturnDate}`}
                readOnly
                className="flight-card mt-8 px-3 py-5 outline-none"
            />
        </DateRange>
    );
};

export default DateRangePicker;
