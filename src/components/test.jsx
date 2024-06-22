// const dayNames = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
// ]

// const FlightCard = ({
//     type,
//     label,
//     initialValue,
//     showInput,
//     fromLocation,
//     toLocation,
//     location,
//     journeyDate,
//     handleInputClick,
//     handleChange,
//     getFilteredItems,
//     handleLocationClick,
// }) => {
//     const displayId = () => {
//         switch (label) {
//             case "From":
//                 return fromLocation.id
//             case "To":
//                 return toLocation.id
//             case "Date":
//                 return null
//             default:
//                 return ""
//         }
//     }

//     const displayValue = () => {
//         switch (label) {
//             case "From":
//                 return fromLocation.city
//             case "To":
//                 return toLocation.city
//             case "Journey Date":
//                 return journeyDate
//             default:
//                 return ""
//         }
//     }

//     const displayDetails = () => {
//         switch (label) {
//             case "From":
//                 return fromLocation.airport
//             case "To":
//                 return toLocation.airport
//             case "Journey Date":
//                 return dayNames[new Date(journeyDate).getDay()]
//             default:
//                 return ""
//         }
//     }

//     return (
//         <div className="flight-card-container relative">
//             {showInput ? (
//                 <>
//                     <input
//                         type={type}
//                         name={label}
//                         className="flight-card mt-8 px-3 py-5 outline-none"
//                         placeholder={label}
//                         value={type === "text" ? location : journeyDate}
//                         onChange={(e) => handleChange(e, type)}
//                         autoFocus
//                         // onFocus={type === "date" ? (e) => e.target.showPicker() : null}
//                         // onFocus={
//                         //     type === "date" && ((e) => e.target.showPicker)
//                         // }
//                     />
//                     {type === "text" && (
//                         <div className="dropdown-menu absolute left-0 top-full z-40 w-full rounded-md bg-white">
//                             {getFilteredItems().map((item) => (
//                                 <div
//                                     key={item.id}
//                                     className="dropdown-item cursor-pointer px-3 py-1 hover:bg-gray-200"
//                                     onClick={() =>
//                                         handleLocationClick(item, label)
//                                     }
//                                 >
//                                     <h3 className="text-sm uppercase text-gray-500">
//                                         {item.id}
//                                     </h3>
//                                     <h2 className="text-xl font-bold">
//                                         {item.city}
//                                     </h2>
//                                     <p className="text-gray-500">
//                                         {item.airport}
//                                     </p>
//                                     <hr className="h-[1px] w-full bg-black" />
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </>
//             ) : (
//                 <div
//                     onClick={handleInputClick}
//                     className="flight-card mt-8 px-3 py-5"
//                 >
//                     <h3 className="text-sm uppercase text-gray-500">{label}</h3>
//                     <h2 className="text-xl font-bold">{displayValue()}</h2>
//                     <p className="text-gray-500">{displayDetails()}</p>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default FlightCard
