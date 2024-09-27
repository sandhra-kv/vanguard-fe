import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
      setPost(data?.data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="pb-10">Axios testing</p>
      {post?.map((post) => (<div>{post?.name} --------- {post?.email}</div>))}
    </div>
  );
};

export default Dashboard;
