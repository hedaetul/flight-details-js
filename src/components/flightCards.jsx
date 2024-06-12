import FlightCard from "./flightCard"

const FlightCards = () => {
    return (
        <div className="flex h-fit gap-4 rounded-md bg-white">
            <FlightCard type="text" label="From" initialValue="Dhaka" />
            <FlightCard type="text" label="To" initialValue="Cox's Bazar" />
            <FlightCard
                type="date"
                label="Journey Date"
                initialValue="Cox's Bazar"
            />
        </div>
    )
}

export default FlightCards
