import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './App.css';

function App() {
  const [total, setTotal] = useState(0);
  const [HISTORY, setHistory] = useState([]);
  const [operationCount, setOperationCount] = useState({ additions: 0, subtractions: 0 });

  useEffect(() => {
    checkTotal();
  }, [total]);

  function handleAddOne() {
    setTotal(total + 1);
    setHistory([...HISTORY, '+1']);
    setOperationCount(prev => ({ ...prev, additions: prev.additions + 1 }));
  }

  function handleAddTwo() {
    setTotal(total + 2);
    setHistory([...HISTORY, '+2']);
    setOperationCount(prev => ({ ...prev, additions: prev.additions + 1 }));
  }

  function handleRemoveOne() {
    setTotal(total - 1);
    setHistory([...HISTORY, '-1']);
    setOperationCount(prev => ({ ...prev, subtractions: prev.subtractions + 1 }));
  }

  function handleRemoveTwo() {
    setTotal(total - 2);
    setHistory([...HISTORY, '-2']);
    setOperationCount(prev => ({ ...prev, subtractions: prev.subtractions + 1 }));
  }

  function handleReset() {
    setTotal(0);
    setHistory([...HISTORY, 'Reset']);
  }

  function removeHistoryItem(index) {
    const newHistory = HISTORY.filter((_, i) => i !== index);
    setHistory(newHistory);
  }

  function checkTotal() {
    if (total > 0) {
      return "The total is positive.";
    } else if (total < 0) {
      return "The total is negative.";
    } else {
      return "The total is zero.";
    }
  }

  function ClearAll() {
    setTotal(0);
    setHistory([]);
    setOperationCount({ additions: 0, subtractions: 0 });
  }

  return (
    <div className="App">
      <Header />

      <div id="main-content">
        <Sidebar 
          total={total}
          HISTORY={HISTORY}
          message={checkTotal()}
          operationCount={operationCount}
          onRemoveHistoryItem={removeHistoryItem}
        />
        <MainContent
          onAddOne={handleAddOne}
          onAddTwo={handleAddTwo}
          onReset={handleReset}
          onRemoveOne={handleRemoveOne}
          onRemoveTwo={handleRemoveTwo}
          onClearAll={ClearAll}  // Pass ClearAll to MainContent
        />
      </div>
    </div>
  );
}

export default App;
