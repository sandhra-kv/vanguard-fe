export const formatISODate = (isoDate) => {
  const date = new Date(isoDate); // Parse the ISO string into a Date object

  const dateOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  };

  const timeOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  const formattedDate = date.toLocaleDateString("en-GB", dateOptions); // "15/09/24"
  const formattedTime = date.toLocaleTimeString("en-US", timeOptions); // "3:00 PM"

  return `${formattedDate} - ${formattedTime}`;
};

export const getStatus = (status) => {
  let className = "";
  let statusText = "";

  switch (status) {
    case "hot":
      className = "bg-[#E7F6EC] text-[#036B26]";
      statusText = "Hot";
      break;
    case "warm":
      className = "bg-[#FEF6E7] text-[#865503]";
      statusText = "Warm";
      break;
    case "luke_warm":
      className = "bg-[#F0F9FF] text-[#026AA2]";
      statusText = "Luke Warm";
      break;
    case "cold":
      className = "bg-[#FFECE5] text-[#AD3307]";
      statusText = "Cold";
      break;
    default:
  }
  return { className, statusText };
};
