import { descripciones, titulos } from "./graf-descript-db";
function Cart_graficos() {
  const images = import.meta.glob("../assets/*.png", {
    eager: true,
    import: "default",
  });
  const imageArray = Object.values(images);
  return (
    <div>
      <div className=" p-20 flex w-full h-full center flex-wrap">
        {imageArray.map((img, i) => (
          <div className="space-x-15 flex w-full h-full justify-between bg-gray-300 rounded-xl p-5 m-4">
            <div className="flex flex-col space-y-6">
              <h1 className="text-4xl flex-wrap">{titulos[i]}</h1>
              <h1 className="text-2xl">{descripciones[i]}</h1>
            </div>
            <img
              key={i}
              src={img}
              alt={{ i }}
              width={750}
              className="border-2 rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export { Cart_graficos };
