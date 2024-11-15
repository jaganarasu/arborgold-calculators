import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from 'react-icons/fa';
import '../components/toggle.css'



const DateInput = ({ label, value, onChange }) => {
  const [startDate, setStartDate] = useState(value);

  const handleChange = (date) => {
    setStartDate(date);
    onChange(date);
  };

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <div className="input-group">
        <DatePicker
          selected={startDate}
          onChange={handleChange}
          className="form-control"
          dateFormat="yyyy-MM-dd"
          placeholderText="Select a date"
        />
        <span className="input-group-text" onClick={() => document.querySelector('.react-datepicker__input-container input').focus()}>
          <FaCalendarAlt />
        </span>
      </div>
    </div>
  );
};

export default DateInput;
