import Navbar from "../components/navbar";
function Home() {
  return (
    <>
      <Navbar />
      <div className="p-20 space-x-10 flex justify-between">
        <div className="space-y-8">
          <h1 className="text-5xl">
            Informe de criminalidad en la provincia de Buenos Aires
          </h1>
          <p className="text-2xl">
            Este trabajo analiza los delitos registrados en la provincia de
            Buenos Aires durante el año 2023. Utilizando y analizando datos
            públicos de la página Buenos Aires Data, convirtiéndolos en gráficos
            que muestra de manera detallada las formas, lugares, y franjas
            horarias en que se presenta el delito en la provincia.
          </p>
        </div>
        <img src="../../public/home.png"></img>
      </div>
    </>
  );
}
export default Home;
