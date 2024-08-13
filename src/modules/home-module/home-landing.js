import CtaButton from "@/components/cta-button";
import Image from "next/image";

const HomeLanding = () => {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return (
    <div className="h-screen relative w-screen flex items-center justify-center" id="landing">
      <div className="absolute aspect-video h-screen w-screen">
        <Image
          alt="Scattered fruits"
          src="/images/landing-img.png"
          fill
          sizes="100%"
          draggable={false}
          className="w-full h-full object-cover"
        />
      </div>
      <main className="text-black flex flex-col items-center gap-8 relative z-10 w-fit">
        <h1 className="flex flex-col heading text-4xl sm:text-6xl font-bold gap-2 xl:text-8xl items-center text-center">
          <span>Healthy, organic and</span>
          <span>Fresh Fruits</span>
        </h1>
        <p className="md:text-2xl text-xl text-gray-700 ">The perfect healthy snack box!</p>
        <div className="flex sm:flex-row gap-4 flex-col w-full sm:w-fit">
          <CtaButton secondary={true} extraClassName="w-full sm:w-fit text-center" onClick={() => handleClick("plans")}>
            Our Plans
          </CtaButton>
          <CtaButton extraClassName="w-full sm:w-fit text-center" onClick={() => handleClick("subscriptions")}>
            Order Now
          </CtaButton>
        </div>
      </main>
    </div>
  );
};

export default HomeLanding;
