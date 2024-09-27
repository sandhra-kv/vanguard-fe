import Modal from "../components/Modal";
import { formatISODate } from "../utils/common";
import VideoPlayer from "./VideoPlayer";

const MeetingDetails = ({
  showModal,
  closeModal,
  name,
  date,
  duration,
  videoSrc,
}) => {
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
            {/* TODO: Replace with the tabs component */}
            <div className="h-[312px]"></div>
          </div>
          {/* TODO: Replace with the chat component */}
          <div className="w-[545px]"></div>
        </div>
      </Modal>
    </div>
  );
};

export default MeetingDetails;
