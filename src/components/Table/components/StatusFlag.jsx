import { getStatusStyle } from "../utils";

const StatusFlag = ({ status }) => {
   return <div className={getStatusStyle(status)}>{status}</div>;
};
export default StatusFlag