import { categories } from "./backend/data";

function App() {
  return (
    <div>
      <div
        id="header"
        className="flex h-20 justify-center items-center font-bold text-2xl"
      >
        Kun's world
      </div>

      <div id="container" className="flex justify-center flex-wrap">
        {categories.map((category, index) => (
          <div
            id="each-container"
            key={index}
            className="min-w-[30%] h-64 border-2 flex justify-center items-center flex-grow m-4 overflow-hidden"
          >
            <div
              id="background-image"
              style={{ backgroundImage: `url(${category.image})` }}
              className="w-full h-full bg-cover bg-center transition ease-in duration-700 hover:scale-110 opacity-90"
            />
            <div
              id="check-it-out-box"
              className="flex justify-center items-center flex-col absolute"
            >
              <div className="font-bold">{category.title}</div>
              <button className="rounded-xl border-2 bg-indigo-300 text-white hover:bg-indigo-400 px-2 py-1">
                Check it out!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
