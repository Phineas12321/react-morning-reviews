import React from 'react'
import List from './Components/List'
import './App.css'
import Pokemon from './Components/Pokemon'

function App() {
  return (
    <div className="App">
      <h1 className="movie-list-title">The most amazing movie list</h1>
      <List />
      <h1 className="movie-list-title">The most amazing pokemon list</h1>
      <Pokemon/>
    </div>
  )
}

export default App
