// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ViewEmployee from './components/ViewEmployee';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<ViewEmployee/>}></Route>
        <Route path='/add' element={<AddEmployee data={{ename:"",eage:"",eposition:"",esalary:""}} method="post"/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
