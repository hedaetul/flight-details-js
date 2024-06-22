"use client"

import cityData from "@/app/data/cityData"
import { formatDateToYYYYMMDD } from "@/utils/dateUtils"
import { useState } from "react"
import DateRangePicker from "./dateRangePicker"
import FlightCard from "./flightCard"

const FlightCards = () => {
    const [showInput, setShowInput] = useState({
        from: false,
        to: false,
        date: false,
    })
    const [fromLocation, setFromLocation] = useState(cityData[0])
    const [toLocation, setToLocation] = useState(cityData[1])
    const [journeyDate, setJourneyDate] = useState(
        formatDateToYYYYMMDD(new Date()),
    )
    const [returnDate, setReturnDate] = useState(
        formatDateToYYYYMMDD(new Date()),
    )
    const [location, setLocation] = useState(fromLocation.city)

    const handleInputClick = (field) => {
        setShowInput((prev) => ({ ...prev, [field]: !prev[field] }))
    }

    const handleChange = (e, type) => {
        const value = e.target.value
        if (type === "text") {
            setLocation(value)
        }
    }

    // const handleJourneyDateChange = (startDate) => {
    //     setJourneyDate(formatDateToYYYYMMDD(startDate)) //FIXME:
    // }

    // const handleReturnDateChange = (endDate) => {
    //     setReturnDate(formatDateToYYYYMMDD(endDate))
    // }

    const handleDateChange = (date, dateType) => {
        if (dateType === 'journeyDate') {
            setJourneyDate(formatDateToYYYYMMDD(date));
        } else if (dateType === 'returnDate') {
            setReturnDate(formatDateToYYYYMMDD(date));
        }
    };

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
        console.log("From: ", fromLocation)
        console.log("To: ", toLocation)
        console.log("Journey Date: ", journeyDate)
        console.log("Return Date: ", returnDate)
    }

    return (
        <div className="relative z-10">
            <div className="flex gap-4 rounded-3xl bg-white px-10 pb-12 pt-6">
                <FlightCard
                    type="text"
                    label="From"
                    initialValue={fromLocation.city}
                    showInput={showInput.from}
                    fromLocation={fromLocation}
                    toLocation={toLocation}
                    location={location}
                    handleChange={handleChange}
                    getFilteredItems={getFilteredItems}
                    handleLocationClick={(item) =>
                        handleLocationClick(item, "From")
                    }
                    handleInputClick={() => handleInputClick("from")}
                />
                <FlightCard
                    type="text"
                    label="To"
                    initialValue={toLocation.city}
                    showInput={showInput.to}
                    fromLocation={fromLocation}
                    toLocation={toLocation}
                    location={location}
                    handleChange={handleChange}
                    getFilteredItems={getFilteredItems}
                    handleLocationClick={(item) =>
                        handleLocationClick(item, "To")
                    }
                    handleInputClick={() => handleInputClick("to")}
                />
                <FlightCard
                    type="date"
                    label="Journey Date"
                    initialValue={journeyDate}
                    showInput={showInput.date}
                    journeyDate={journeyDate}
                    returnDate={returnDate}
                    handleDateChange={handleDateChange}
                    dateType='journeyDate'
                    setJourneyDate={setJourneyDate}
                    setReturnDate={setReturnDate}
                    handleInputClick={() => handleInputClick("date")}
                    DateRangePicker={DateRangePicker}
                />
                <FlightCard
                    type="date"
                    label="Return Date"
                    initialValue={returnDate}
                    showInput={showInput.date}
                    journeyDate={journeyDate}
                    returnDate={returnDate}
                    handleDateChange={handleDateChange}
                    dateType='returnDate'
                    setJourneyDate={setJourneyDate}
                    setReturnDate={setReturnDate}
                    handleInputClick={() => handleInputClick("date")}
                    DateRangePicker={DateRangePicker}
                />
            </div>
            <div className="flex-row-center">
                <button
                    onClick={consoleData}
                    className="absolute bottom-[-20px] rounded-lg bg-yellow-500 px-8 py-2 text-lg font-semibold text-gray-800"
                >
                    Search
                </button>
            </div>
        </div>
    )
}

export default FlightCards
