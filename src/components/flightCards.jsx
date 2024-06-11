import FlightCard from "./flightCard" 

const FlightCards = () => {
    return (
        <div className="flex gap-4 bg-white">
            <FlightCard label="From" initialValue="Dhaka" />
            <FlightCard label="To" initialValue="Cox's Bazar" />
        </div>
    )
}

export default FlightCards
