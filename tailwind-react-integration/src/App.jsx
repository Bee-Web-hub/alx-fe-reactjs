// App.jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      {/* Logos */}
      <div className="flex space-x-6 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="h-20 hover:scale-110 transition-transform" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-20 hover:scale-110 transition-transform" alt="React logo" />
        </a>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Vite + React + Tailwind</h1>

      {/* Counter Card */}
      <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Count is {count}
        </button>
        <p className="mt-4 text-sm text-gray-600">
          Edit <code className="bg-gray-200 px-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Footer Note */}
      <p className="mt-8 text-gray-500 text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
