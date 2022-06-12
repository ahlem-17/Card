import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();
  const apiUrl = "https://jsonplaceholder.typicode.com/users/";

  const [userDetail, setUserDetail] = useState();

  useEffect(() => {
    async function getUser() {
      await fetch(apiUrl + id)
      .then((data) => data.json())
      .then((res) => {
        setUserDetail(res);
      })
      .catch((e) => {
        alert(e);
      });
    }
    getUser();
  }, [id]);
  return (
    <>
    {userDetail &&
      <div>
            <div className="card-detail">
              <p className="">-name: {userDetail.name}</p>
              <p className="">-username: {userDetail.username}</p>
              <p className="">-email: {userDetail.email}</p>
              <p className="">-phone: {userDetail.phone}</p>
              <p className="">-company: {userDetail.company.name}</p>
              <p className="">-website: {userDetail.website}</p>
              <p className="">-address: </p>
              <ul>
                <li className="">street: {userDetail.address.street}</li>
                <li className="">suite: {userDetail.address.suite}</li>
                <li className="">city: {userDetail.address.city}</li>
                <li className="">zipcode: {userDetail.address.zipcode}</li>
              </ul>
            </div>
          </div>
    }
    </>
  );
};
export default User;