import { locations } from "../backend/home-data";
import { Button } from "../components/Button";
export function Home() {
  return (
    <div>
      <div
        id="header"
        className="flex justify-center items-center font-bold text-2xl"
      >
        Kun's world
      </div>

      <div id="container" className="flex justify-center flex-wrap">
        {locations.map((location, index) => (
          <div
            id="each-container"
            key={index}
            className="min-w-[30%] h-64 border-2 flex justify-center items-center flex-grow m-4 overflow-hidden"
          >
            <div
              id="background-image"
              style={{ backgroundImage: `url(${location.image})` }}
              className="w-full h-full bg-cover bg-center transition ease-in duration-700 hover:scale-110 opacity-90"
            />
            <div
              id="check-it-out-box"
              className="flex justify-center items-center flex-col absolute"
            >
              <div className="font-bold">{location.title}</div>
              <Button content="Check it out!" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
