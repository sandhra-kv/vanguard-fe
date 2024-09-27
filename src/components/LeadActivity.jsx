import React, { useEffect, useState, useRef } from "react";
import SidePane from "./SidePane";
import Stepper from "./Stepper";
import Tab from "./Tab";
import ActivityInsights from "./ActivityInsights";
import StatusFlag from "./Table/components/StatusFlag";
import { apiCall } from "../services/axios";

const LeadActivity = ({ lead, isOpen, className = "", onClose, openModal }) => {
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState("Activity Log");
  const [data, setData] = useState([]);
  const [thread, setThread] = useState("");

  const intervalId = useRef(null);

  const sendMessage = () => {
    if (search.trim().length) console.log(search);
  };

  const getData = async () => {
    try {
      const resp = await apiCall({
        method: "GET",
        url: `/chats/threads?subjectId=${lead?.id}`,
        data: {},
      });

      return resp;
    } catch (e) {
      console.log(e);
    }
  };

  const getChat = async (id) => {
    try {
      const resp = await apiCall({
        method: "GET",
        url: `/chats/${id}`,
        data: {},
      });

      return resp;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (thread)
      intervalId.current = setInterval(async () => {
        const res = await getChat(thread);
        if (res?.records) setData(res?.records);
      }, 1000);

    return () => {
      clearInterval(intervalId.current);
      console.log("cleared");
    };
  }, [thread]);

  useEffect(() => {
    (async () => {
      if (lead?.id) {
        const resp = await getData();

        if (resp.records?.[0]?.id) {
          setThread(resp.records?.[0]?.id);
        }
      }
    })();
  }, []);

  return (
    <SidePane className={className} isOpen={isOpen} onClose={onClose}>
      <div className="px-9 py-6 flex w-full items-start justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/lead.png" className="h-10 w-10" alt="avatar" />
          <div>
            <div className="flex gap-2 items-center">
              <div className="text-lg text-[#101928] font-medium">
                {lead?.name}
              </div>
              <StatusFlag status={lead?.status} />
            </div>
            <div className="text-lg text-[#475367]">{lead?.jobTitle}</div>
          </div>
        </div>
        <img
          role="presentation"
          className="cursor-pointer"
          onClick={onClose}
          src="/icons/close.svg"
          alt="close"
        />
      </div>
      <Tab
        tabs={["Activity Log", "Insights"]}
        selectedTab={selectedTab}
        onSelect={setSelectedTab}
      />
      <div className="h-[calc(100%-150px)] relative">
        {selectedTab === "Activity Log" ? (
          <>
            <div className="h-[calc(100%-80px)] overflow-y-auto px-9 pt-4">
              <Stepper steps={data} openModal={openModal} />
            </div>
            <div className="absolute bottom-4 px-9 w-full">
              <div className="relative w-full flex">
                <input
                  type="text"
                  placeholder="Type here..."
                  className="bg-[#F6F6F6] h-[52px] rounded-lg pl-4 pr-[56px] py-2.5 w-full border-0 outline-0"
                  value={search}
                  onChange={(evt) => setSearch(evt.target.value)}
                />

                <img
                  role="presentation"
                  src="/icons/send.svg"
                  alt="send"
                  onClick={sendMessage}
                  className="absolute right-4 top-2.5 cursor-pointer"
                />
              </div>
            </div>
          </>
        ) : (
          <ActivityInsights lead={lead} />
        )}
      </div>
    </SidePane>
  );
};

export default LeadActivity;
