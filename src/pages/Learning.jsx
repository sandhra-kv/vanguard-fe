import { docLinks, videoLinks } from "../constants/dummyData";

const Learning = () => {
   return (
      <section className="flex flex-col gap-4">
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
                  <div key={index} className="relative flex flex-col gap-1 items-center">
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
   );
};

export default Learning;
