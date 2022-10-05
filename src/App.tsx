import Dragable from 'ceros-test-drageble';
import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <Dragable>
        <div>
          <button>menu 1</button>
          <button>menu 2</button>
          <button>menu 3</button>
          <button>menu 4</button>
        </div>
      </Dragable>
    </>
  );
}

export default App;