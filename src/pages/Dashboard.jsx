import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/Button";
import MeetingDetails from "../components/MeetingDetailsModal";

const Dashboard = () => {
  const [post, setPost] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };


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
      {/* <div className="flex flex-row gap-2">
      <Button onClick={openModal} label="Download" variant="secondary" />
      <Button onClick={openModal} label="Create Campaigns" variant="primary" icon="/icons/rounded-plus.svg" />
      </div>
      <MeetingDetails
        showModal={showModal}
        closeModal={closeModal}
        name="Analese Jonathen"
        date="2024-09-15T15:00:00.000Z"
        duration="3 hours 57 minutes"
        videoSrc="https://www.w3schools.com/html/mov_bbb.mp4" /> */}
    </div>
  );
};

export default Dashboard;
