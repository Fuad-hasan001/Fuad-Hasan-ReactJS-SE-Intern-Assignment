import { useState } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import Create from './components/Create/Create'
import Read from './components/Read/Read'
// import Update from './components/Update/Update'
// import Delete from './components/Delete/Delete'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)


  return (
    <Router>
      <div className='main'>
        <h1>Asif Inc.</h1>

        <div>
          <Create path='/create' Component={Create}></Create>
        </div>

        <div className='read'>
          <Read path='/read' Component={Read}></Read>
        </div>

        {/* <Route path='/update' Component={Update}/>
        <Route path='/block'></Route>
        <Route path='/delete' Component={Delete}/> */}

      </div>
    </Router>
  )
}



export default App
