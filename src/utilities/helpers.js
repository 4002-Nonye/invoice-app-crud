// getting users prefered theme
export default function getInitialTheme() {
    
  const savedTheme = localStorage.getItem("theme");
  return savedTheme ? savedTheme : "dark";
}

// import { useEffect, useState } from "react"

// const HandleTheme =()=>{
//     const [theme, setTheme] = useState(getInitialTheme())

//     //store current theme to local storage
//     useEffect(()=>{
//         localStorage.setItem('theme',theme)
//     },[theme])

//     const getInitialTheme = ()=>{
//         const savedTheme = localStorage.getItem('theme');
//         return savedTheme ? savedTheme : 'dark';

//     }

//     useEffect(() => {
//         if (theme === 'dark') {
//           document.body.classList.add('dark');
//         } else {
//           document.body.classList.remove('dark');
//         }
//       }, [theme]);
//        //change theme value
//    export function switchTheme() {
//     setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
//   }

// }

//   export default theme
