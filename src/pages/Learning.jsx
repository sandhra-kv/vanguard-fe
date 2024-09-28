import { docLinks, videoLinks } from "../constants/dummyData";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { apiCall } from "../services/axios";
import pdf_icon from "../assets/pdfIcon.svg";
import Stepper from "../components/Stepper";

const Learning = () => {
   const [search, setSearch] = useState("");
   const [threadId, setThread] = useState("");
   const [data, setData] = useState([]);
   const [test, setTest] = useState(videoLinks);

   const intervalId = useRef(null);

   const extractYouTubeIds = useCallback((text) => {
      const youtubeRegex =
         /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/g;

      let match;
      const ids = [];
      while ((match = youtubeRegex.exec(text)) !== null) {
         ids.push(match[1]); // match[1] contains the video ID
      }
      // console.log(ids);
      return ids;
   }, []);
   console.log(test);

   const sendMessage = async () => {
      if (threadId && search)
         try {
            const resp = await apiCall({
               method: "POST",
               url: `/chat`,
               data: {
                  thread_id: threadId,
                  message: search,
                  senderName: "Ram Rao",
               },
               isAI: true,
            });
            setSearch("");
            return resp;
         } catch (e) {
            console.log(e);
         }
   };

   const getThreads = async () => {
      try {
         const resp = await apiCall({
            method: "GET",
            url: `/chats/threads?subjectId=learning`,
            data: {},
         });

         return resp;
      } catch (e) {
         console.log(e);
      }
   };

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
    let ids = []
      data?.map((item) => {
         ids = [...ids, ...extractYouTubeIds(item?.message)];
      });
      setTest(ids)
   }, [data.length]);

   useEffect(() => {
      if (threadId)
         intervalId.current = setInterval(async () => {
            const res = await getChat(threadId);
            if (res?.records) setData(res?.records);
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
            setThread(resp?.records[0]?.id);
         }
      })();
   }, []);

   return (
      <div className="flex p-5 h-full">
         <section className="flex flex-col h-[calc(100vh-85px)] overflow-y-auto gap-4">
            <h1 className="text-2xl font-semibold">Learning</h1>
            <h1 className="text-lg font-lg">Level-up your Skills</h1>
            <div className="flex flex-wrap gap-3">
               {test.map((embedId) => {
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
                        <span className="absolute top-16 left-6 text-sm w-[110px] h-[42px] text-[#505BC5] font-semibold text-center rounded bg-white overflow-hidden">
                           {link.name}
                        </span>
                     </a>
                     //   </div>
                  );
               })}
            </div>
         </section>
         <div className="h-full min-w-[529px] w-[529px] bg-white shadow-md rounded-lg relative">
            <div className="h-[calc(100%-80px)] overflow-y-auto px-9 pt-4">
               <Stepper steps={data} extractYouTubeIds={extractYouTubeIds} />
            </div>
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
