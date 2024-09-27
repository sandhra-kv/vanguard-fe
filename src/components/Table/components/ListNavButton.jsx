import cx from "classnames";
import arrow_icon from "../../../assets/arrow.svg";
const ListNavButton = (props) => {
   const { type, value, onClick, setActive } = props;

   return (
      <button
         className={cx(
            "group flex min-w-fit items-center py-1 px-2  justify-center rounded-lg  text-sm ",
            { " font-medium border shadow-sm": type },
            { "focus:bg-[#EDF3FF]  focus:text-[#414EC6] shadow-none ": Number(value) },
            { "bg-[#EDF3FF] text-[#414EC6] border-[#414EC6]": setActive },
            { "bg-white text-[#98A2B3]": !setActive && !type }
         )}
         onClick={onClick}
      >
         {value ? (
            value
         ) : type === "prev" ? (
            <span className="flex gap-2">
               <img src={arrow_icon} alt="previous" />
               Previous
            </span>
         ) : (
            <span className="flex gap-2">
               Next
               <img src={arrow_icon} alt="next" className="rotate-180" />
            </span>
         )}
      </button>
   );
};

export default ListNavButton;
