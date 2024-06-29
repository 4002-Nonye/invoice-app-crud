import { Link, useNavigate } from "react-router-dom";

function Button({ children, type, className }) {
  const baseButtonStyle =
    "text-md px-6 py-3 font-bold  rounded-full transition ease-linear  duration-500";

  const styles = {
    edit: `${baseButtonStyle} text-lightblue-100 bg-white-300 hover:bg-darkblue-100 `,
    delete: `${baseButtonStyle} text-white-100 bg-red-200 hover:bg-red-100 `,
    paid: `${baseButtonStyle} text-white-100 bg-lightblue-300 hover:bg-lightblue-200`,
    cancel: `${baseButtonStyle}`,
    discard: `${baseButtonStyle}`,
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
