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
