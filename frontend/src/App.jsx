import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Counter App</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Count: <span className="text-blue-500">{count}</span>
        </h2>
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
