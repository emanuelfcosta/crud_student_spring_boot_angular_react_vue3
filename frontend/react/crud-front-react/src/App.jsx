
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ListStudentComponent from './components/Students/ListStudentComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import StudentComponent from './components/Students/StudentComponent'


function App() {
  
  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
       <Routes>
            {/* http://localhost:5173/ */}
           <Route path='/' element= {<ListStudentComponent/> }></Route>
             {/* http://localhost:5173/students */}
           <Route path='/students' element= {<ListStudentComponent/> }></Route>
            {/* http://localhost:5173/add-student */}
            <Route path='/add-student' element= {<StudentComponent/> }></Route>
            {/* http://localhost:5173/edit-student */}
            <Route path='/edit-student/:id' element= {<StudentComponent/> }></Route>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
