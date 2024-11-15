import React, { useState } from 'react';
import DateInput from './assets/components/DateInput';
import ResultDisplay from './assets/components/ResultDisplay';
import { calculateDateDifference } from './assets/utils/dateUtils';
import ToggleSwitch from './assets/components/ToggleSwitch';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import '@fontsource/nunito-sans';

const App = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [includeEndDay, setIncludeEndDay] = useState(false);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    if (startDate && endDate) {
      const calculation = calculateDateDifference(startDate, endDate, includeEndDay);
      setResult(calculation);
    }
  };
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Nunito Sans' }}>
      <h1>Date Calculator</h1>
      
      <DateInput label="Start Date:" value={startDate} onChange={setStartDate} />
      <DateInput label="End Date:" value={endDate} onChange={setEndDate} />
      <ToggleSwitch label="Include All Days?" checked={includeEndDay} onChange={setIncludeEndDay} />

 
      
      <button onClick={handleCalculate} style={{ marginTop: '10px' }}>Calculate</button>

      {result && <ResultDisplay result={result} />}
    </div>
  );
};

export default App;