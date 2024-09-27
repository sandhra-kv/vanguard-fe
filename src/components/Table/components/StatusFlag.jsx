import { getStatus } from "../../../utils/common";

const StatusFlag = ({ status }) => {
  return (
    <div
      className={`${getStatus(status).className} w-fit py-1 px-2 rounded-xl`}
    >
      {getStatus(status).statusText}
    </div>
  );
};
export default StatusFlag;
