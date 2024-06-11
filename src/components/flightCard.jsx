"use client"
import cityData from "@/app/data/cityData"
import { useState } from "react"

const updateData = {
    id: "",
    city: "",
    airport: "",
}

const FlightCard = ({ label, initialValue }) => {
    const [showInput, setShowInput] = useState(false)
    const [location, setLocation] = useState(initialValue)
    const [item, setItem] = useState(updateData)

    const handleInputClick = () => {
        setShowInput(true)
    }

    const handleBlur = () => {
        setShowInput(false)
    }

    const handleChange = (event) => {
        setLocation(event.target.value)
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            setShowInput(false)
        }
    }
    const getFilteredItems = () => {
        return cityData
            .filter((item) =>
                item.city.toLowerCase().includes(location.toLowerCase()),
            )
            .sort((a, b) => a.city.localeCompare(b.city))
    }

    const handleItemClick = () => {
        console.log("hi")
        setLocation(item.city)
        setShowInput(false)
        setItem(updateData)
    }

    return (
        <div className="flight-card-container relative">
            {showInput ? (
                <>
                    <input
                        name={location}
                        className="flight-card px-3 py-1"
                        placeholder={label}
                        value={location}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                        autoFocus
                    />
                    <div
                        onClick={(e) => {
                            console.log("hi");
                            e.preventDefault();
                        }}
                        className="dropdown-menu absolute left-0 top-full w-full bg-white"
                    >
                        {getFilteredItems().map((item) => (
                            <div
                                key={item.id}
                                className="dropdown-item cursor-pointer px-3 py-1 hover:bg-gray-200"
                                onClick={() => {
                                    console.log("hi")
                                }}
                            >
                                <h3 className="text-sm uppercase text-gray-500">
                                    {item.id}
                                </h3>
                                <h2 className="text-xl font-bold">
                                    {item.city}
                                </h2>
                                <p className="text-gray-500">{item.airport}</p>
                                <hr className="h-[1px] w-full bg-black" />
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div
                    onClick={handleInputClick}
                    className="flight-card h-fit px-3 py-5"
                >
                    <h3 className="text-sm uppercase text-gray-500">{label}</h3>
                    <h2 className="text-xl font-bold">{location}</h2>
                    <p className="text-gray-500">
                        {
                            cityData.find((item) => item.city === location)
                                ?.airport
                        }
                    </p>
                </div>
            )}
        </div>
    )
}

export default FlightCard
