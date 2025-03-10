import './App.css';
import  {Routes, Route, useNavigate} from 'react-router-dom'
import Home from "./Container/home/index"
import Login from "./Container/Auth/login/index"
import Forget from "./Container/Auth/forget/index"
import Register from "./Container/Auth/Register/index"
import SearchBar from 'Component/searchBar';
import Auth from './Container/Auth/Auth';
import Tree from 'Component/Tree'
import  Recurcive from 'Component/recurcive'
import { useEffect, useState } from 'react';
import WithAuth from 'Hoc';
import { getAuthState } from 'Store/selector';
import { useDispatch, useSelector } from 'react-redux';
import { GET_USER_FETCH, userAction } from 'Store/Action/action';

function App() {

  let navigate=useNavigate();
  // const [fetching, setFetching] = useState(false)
  const { fetching, token } = useSelector(getAuthState);
  const dispatch= useDispatch
  useEffect(()=> {
      // todo: call current user if having token
      if (token) {
      
        dispatch(userAction.fetch());
        // navigate("/");
        // userAction.success()
        
      }
    }, [token]);


  return (
  


    fetching ? <div>Loading</div> : <div className="App">
      <Routes>
      
        <Route path="/" index element={<WithAuth><Home/></WithAuth>}/>
        <Route path="/searchBar" element={<SearchBar/>}/>
        <Route path="/tree" element={<Tree/>}/>
        <Route path="/recurcive" element={<Recurcive/>}/>
         <Route path="/auth" element={<Auth/>} >
          <Route index path='login' element={<Login/>}/>
          <Route path='forget' element={<Forget/>}/>
          <Route path='register' element={<Register/>}/>
         
         </Route>
      </Routes>
    </div>
  );
}

export default App;
