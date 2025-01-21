import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorege, SetLocalStorege } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  // localStorage.clear();
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      // console.log(user);
      setUser(user.role);
      setLoggedInUserData(user.data);
    }

  }, [])

  const handlelogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser('admin');
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }))
      }
    } else {
      alert("Invalid Credentials");
    }

  }



  return (
    <>
      {!user ? <Login handlelogin={handlelogin} /> : ""}
      {user == "admin" ? <AdminDashboard changeUser={setUser} /> : (user == "employee" ? <EmployeeDashboard data={loggedInUserData} changeUser={setUser} /> : null)}
    </>

  )
}

export default App
