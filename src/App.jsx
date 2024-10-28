import {BrowserRouter,Routes,Route} from "react-router-dom"
import StudentsFrom from "./Pages/StudentsFrom"
import {Provider} from "react-redux"
import store from "./Redux/Store"
import ShowStudents from "./Pages/ShowStudents"
import UpdateData from "./Pages/UpdateData"
import NavBar from "./component/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (  
    <>

    <Provider store={store}>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<StudentsFrom/>}/>
      <Route path="/ShowStudents" element={<ShowStudents/>}/>
      <Route path="/updateData/:pos" element={<UpdateData/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>

    </>
  )
}

export default App
