// Calendarjs


import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./App.css";

const CalendarComponent = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [ongoing, setOngoing] = useState(false);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleStartTimeChange = (event) => {
        setStartTime(event.target.value);
    };

    const handleEndTimeChange = (event) => {
        setEndTime(event.target.value);
    };

    const toggleOngoing = () => {
        setOngoing(!ongoing);
    };

    const Create_Event_Fun = () => {
        if (selectedDate && startTime && endTime) {
            // Do something with the selected date, start time, and end time
            setSelectedDate(null);
            setStartTime("");
            setEndTime("");
            setOngoing(false);
            
            // Display the pop-up message
            alert("Thank you for submitting your availability.");
        }
    };

    return (
        <div className="app">
            <h1>Employee Availability Calendar</h1>
            <div className="container">
                <div className="calendar-container">
                    <Calendar
                        value={selectedDate}
                        onChange={handleDateChange}
                    />
                </div>
                {selectedDate && (
                    <div className="event-form">
                        <h2>Time Slot</h2>
                        <p>Selected Date: {selectedDate.toDateString()}</p>
                        <input
                            type="time"
                            placeholder="Start Time"
                            value={startTime}
                            onChange={handleStartTimeChange}
                        />
                        <input
                            type="time"
                            placeholder="End Time"
                            value={endTime}
                            onChange={handleEndTimeChange}
                        />
                        &nbsp;
                        &nbsp;
                        <label>
                            <input
                                type="checkbox"
                                checked={ongoing}
                                onChange={toggleOngoing}
                            />
                            Ongoing
                        </label>
                        &nbsp;
                        &nbsp;
                        <button
                            className="create-btn"
                            onClick={Create_Event_Fun}
                        >
                            Submit
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CalendarComponent;
