import CtaButton from "@/components/cta-button";
import Image from "next/image";

const Logo = () => {
  const clickHandler = () => {
    document.body.scrollIntoView({
      behavior: "smooth",
      top: 0
    });
  };
  return (
    <CtaButton onClick={clickHandler} extraClassName="py-0 px-0 bg-transparent border-0 flex gap-2 items-center">
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
      <span className="heading text-3xl font-bold mb-4">Fruit9</span>
    </CtaButton>
  );
};

export default Logo;
