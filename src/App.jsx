import Nav from "./Components/Nav";
import Routecomponent from "./Routes/Routecomponent";
import axios from "./Utils/axios";
import { useState } from "react";

const App = () => {
  const [users, setusers] = useState([]);
  const getusers = async () => {
    try {
      const { data } = await axios.get("/users");
      setusers(data);
      console.log(users);
    } catch (error) {
      console.log(err);
    }
  };

  // const getposts = async () => {
  //   try {
  //     const { data } = await axios.get("/posts");
  //     console.log(data);
  //   } catch (error) {
  //     console.log(err);
  //   }
  // };


  return (
    <>
      <Nav />
      <Routecomponent />
      <button className="px-2 py-2 rounded-md mb-3 bg-red-400" onClick={getusers}>
        Getusers
      </button>
      <hr />
      {/* <button className="px-2 py-2 rounded-md bg-red-400" onClick={getposts}>
        Getposts
      </button> */}
      { users.length === 0 ? "is loading...." : users.map((user, i) => {
      return (
        <div key={i} className="bg-slate-300 p-3 mb-2 mr-2 inline-block">
          <h1>Name: {user.name}</h1>
          <small>Email:{user.email} </small>
        </div>
      );
    })}
    </>
  );
};

export default App;
