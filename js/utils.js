export const formatDate = (date) => {
  const dateString = date.toDateString();
  const monthAndYearDate = dateString.substring(dateString.indexOf(' ') + 1);
  const dateWithComma = monthAndYearDate.replace(/(\s)(\d{4})/, ', $2');
  return dateWithComma;
};
