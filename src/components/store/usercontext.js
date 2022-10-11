import { createContext, useContext, useEffect, useState } from "react";
import http from "../http";
import Moment from 'moment'
const UserContext = createContext("");
export const useUserContext = () => useContext(UserContext);
export const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({
    name: "",
    email: "",
    profession: "",
    age: "",
    gender: "",
    date: "",
  });
  const [singleUserId, setSingleUserId] = useState(null);
  const getFormData = async () => {
    const response = await http.get("api/registers");
    const array = response.data.data;
    console.log(array);
    setUsers(array);
  };
  useEffect(() => {
    getFormData();
  }, []);

  // Select the particular  user with id
  const selectUser = (id) => {
      // console.log(id);
      users.map((user) => {
        // console.log(user);
        // console.log(user.id);
        if (user.id === id) {
          // console.log(id);
          console.log(user.attributes);
          setSingleUser({
            name: user.attributes.name,
            email: user.attributes.email,
            profession: user.attributes.profession,
            age: user.attributes.age,
            gender: user.attributes.gender,
            date: user.attributes.date,
          });
          setSingleUserId(id);
          console.log(singleUser);
        }
      });
  };
  const addFormData = async (values) => {
    console.log(values);
    
    const data = JSON.stringify({
      data: {
        name: values.name,
        email: values.email,
        profession: values.profession,
        age: values.age,
        gender: values.gender,
        date: values.doB
      },
    });
    const response = await fetch("http://localhost:1337/api/registers", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if(!response){
      console.log(response)
    }
    // const resData = await response.json();
    // console.log(resData);
  };
     async function updateUser(values) {
    console.log(singleUserId);
    console.log(values);
    const data = JSON.stringify({
      data: {
        name: values.name,
        email: values.email,
        profession: values.profession,
        age: values.age,
        gender: values.gender,
        date: new Date(values.doB),
      },
    });
        const response = await fetch(
          `http://localhost:1337/api/registers/${singleUserId}`,
          {
            method: "PUT",
            body: data,
            headers: {
              "Content-Type": "application/json",
            },
          }  
        )
        ;
        const result = await response.json();
        console.log(result);
        getFormData();
        if (!response) {
          console.log(response);
        } 
  }
  async function deleteUser(id) {
    const response = await fetch(`http://localhost:1337/api/registers/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // const result = await response.json();
    // console.log(result);
    getFormData();
    if (!response) {
      console.log(response);
    }
  }
  const value = {
    addFormData,
    setUsers,
    users,
    updateUser,
    deleteUser,
    selectUser,
    singleUser,
    setSingleUserId,
    singleUserId
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};