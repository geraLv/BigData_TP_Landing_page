import { Link } from "react-router-dom";
function Button({ nameButton, direction, state }) {
  const clsse1 =
    "transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 bg-black p-1.5 shadow-lg rounded-lg text-white";
  console.log(direction);
  return (
    <>
      <Link to={direction}>
        <button className={clsse1}>{nameButton || "button"}</button>
      </Link>
    </>
  );
}
export { Button };
