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

export const getDate = (isoDate) => {
  const date = new Date(isoDate);
  const today = new Date();
  const yesterday = new Date();

  // Set yesterday's date
  yesterday.setDate(today.getDate() - 1);

  // Check if the date is today
  if (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  ) {
    return "Today";
  }

  // Check if the date is yesterday
  if (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  ) {
    return "Yesterday";
  }

  // If it's neither today nor yesterday, return the formatted date
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return formattedDate;
};

export const getTime = (isoDate) => {
  const date = new Date(isoDate);

  const timeOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  const formattedTime = date.toLocaleTimeString("en-US", timeOptions);

  return formattedTime;
};

export const groupByDate = (messages) => {
  const groupedMessages = {};

  messages.forEach((message) => {
    const formattedDate = getDate(message.createdAt); // Use the getDate function to format the date

    // If the date group doesn't exist, create an empty array
    if (!groupedMessages[formattedDate]) {
      groupedMessages[formattedDate] = [];
    }

    // Add the message to the corresponding date group
    groupedMessages[formattedDate].push(message);
  });

  return groupedMessages;
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
