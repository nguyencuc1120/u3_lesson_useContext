import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import './App.css'

function App() {
  return (
  
      <div className="app">
        <div className="header">
          <h1>Intro to Context</h1>
        </div>

        <div className="main">
          <ComponentA/>
          <ComponentB/>
        </div>
 </div>
  )
}

export default App
