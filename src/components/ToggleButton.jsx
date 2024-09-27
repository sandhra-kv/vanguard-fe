import { twMerge } from "tailwind-merge";

const ToggleSwitch = ({
   isChecked = false,
   onClick,
   customStyle = "#2A374E",
   customContainerStyle = "",
   disabled = false,
}) => (
   // eslint-disable-next-line jsx-a11y/label-has-associated-control
   <label
      className={twMerge("relative inline-flex cursor-pointer items-center disabled:opacity-0", customContainerStyle)}
   >
      <input
         type="checkbox"
         value=""
         className="peer sr-only"
         checked={isChecked}
         onChange={onClick}
         disabled={disabled}
      />
      <div
         className={twMerge(
            `peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white`,
            customStyle
         )}
      />
   </label>
);

export default ToggleSwitch;
