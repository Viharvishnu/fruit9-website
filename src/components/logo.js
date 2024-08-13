import Image from "next/image";

const Logo = () => {
  const clickHandler = () => {
    document.body.scrollIntoView({
      behavior: "smooth",
      top: 0
    });
  };
  return (
    <button onClick={clickHandler} className="flex gap-2 items-center">
      <div className="relative h-12 aspect-square">
        <Image
          alt="Logo | Fruit9"
          src="/images/logo.png"
          fill
          sizes="100%"
          draggable={false}
          className="w-full h-full object-contain"
        />
      </div>
      <span className="heading text-3xl font-bold">Fruit9</span>
    </button>
  );
};

export default Logo;
