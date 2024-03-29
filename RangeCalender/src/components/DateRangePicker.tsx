import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Card, InputGroup } from "react-bootstrap";

export const MultDateRangePicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    // Ensure date is defined before setting it
    if (date) {
      setStartDate(date);
    }
  };

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Start Date"
      />
      <DatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        placeholderText="End Date"
        minDate={startDate}
      />
      <Card className="custom-card">
        <Card.Header>
          <Card.Title>Human Friendly dates</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="form-group">
            <InputGroup className="">
              <InputGroup.Text className="input-group-text text-muted">
                {" "}
                <i className="ri-calendar-line"></i>{" "}
              </InputGroup.Text>
              <DatePicker selected={startDate} onChange={handleDateChange} />
            </InputGroup>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
