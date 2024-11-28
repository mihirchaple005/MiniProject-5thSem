export const formatTime = (inputDate: Date | string): string => {
  const date = new Date(inputDate);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());

  return `${hours}:${minutes}`;
};

// helper function to pad single-digit numbers with a leading zero
function padZero(number: number): string {
  return number.toString().padStart(2, "0");
}