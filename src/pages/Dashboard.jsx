import React, { useEffect, useState } from "react";

import Table from "../components/Table";
import Button from "../components/Button";
import MeetingDetails from "../components/MeetingDetailsModal";
import EmailDetailsModal from "../components/EmailDetailsModal";
import { header } from "../constants/dummyData";
import { apiCall } from "../services/axios";
import LeadActivity from "../components/LeadActivity";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const [lead, setLead] = useState(null);
  const [leads, setLeads] = useState(null);
  const [emailid, setEmailId] = useState("");

  const openModal = (type, id = "") => {
    console.log(type);
    if (type === "email_sent") {
      setEmailId(id);
      setShowEmailModal(true);
    } else setShowModal(true);
  };

  const getData = async () => {
    try {
      const resp = await apiCall({
        method: "GET",
        url: `/campaign/leads`,
        data: {},
      });

      return resp;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      const resp = await getData();

      if (resp) {
        setLeads(resp.records);
      }
    })();
  }, []);

  return (
    <div className="p-5">
      {showModal && (
        <MeetingDetails
          showModal={showModal}
          closeModal={closeModal}
          name="Analese Jonathen"
          date="2024-09-15T15:00:00.000Z"
          duration="3 hours 57 minutes"
          videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
        />
      )}
      {showEmailModal && (
        <EmailDetailsModal
          showModal={showEmailModal}
          closeModal={() => setShowEmailModal(false)}
          id={emailid}
        />
      )}

      <div className="flex justify-between my-3">
        <h1 className="text-2xl font-semibold">Hot leads</h1>
        <div className="flex flex-row gap-3">
          <Button
            onClick={() => {}}
            label="Export CSV"
            variant="secondary"
            icon="/icons/download.svg"
          />
          <Button
            onClick={() => navigate("/create-campaign")}
            label="Create Campaigns"
            variant="primary"
            icon="/icons/rounded-plus.svg"
          />
        </div>
      </div>
      <Table header={header} rows={leads} onSelect={setLead} />
      {!!lead && (
        <LeadActivity
          isOpen={!!lead}
          lead={lead}
          onClose={() => setLead(null)}
          openModal={openModal}
        />
      )}
    </div>
  );
};

export default Dashboard;
