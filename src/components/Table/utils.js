export const getStatusStyle = (status) => {
   switch (status) {
      case "Luke Warm":
         return "w-fit py-1 px-2 rounded-xl text-[#026AA2] bg-[#F0F9FF]";
      case "Warm":
         return "w-fit py-1 px-2 rounded-xl text-[#865503] bg-[#FEF6E7]";
      case "Hot":
         return "w-fit py-1 px-2 rounded-xl text-[#036B26] bg-[#E7F6EC]";
      case "Cold":
         return "w-fit py-1 px-2 rounded-xl text-[#AD3307] bg-[#FFECE5]";
      default:
         return "";
   }
};

export const PAGE_COUNT = 9;
