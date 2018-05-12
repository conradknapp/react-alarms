export const formatDate = date => {
  const day = new Date(date).toLocaleDateString();
  const time = new Date(date).toLocaleTimeString();
  return `${time} - ${day}`;
};