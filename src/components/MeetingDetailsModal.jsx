import { useEffect, useRef, useState } from "react";

import Modal from "../components/Modal";
import VideoPlayer from "./VideoPlayer";
import Tab from "./Tab";
import { formatISODate } from "../utils/common";
import ModalAnalytics from "./ModalAnalytics";
import { TimelineData } from "../constants/dummyData";
import Stepper from "./Stepper";
import { apiCall } from "../services/axios";

const MeetingDetails = ({
  showModal,
  closeModal,
  name,
  date,
  duration,
  videoSrc,
}) => {
  const intervalId = useRef(null);
  const content = "<p>Hello <strong>World</strong>!</p>";

  const [selectedTab, setSelectedTab] = useState("Summary");
  const [search, setSearch] = useState("");
  const [thread, setThread] = useState("");
  const [data, setData] = useState([]);

  const handleTab = (tab) => {
    setSelectedTab(tab);
  };

  const sendMessage = async () => {
    if (thread && search)
      try {
        const message = search;
        setSearch("");
        const resp = await apiCall({
          method: "POST",
          url: `/chat`,
          data: {
            thread_id: thread,
            message: message,
            senderName: "Ram Rao",
          },
          isAI: true,
        });
        return resp;
      } catch (e) {
        console.log(e);
      }
  };

  const getData = async () => {
    try {
      const resp = await apiCall({
        method: "GET",
        url: `/chats/threads?subjectId=${videoSrc}`,
        data: {},
      });

      return resp;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      if (videoSrc) {
        const resp = await getData();

        console.log(resp.records?.[0]?.id);

        if (resp.records?.[0]?.id) {
          setThread(resp.records?.[0]?.id);
        }
      }
    })();
  }, []);

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

  return (
    <div>
      <Modal isOpen={showModal} onClose={closeModal}>
        <div className="border-b border-[#e7e7e7] py-6 px-9 flex flex-col gap-1">
          <div className="text-lg font-semibold">Meeting with {name}</div>
          <div className="flex flex-row gap-2 items-center">
            <div className="font-normal text-lg text-[#8DA0B1]">
              {formatISODate(date)}
            </div>
            <div className="w-[6px] h-[6px] rounded-full bg-[#D9D9D9]" />
            <div className="font-normal text-lg text-[#8DA0B1]">{duration}</div>
          </div>
        </div>
        <div className="py-6 px-9 flex flex-row gap-7">
          <div className="flex flex-col gap-4">
            <VideoPlayer src={videoSrc} poster="" width="640" height="360" />
            <div className="h-[312px]">
              <Tab
                tabs={["Summary", "Transcript", "Analytics"]}
                selectedTab={selectedTab}
                onSelect={handleTab}
              />
              {selectedTab === "Summary" && (
                <div
                  dangerouslySetInnerHTML={{ __html: content }}
                  className="p-6"
                />
              )}
              {selectedTab === "Analytics" && (
                <ModalAnalytics timelineData={TimelineData} />
              )}
            </div>
          </div>
          {/* TODO: Replace with the chat component */}
          <div className="max-h-[70dvh] overflow-y-auto w-[545px] bg-[#F7F8FF] shadow-md rounded-lg relative">
            <div className="h-[calc(100%-80px)] overflow-y-auto px-9 pt-4">
              <Stepper steps={data} />
            </div>
            <div className="absolute bottom-3 px-5 py-2 w-full">
              <div className="relative w-full flex">
                <input
                  type="text"
                  placeholder="Type here..."
                  className="bg-white h-[52px] rounded-lg pl-4 pr-[56px] py-2.5 w-full border-1 outline-0 border-[#505BC566]"
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
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MeetingDetails;
