import React, { useEffect, useState } from "react";

import Table from "../components/Table";
import Button from "../components/Button";
import MeetingDetails from "../components/MeetingDetailsModal";
import { header, rows } from "../constants/dummyData";
import { apiCall } from "../services/axios";
import LeadActivity from "../components/LeadActivity";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const getData = async () => {
    try {
      const resp = await apiCall({
        method: "GET",
        url: `/users`,
        data: {},
      });

      return resp;
    } catch (e) {
      console.log(e);
    }
  };

  const [lead, setLead] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await getData();

      if (resp) {
        console.log(resp);
      }
    })();
  }, []);

  return (
    <div>
      {/* <MeetingDetails
        showModal={showModal}
        closeModal={closeModal}
        name="Analese Jonathen"
        date="2024-09-15T15:00:00.000Z"
        duration="3 hours 57 minutes"
        videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
      /> */}

      <div className="flex justify-between my-3">
        <h1 className="text-2xl font-semibold">Hot leads</h1>
        <div className="flex flex-row gap-3">
          <Button
            onClick={openModal}
            label="Export CSV"
            variant="secondary"
            icon="/icons/download.svg"
          />
          <Button
            onClick={() => {}}
            label="Create Campaigns"
            variant="primary"
            icon="/icons/rounded-plus.svg"
          />
        </div>
      </div>
      <Table header={header} rows={rows} onSelect={setLead} />
      <LeadActivity isOpen={!!lead} lead={lead} onClose={() => setLead(null)} />
    </div>
  );
};

export default Dashboard;
