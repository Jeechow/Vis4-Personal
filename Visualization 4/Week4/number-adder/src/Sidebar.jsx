import React from 'react';

function Sidebar({ total, HISTORY, message, operationCount, onRemoveHistoryItem }) {
  return (
    <div className="Sidebar">
      <h3>CAR COLLECTION NUMBER</h3>
      <p id="resultId">{total}</p>
      <p id="totalMessage">{message}</p>
      <h3>HISTORY</h3>
      <p id="summary">
        Total additions: {operationCount.additions}, <br />
        Total subtractions: {operationCount.subtractions}
      </p>
      <ul id="historyList">
        {HISTORY.map((entry, index) => (
          <li key={index} onClick={() => onRemoveHistoryItem(index)}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
