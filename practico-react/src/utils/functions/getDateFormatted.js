export const getDateFormatted = () => {
   const fill = (value) => (
      (value.toString().length < 2)
         ?  `0${value}`
         : value
   );

   const date = new Date;
   const day = fill(date.getDate());
   const month = fill(date.getMonth() + 1);
   const year = date.getFullYear();

   const formattedDate = `${day}.${month}.${year}`;
   return formattedDate;
}