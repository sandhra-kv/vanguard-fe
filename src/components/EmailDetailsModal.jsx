import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { apiCall } from "../services/axios";

const EmailDetailsModal = ({
  subject = "(no subject)",
  children,
  showModal,
  closeModal,
  id,
}) => {
  const [email, setEmail] = useState(null);
  const getEmail = async (id) => {
    try {
      const resp = await apiCall({
        method: "GET",
        url: `/email/${id}`,
        data: {},
      });

      return resp;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    (async () => {
      const resp = await getEmail(id);
      setEmail(resp);
    })();
  });

  return (
    <div>
      <Modal isOpen={showModal} onClose={closeModal}>
        <div className="border-b border-[#e7e7e7] py-6 px-9 flex flex-col gap-1 mb-8 w-[60vw] max-w-[60vw]">
          <div className="text-lg font-semibold">Email preview</div>
        </div>
        <div className="px-9 mt-2 max-w-[60vw]">
          <div class="text-grey_900 text-left break-words">
            {email?.subject}
          </div>
          <div className="mt-5">
            <div className="flex items-center gap-3">
              <img src="/images/lead.png" className="h-10 w-10" alt="avatar" />

              <div className="text-lg text-[#101928] font-medium">Sarah</div>
            </div>
          </div>
          <div className="mt-5 h-[50vh] overflow-y-auto">
            <div dangerouslySetInnerHTML={{ __html: email?.message }} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EmailDetailsModal;
