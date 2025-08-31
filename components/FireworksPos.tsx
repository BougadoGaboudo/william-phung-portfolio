import Firework from "./Firework";

export default function FireworksPos() {
  return (
    <>
      <div className="absolute top-[20%] left-[10%]">
        <Firework />
      </div>

      <div className="absolute top-[15%] right-[15%]">
        <Firework />
      </div>

      <div className="absolute bottom-[20%] left-[30%]">
        <Firework />
      </div>
    </>
  );
}
