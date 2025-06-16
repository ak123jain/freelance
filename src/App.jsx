 import React from 'react'
 import {Routes , Route} from 'react-router-dom'
import Contact from './Pages/Contact'
 
 const App = () => {
   return (
     <div>
       <Routes>
          <Route path="/" element={<Contact />} />
       </Routes>
     </div>
   )
 }
 
 export default App
 