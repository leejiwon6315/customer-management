import React from "react";

const Customer = ({ image, name, id, birthday, school }) => {
  return (
    <div>
      <CustomerProfile image={image} name={name} id={id} />
      <CustomerInfo birthday={birthday} school={school} />
    </div>
  );
};

const CustomerProfile = ({ image, name, id }) => {
  return (
    <div>
      <img src={image} alt="profile" />
      <h1> {name} </h1>
      <h1>{id}</h1>
    </div>
  );
};

const CustomerInfo = ({ birthday, school }) => {
  return (
    <div>
      <p> {birthday} </p>
      <p> {school} </p>
    </div>
  );
};
export default Customer;
