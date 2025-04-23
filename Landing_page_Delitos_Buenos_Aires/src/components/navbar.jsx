import { Button } from "./Button";
function Navbar() {
  const pathname = window.location.pathname;
  const partes = pathname.split("/");
  const ultimaParte = partes.filter(Boolean).pop();

  console.log(ultimaParte);
  return (
    <div className=" flex flex-row justify-between max-w-full gap-x-6 rounded-xl p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <div className="basis-85 m-5 text-2xl font-medium text-black dark:text-white">
        <h1>Analisis de criminalidad B.A</h1>
      </div>
      <div className="flex m-5 justify-around basis-40 bg-blue">
        <Button direction={"/"} state={"/"} nameButton={"Inicio"}></Button>

        <Button direction={"/graficos"} nameButton={"Graficos"}></Button>
      </div>
    </div>
  );
}
export default Navbar;
