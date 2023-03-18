import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import SecondPage from './pages/SecondPage'
import ErrorPage from './pages/ErrorPage'
import EditSomething from './pages/EditSomething'

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='*' element={<ErrorPage/>}/>
          <Route path='/secondPage' element={<SecondPage/>}/>
          <Route path='/editSomething/:id' element={<EditSomething/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
