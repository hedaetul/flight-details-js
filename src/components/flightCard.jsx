const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

const today = new Date().toLocaleDateString()

const FlightCard = ({
    type,
    label,
    initialValue,
    showInput,
    fromLocation,
    toLocation,
    location,
    journeyDate,
    handleInputClick,
    handleChange,
    getFilteredItems,
    handleFromLocationClick,
    handleToLocationClick,
}) => {
    return (
        <div className="flight-card-container relative">
            {showInput ? (
                <>
                    <input
                        type={type}
                        name={label}
                        className="flight-card mt-8 px-3 py-5 outline-none"
                        placeholder={label}
                        value={type === "text" ? location : journeyDate}
                        onChange={handleChange}
                        autoFocus
                    />
                    {type === "text" && (
                        <div className="dropdown-menu absolute left-0 top-full w-full bg-white">
                            {getFilteredItems().map((item) => (
                                <div
                                    key={item.id}
                                    className="dropdown-item cursor-pointer px-3 py-1 hover:bg-gray-200"
                                    onClick={() => {
                                        label === "From"
                                            ? handleFromLocationClick(item)
                                            : handleToLocationClick(item)
                                    }}
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
                    )}
                </>
            ) : (
                <div
                    onClick={handleInputClick}
                    className="flight-card mt-8 px-3 py-5"
                >
                    <h3 className="text-sm uppercase text-gray-500">{label}</h3>
                    <h2 className="text-xl font-bold">
                        {type === "text" ? fromLocation.city : journeyDate}
                    </h2>
                    <p className="text-gray-500">
                        {type === "text"
                            ? fromLocation.airport
                            : dayNames[new Date(journeyDate).getDay()]}
                    </p>
                </div>
            )}
        </div>
    )
}

export default FlightCard
