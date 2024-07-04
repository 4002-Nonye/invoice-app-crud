import { Link, useNavigate } from "react-router-dom";

function Button({ children, type, className }) {
  const baseButtonStyle =
    "text-md px-4 md:px-6 py-2 md:py-3 font-bold  rounded-full transition ease-linear  duration-500";

  const styles = {
    edit: `${baseButtonStyle} text-lightblue-100 bg-white-300 hover:bg-darkblue-100 dark:bg-darkblue-200 dark:text-white-200`,
    delete: `${baseButtonStyle} text-white-100 bg-red-200 hover:bg-red-100 `,
    paid: `${baseButtonStyle} text-white-100 bg-lightblue-300 hover:bg-lightblue-200`,
    discard: `${baseButtonStyle}  bg-darkblue-100 bg-opacity-35 hover:bg-opacity-100 dark:bg-darkblue-100 dark:text-grey-300 `,
    cancel: `${baseButtonStyle}  bg-darkblue-100 bg-opacity-35 hover:bg-opacity-100 dark:bg-darkblue-300 dark:text-white-200 `,
    add:`${baseButtonStyle} bg-darkblue-100 bg-opacity-35 hover:bg-opacity-100 text-lightblue-100 text-lg  w-full mt-7 dark:bg-darkblue-400 dark:text-white-200`,
    draft: `${baseButtonStyle} bg-darkblue-300 hover:bg-darkblue-500 text-grey-100  dark:bg-darkblue-200 dark:hover:bg-darkblue-400 dark:text-white-200`,
    submit: `${baseButtonStyle}  text-white-100 bg-lightblue-300 hover:bg-lightblue-200 `
  };

  const navigate = useNavigate();
  if (type === "link")
    return (
      <Link className={className} onClick={() => navigate(-1)}>
        {children}
      </Link>
    );

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
