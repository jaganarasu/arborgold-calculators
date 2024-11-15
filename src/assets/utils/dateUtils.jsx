export const  calculateDateDifference = (start, end, includeEndDay = false) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
  
    if (includeEndDay) {
      endDate.setDate(endDate.getDate() + 1);
    }
  
    const milliseconds = endDate - startDate;
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const weeks = Math.floor(days / 7);
    const remainderDays = days % 7;
  
    return { days, weeks, remainderDays, hours };
  };
  