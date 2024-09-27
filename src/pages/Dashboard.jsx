import Table from "../components/Table";
import { header, rows } from "../constants/dummyData";

const Dashboard = () => {
   //  const [showModal, setShowModal] = useState(false);

   //  const openModal = () => {
   //     setShowModal(true);
   //  };
   //  const closeModal = () => {
   //     setShowModal(false);
   //  };

   return (
      <div>
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

         <h1 className="text-2xl font-medium">Hot leads</h1>
         <Table header={header} rows={rows} />
      </div>
   );
};

export default Dashboard;
