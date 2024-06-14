"use client"

import cityData from "@/app/data/cityData"
import { useState } from "react"
import FlightCard from "./flightCard"

const today = new Date().toLocaleDateString()

const FlightCards = () => {
    const [showInput, setShowInput] = useState({
        from: false,
        to: false,
        date: false,
    })
    const [fromLocation, setFromLocation] = useState(cityData[0])
    const [toLocation, setToLocation] = useState(cityData[1])
    const [journeyDate, setJourneyDate] = useState(today)
    const [location, setLocation] = useState(fromLocation.city)

    const handleInputClick = (field) => {
        setShowInput((prev) => ({ ...prev, [field]: !prev[field] }))
    }

    const handleChange = (e, type) => {
        const value = e.target.value
        if (type === "text") {
            setLocation(value)
        } else if (type === "date") {
            setJourneyDate(value)
        }
    }

    const getFilteredItems = () => {
        return cityData
            .filter((item) =>
                item.city.toLowerCase().includes(location.toLowerCase()),
            )
            .sort((a, b) => a.city.localeCompare(b.city))
    }

    const handleLocationClick = (item, label) => {
        if (label === "From") {
            setFromLocation(item)
            setLocation(item.city)
        } else if (label === "To") {
            setToLocation(item)
            setLocation(item.city)
        }
        setShowInput((prev) => ({ ...prev, [label.toLowerCase()]: false }))
    }

    const consoleData = () => {
        console.log(fromLocation)
        console.log(toLocation)
        console.log(journeyDate)
    }

    return (
        <div>
            <div className="flex h-fit gap-4 rounded-md bg-white">
                <FlightCard
                    type="text"
                    label="From"
                    initialValue={fromLocation.city}
                    showInput={showInput.from}
                    fromLocation={fromLocation}
                    toLocation={toLocation}
                    location={location}
                    journeyDate={journeyDate}
                    handleInputClick={() => handleInputClick("from")}
                    handleChange={handleChange}
                    getFilteredItems={getFilteredItems}
                    handleLocationClick={handleLocationClick}
                />
                <FlightCard
                    type="text"
                    label="To"
                    initialValue={toLocation.city}
                    showInput={showInput.to}
                    fromLocation={fromLocation}
                    toLocation={toLocation}
                    location={location}
                    journeyDate={journeyDate}
                    handleInputClick={() => handleInputClick("to")}
                    handleChange={handleChange}
                    getFilteredItems={getFilteredItems}
                    handleLocationClick={handleLocationClick}
                />
                <FlightCard
                    type="date"
                    label="Journey Date"
                    initialValue={journeyDate}
                    showInput={showInput.date}
                    fromLocation={fromLocation}
                    toLocation={toLocation}
                    location={location}
                    journeyDate={journeyDate}
                    handleInputClick={() => handleInputClick("date")}
                    handleChange={handleChange}
                    getFilteredItems={getFilteredItems}
                    handleLocationClick={handleLocationClick}
                />
            </div>
            <button
                onClick={consoleData}
                className="rounded-sm bg-yellow-500 px-8 py-2 font-medium text-black"
            >
                Search
            </button>
        </div>
    )
}

export default FlightCards
