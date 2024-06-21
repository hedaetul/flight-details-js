import { formatDateToMMMDDYYYY } from "@/utils/dateUtils" // Adjust the path as per your actual structure
import DateRangePicker from "./dateRangePicker"

const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

const FlightCard = ({
    type,
    label,
    initialValue,
    showInput,
    fromLocation,
    toLocation,
    location,
    journeyDate,
    returnDate,
    setJourneyDate,
    setReturnDate,
    handleInputClick,
    handleChange,
    getFilteredItems,
    handleLocationClick,
}) => {
    const displayId = () => {
        switch (label) {
            case "From":
                return fromLocation.id
            case "To":
                return toLocation.id

            default:
                return ""
        }
    }

    const displayValue = () => {
        switch (label) {
            case "From":
                return fromLocation.city
            case "To":
                return toLocation.city
            case "Journey Date":
                return formatDateToMMMDDYYYY(new Date(journeyDate))
            case "Return Date":
                return formatDateToMMMDDYYYY(new Date(returnDate))
            default:
                return ""
        }
    }

    const displayDetails = () => {
        switch (label) {
            case "From":
                return fromLocation.airport
            case "To":
                return toLocation.airport
            case "Journey Date":
                return dayNames[new Date(journeyDate).getDay()]
            case "Return Date":
                return dayNames[new Date(returnDate).getDay()]
            default:
                return ""
        }
    }

    return (
        <div className="flight-card-container relative">
            {showInput ? (
                <>
                    <div className="dropdown-menu absolute left-0 top-full z-40 w-full rounded-md bg-white">
                        {type === "text" ? (
                            getFilteredItems().map((item) => (
                                <div
                                    key={item.id}
                                    className="dropdown-item cursor-pointer px-3 py-1 hover:bg-gray-200"
                                    onClick={() =>
                                        handleLocationClick(item, label)
                                    }
                                >
                                    <h3 className="text-sm uppercase text-gray-500">
                                        {item.id}
                                    </h3>
                                    <h2 className="text-xl font-bold">
                                        {item.city}
                                    </h2>
                                    <p className="text-gray-500">
                                        {item.airport}
                                    </p>
                                    <hr className="h-[1px] w-full bg-black" />
                                </div>
                            ))
                        ) : (
                            <div className="dropdown-menu absolute left-0 top-full z-40 w-full rounded-md bg-white">
                                <div className="dropdown-item px-3 py-1">
                                    <DateRangePicker
                                        journeyDate={journeyDate}
                                        returnDate={returnDate}
                                        setJourneyDate={setJourneyDate}
                                        setReturnDate={setReturnDate}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </>
            ) : (
                <div
                    className="flight-card mt-8 cursor-pointer px-3 py-5"
                    onClick={handleInputClick}
                >
                    <h3 className="text-sm uppercase text-gray-500">{label}</h3>
                    <h2 className="text-xl font-bold">
                        {type === "text"
                            ? `${displayValue()}[${displayId()}]`
                            : displayValue()}
                    </h2>
                    <p className="text-gray-500">{displayDetails()}</p>
                </div>
            )}
        </div>
    )
}

export default FlightCard
