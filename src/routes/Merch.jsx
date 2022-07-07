import { merch } from "../backend/merch-data";

export function Merch() {
  return (
    <div className="h-96 flex justify-center items-center space-x-20 mt-20">
      {merch.map((item, index) => (
        <div
          key={index}
          className="flex justify-center items-center border-2 flex-col"
        >
          <img src={item.image} alt={item.image} className="w-48 h-48" />
          <div className="w-full flex justify-between">
            <div className="whitespace-nowrap pl-1">{item.product}</div>
            <div className="flex justify-end items-center pr-1">
              {item.price}
            </div>
          </div>

          <div
            id="check-it-out-box"
            className="w-48 h-48 flex justify-center items-center absolute opacity-0 hover:opacity-100"
          >
            <button className="rounded-xl border-2 bg-indigo-300 text-white hover:bg-indigo-400 px-2 py-1">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
