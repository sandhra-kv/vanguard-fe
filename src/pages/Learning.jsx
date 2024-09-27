import { docLinks, videoLinks } from "../constants/dummyData";
import { useEffect, useRef, useState } from "react";
import { apiCall } from "../services/axios";
import pdf_icon from "../assets/pdfIcon.svg";

const Learning = () => {
  const [search, setSearch] = useState("");
  const [threadId, setThread] = useState("");

  const intervalId = useRef(null);

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
    if (threadId)
      intervalId.current = setInterval(() => {
        console.log("polling");
      }, 1000);

    return () => {
      clearInterval(intervalId.current);
      console.log("cleared");
    };
  }, [threadId]);

  useEffect(() => {
    (async () => {
      const resp = await getThreads();

      if (resp) {
        console.log(resp);
        setThread(resp);
      }
    })();
  }, []);

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
        <div className="flex flex-wrap ">
            {docLinks.map((link, index) => {
               return (
                  //   <div key={index} className="relative flex flex-col gap-1 items-center">
                  //      <iframe
                  //         key={link}
                  //         width="300"
                  //         height="200"
                  //         src={link}
                  //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  //         allowFullScreen
                  //         title="Embedded Pdf"

                  //      />
                  <a key={index} href={link.url} target="_blank" rel="noreferrer" className="relative">
                     <img src={pdf_icon} alt="pdf link" className="size-40" />
                     <span className="absolute top-16 left-6 text-sm w-[110px] h-[42px] text-[#505BC5] font-semibold text-center rounded bg-white overflow-hidden">{link.name}</span>
                  </a>
                  //   </div>
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
