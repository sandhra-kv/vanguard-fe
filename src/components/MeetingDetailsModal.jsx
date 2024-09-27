import { useState } from "react";

import Modal from "../components/Modal";
import VideoPlayer from "./VideoPlayer";
import Tab from "./Tab";
import { formatISODate } from "../utils/common";

const MeetingDetails = ({
  showModal,
  closeModal,
  name,
  date,
  duration,
  videoSrc,
}) => {
  const content = "<p>Hello <strong>World</strong>!</p>";

  const [selectedTab, setSelectedTab] = useState("Summary");

  const handleTab = (tab) => {
    setSelectedTab(tab);
  };

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
            </div>
          </div>
          {/* TODO: Replace with the chat component */}
          <div className="w-[545px]"></div>
        </div>
      </Modal>
    </div>
  );
};

export default MeetingDetails;
