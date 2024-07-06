
export function getInitialTheme() {
    
  const savedTheme = localStorage.getItem("theme");
  return savedTheme ? savedTheme : "dark";
}

