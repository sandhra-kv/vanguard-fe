import { docLinks, videoLinks } from "../constants/dummyData";
import { useEffect, useState } from "react";
import { apiCall } from "../services/axios";
import pdf_icon from "../assets/pdfIcon.svg";

const Learning = () => {
  const [search, setSearch] = useState("");

  const sendMessage = () => {
    if (search) console.log(search);
  };

  const getThreads = async () => {
    try {
      const resp = await apiCall({
        method: "GET",
        url: `/chats/threads`,
        data: {},
      });

      return resp;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      const resp = await getThreads();

      if (resp) {
        console.log(resp);
        setInterval(() => {
          console.log(resp);
        }, 1000);
      }
    })();
  });

  return (
    <div className="flex p-5 h-full">
      <section className="flex flex-col h-[calc(100vh-85px)] overflow-y-auto gap-4">
        <h1 className="text-lg font-lg">Level-up your Skills</h1>
        <div className="flex flex-wrap gap-3">
          {videoLinks.map((embedId) => {
            return (
              <iframe
                key={embedId}
                width="300"
                height="200"
                src={`https://www.youtube.com/embed/${embedId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            );
          })}
        </div>
        <h1 className="text-lg font-lg">Have a quick read..!!</h1>
        <div className="flex flex-wrap gap-3">
          {docLinks.map((link, index) => {
            return (
              <div
                key={index}
                className="relative flex flex-col gap-1 items-center"
              >
                <iframe
                  key={link}
                  width="300"
                  height="200"
                  src={link}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded Pdf"
                />
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute left-0 bottom-0 bg-[#505BC5] bg-opacity-85 text-white rounded-md px-2 py-0.5 text-sm "
                >
                  Read
                </a>
              </div>
            );
          })}
        </div>
      </section>
      <div className="h-full w-[529px] bg-white shadow-md rounded-lg relative">
        <div className="absolute bottom-4 px-5 w-full">
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
      </div>
    </div>
  );
};

export default Learning;
