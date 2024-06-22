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
    handleDateChange,
    getFilteredItems,
    handleLocationClick,
    dateType,
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
                return formatDateToMMMDDYYYY(journeyDate)
            case "Return Date":
                return formatDateToMMMDDYYYY(returnDate)
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

    const inputValue = () => {
        switch (label) {
            case "From":
                return fromLocation.city
            case "To":
                return toLocation.city
            case "Journey Date":
                return journeyDate
            case "Return Date":
                return returnDate
            default:
                return ""
        }
    }

    return (
        <div className="flight-card-container relative">
            {showInput ? (
                <>
                    <input
                        type={type}
                        name={label}
                        className="flight-card mt-8 px-3 py-5 outline-none"
                        placeholder={label}
                        value={inputValue()}
                        onChange={(e) => handleChange(e, type)}
                        autoFocus
                    />
                    {type === "text" ? (
                        <div className="dropdown-menu absolute left-0 top-full z-40 w-full rounded-md bg-white">
                            {getFilteredItems().map((item) => (
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
                            ))}
                        </div>
                    ) : (
                        <div className="dropdown-menu absolute left-0 top-full z-40 w-full rounded-md bg-white">
                            <DateRangePicker
                                journeyDate={journeyDate}
                                returnDate={returnDate}
                                setJourneyDate={setJourneyDate}
                                setReturnDate={setReturnDate}
                                handleDateChange={(date) =>
                                    handleDateChange(date, dateType)
                                }
                            />
                        </div>
                    )}
                </>
            ) : (
                <div
                    className="flight-card mt-8 cursor-pointer px-3 py-5"
                    onClick={() => handleInputClick(label)}
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
