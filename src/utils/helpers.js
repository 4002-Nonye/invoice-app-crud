export function getInitialTheme() {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme ? savedTheme : "dark";
}

export function formatDate(date) {
  if (!date) return;

  // check to see if the date has already been formatted
  if (typeof date === "string") return date;
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return formattedDate;
}

export function addDaysToDate(dateStr, days) {
  const date = new Date(dateStr);

  date.setDate(date.getDate() + days);
  return formatDate(date);
}

export function formatWord(num, word) {
  if (num <= 1) return word;
  return `${word}s`;
}
