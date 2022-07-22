import { Button } from "../Button";

export function Dropdown() {
  return (
    <div
      id="cart-dropdown-container"
      className="absolute w-48 h-64 flex flex-col border-2 z-10 top-10 right-4 bg-white p-1"
    >
      Dropdown
      <div
        id="cart-items-list"
        className="h-48 flex flex-col overflow-auto"
      ></div>
      <Button content="Checkout" />
    </div>
  );
}
