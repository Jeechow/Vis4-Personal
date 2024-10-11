import React from 'react';

function MainContent({ onAddOne, onAddTwo, onRemoveOne, onRemoveTwo, onReset, onClearAll }) {
  return (
    <div className="MainContent">
      <h3>TRADE CENTER
      </h3>
      <button onClick={onRemoveTwo}>Sell 2
      </button>
      <button onClick={onRemoveOne}>Sell 1
      </button>
      <button onClick={onReset}>Bankrupt
      </button>
      <button onClick={onAddOne}>Buy 1
      </button>
      <button onClick={onAddTwo}>Buy 2
      </button>
      <p><button id="onClearAll" 
      onClick={onClearAll}>Restart Your Life!
      	</button>
      </p>

    </div>
  );
}

export default MainContent;
