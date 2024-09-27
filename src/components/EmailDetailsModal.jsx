import React from "react";
import Modal from "./Modal";

const EmailDetailsModal = ({
  subject = "(no subject)",
  children,
  showModal,
  closeModal
}) => {
  return (
    <div>
      <Modal isOpen={showModal} onClose={closeModal}>
        <div className="border-b border-[#e7e7e7] py-6 px-9 flex flex-col gap-1 mb-8 w-[50dvw]">
          <div className="text-lg font-semibold">Email preview</div>
        </div>
        <div className="px-9 mt-2">
          <div class="text-grey_900 text-left break-words">{subject}</div>
          <div className="mt-5">
            <div className="flex items-center gap-3">
              <img src="/images/lead.png" className="h-10 w-10" alt="avatar" />

              <div className="text-lg text-[#101928] font-medium">Sarah</div>
            </div>
          </div>
          <div className="mt-5">{children}</div>
        </div>
      </Modal>
    </div>
  );
};

export default EmailDetailsModal;
