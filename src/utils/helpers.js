export function getInitialTheme() {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme ? savedTheme : "dark";
}

export function formatDate(date) {
 const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return formattedDate
}
