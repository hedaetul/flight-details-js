'use client'

import React, { useState } from "react";
import cityData from '@/app/data/cityData'
import FlightCard from './flightCard'
import DateRangePicker from './dateRangePicker' 
import { formatDateToYYYYMMDD } from '@/utils/dateUtils'

const FlightCards = () => {
    const [showInput, setShowInput] = useState({
        from: false,
        to: false,
        date: false,
    });
    const [fromLocation, setFromLocation] = useState(cityData[0]);
    const [toLocation, setToLocation] = useState(cityData[1]);
    const [journeyDate, setJourneyDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());
    const [location, setLocation] = useState(fromLocation.city);

    const handleInputClick = (field) => {
        setShowInput((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const handleChange = (e, type) => {
        const value = e.target.value;
        if (type === "text") {
            setLocation(value);
        }
    };

    const getFilteredItems = () => {
        return cityData
            .filter((item) =>
                item.city.toLowerCase().includes(location.toLowerCase())
            )
            .sort((a, b) => a.city.localeCompare(b.city));
    };

    const handleLocationClick = (item, label) => {
        if (label === "From") {
            setFromLocation(item);
            setLocation(item.city);
        } else if (label === "To") {
            setToLocation(item);
            setLocation(item.city);
        }
        setShowInput((prev) => ({ ...prev, [label.toLowerCase()]: false }));
    };

    const handleDateChange = (startDate, endDate) => {
        setJourneyDate(startDate);
        setReturnDate(endDate);
    };

    const consoleData = () => {
        console.log("From: ", fromLocation);
        console.log("To: ", toLocation);
        console.log("Journey Date: ", formatDateToYYYYMMDD(journeyDate));
        console.log("Return Date: ", formatDateToYYYYMMDD(returnDate));
    };

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
                    handleLocationClick={(item) => handleLocationClick(item, "From")}
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
                    handleLocationClick={(item) => handleLocationClick(item, "To")}
                    handleInputClick={() => handleInputClick("to")}
                />
                <FlightCard
                    type="date"
                    label="Journey Date"
                    initialValue={formatDateToYYYYMMDD(journeyDate)}
                    showInput={showInput.date}
                    journeyDate={journeyDate}
                    returnDate={returnDate}
                    setJourneyDate={setJourneyDate}
                    setReturnDate={setReturnDate}
                    handleInputClick={() => handleInputClick("date")}
                    DateRangePicker={DateRangePicker}
                />
                <FlightCard
                    type="date"
                    label="Return Date"
                    initialValue={formatDateToYYYYMMDD(returnDate)}
                    showInput={showInput.date}
                    journeyDate={journeyDate}
                    returnDate={returnDate}
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
    );
};

export default FlightCards;
