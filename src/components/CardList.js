import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../css/CardList.css";


const CardList = () => {
  const [users, setUsers] = useState();

  const apiUrl = "https://jsonplaceholder.typicode.com/users/";

  useEffect(() => {
    async function getUser() {
      await fetch(apiUrl)
        .then((data) => data.json())
        .then((res) => {
          setUsers(res);
        })
        .catch((e) => alert(e));
    }
    getUser();
  }, []);

  return (
    <>
  
      <div className="container">
        <h1>CARD LIST</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      
          {users &&
            users.map((user, index) => <Card key={index} user={user} />)}
         </div>
        </div>
    
    
    </>
  );
};

export default CardList;