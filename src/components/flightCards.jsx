"use client"

import cityData from "@/app/data/cityData"
import { useState } from "react"
import FlightCard from "./flightCard"



const today = new Date().toLocaleDateString()



const FlightCards = () => {
    const [showInput, setShowInput] = useState(false)
    const [fromLocation, setFromLocation] = useState(cityData[0])
    const [toLocation, setToLocation] = useState(cityData[1])
    const [journeyDate, setJourneyDate] = useState(today)
    const [location, setLocation] = useState(fromLocation.city)

    const handleInputClick = () => {
        setShowInput(true)
    }

    const handleChange = (e) => {
        const { type, value } = e.target
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

    const handleFromLocationClick = (from) => {
        setFromLocation(from)
        setLocation(from.city)
        setShowInput(false)
    }

    const handleToLocationClick = (to) => {
        setToLocation(to)
        setLocation(to.city)
        setShowInput(false)
    }

    return (
        <div className="flex h-fit gap-4 rounded-md bg-white">
            <FlightCard
                type="text"
                label="From"
                initialValue={fromLocation.city}
                showInput={showInput}
                fromLocation={fromLocation}
                toLocation={toLocation}
                location={location}
                journeyDate={journeyDate}
                handleInputClick={handleInputClick}
                handleChange={handleChange}
                getFilteredItems={getFilteredItems}
                handleFromLocationClick={handleFromLocationClick}
                handleToLocationClick={handleToLocationClick}
            />
            <FlightCard
                type="text"
                label="To"
                initialValue={toLocation.city}
                showInput={showInput}
                fromLocation={fromLocation}
                toLocation={toLocation}
                location={location}
                journeyDate={journeyDate}
                handleInputClick={handleInputClick}
                handleChange={handleChange}
                getFilteredItems={getFilteredItems}
                handleFromLocationClick={handleFromLocationClick}
                handleToLocationClick={handleToLocationClick}
            />
            <FlightCard
                type="date"
                label="Journey Date"
                initialValue={journeyDate}
                showInput={showInput}
                fromLocation={fromLocation}
                toLocation={toLocation}
                location={location}
                journeyDate={journeyDate}
                handleInputClick={handleInputClick}
                handleChange={handleChange}
                getFilteredItems={getFilteredItems}
                handleFromLocationClick={handleFromLocationClick}
                handleToLocationClick={handleToLocationClick}
            />
        </div>
    )
}

export default FlightCards
