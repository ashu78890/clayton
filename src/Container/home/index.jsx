import React, { useEffect, useState }  from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "Store/Action/action";
import PacmanLoader from "react-spinners/PacmanLoader";
import { userLoginAction } from "Store/Action/action";
import { userHistoryAction } from "Store/Action/HistoryAction";
import { getOrders } from "Store/selector";




function Home(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
 const[loading,setLoading]= useState(false);
 const { data } = useSelector(getOrders);

  useEffect(() => {
    
    // dispatch(userAction.fetch());
    setLoading (true)
    setTimeout(()=>{
      setLoading(false)
    },4000)
      dispatch(userHistoryAction.fetch({
        history: false,
        pageNumber: 0
      }));
    
  }, []);


  const handleLogout = () => {
    dispatch(userLoginAction.logout());
    navigate("/Auth/Login")
  }

  return (
    
    <div className="Msain">
      
      <header>
        <Link to="/">
          <img src="/Claytons.png" className="logo-nav" alt="" />
        </Link>

        <div className="dropdown">
          <button   className="dropbtn" 
          onClick={handleLogout}>Logout</button>
        </div>
      </header>
      <div className="data">
      <nav className="sidebar">
        <Link className="link" to="/">Design & Quote</Link>
        <button className="history" type="button" disabled onClick={() => {dispatch(userHistoryAction.fetch());}}>Order Managment</button>
      </nav>
        {/* <div className="loader"> */}
      { 
        loading ?
        <PacmanLoader color={"#F5A623"} loading={loading}  size={22} />
        :
        <div className="Content">
         

            
            
              <table border="1">
              <tr>
              <td>Date</td>
              <td>Quote No.</td>
              <td>Name</td>
              <td>Emaile</td>
              <td>Contact</td>
              <td>Amount</td>
              <td>Last Updated by</td>
              </tr>
              {
              data && data.map((item)=> (
              <tr>
              <td>{item.orderDate}</td>
              <td>{item.orderTxId}</td>
              <td> {item.firstName} {item.lastName} </td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
              <td>{item.amount}</td>
              <td>{item.lastUpdatedBy}</td></tr>
             
            
          ))
          } </table>
       </div>
      
      }
      </div>
      </div>
      
    
  );
}


export default Home;
