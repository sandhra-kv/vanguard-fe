import { links } from "../constants/dummyData";

const Learning = () => {
   return (
      <section className="flex flex-col gap-4">
         <h2>Level-up your Skills</h2>
         <div className="flex flex-wrap gap-3">
            {links.map((embedId) => {
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
         <div className="flex flex-wrap gap-3">
            {/* {links.map((embedId) => {
               return ( */}
            {/* <iframe
               //  key={embedId}
               width="300"
               height="200"
               src={`https://givbuxuniversity.com/wp-content/uploads/2021/03/The-Psychology-of-Selling.pdf`}
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
               title="Embedded youtube"
            /> */}
            <object
               data="https://givbuxuniversity.com/wp-content/uploads/2021/03/The-Psychology-of-Selling.pdf"
               type="application/pdf"
               width="300"
               height="200"
            ><a href="https://givbuxuniversity.com/wp-content/uploads/2021/03/The-Psychology-of-Selling.pdf">Read</a></object>
            {/* );
            })} */}
         </div>
      </section>
   );
};

export default Learning;
