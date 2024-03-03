import { useState } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import Create from './components/Create/Create'
import Read from './components/Read/Read'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Update from './components/Update/Update'
import Delete from './components/Delete/Delete'


function App() {
  const [count, setCount] = useState(0)


  return (
    <Router>
      <h1>Asif Inc.</h1>
      <div className='main'>
        

        <div>
          <Create path='/create' Component={Create}></Create>
        </div>

        <div className='read'>
          <Read path='/read' Component={Read}></Read>
        </div>

        <div>
          <Update path="/update" Component={Update}></Update>
        </div>

        <div>
          <Delete path='/delete' Component={Delete}></Delete>
        </div>

        <div>
          
        </div>

      </div>
    </Router>
  )
}



export default App
