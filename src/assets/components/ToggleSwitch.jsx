// src/components/ToggleSwitch.js
import React from 'react';
import '../components/toggle.css'

const ToggleSwitch = ({ label, checked, onChange }) => (
    <div className="mb-3 pt-3">
    <div className="form-label">{label}</div>
    <div className="form-check form-switch">
      <input
        type="checkbox"
        className="form-check-input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </div>
  </div>
  );

export default ToggleSwitch;
