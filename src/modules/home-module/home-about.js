import { phoneNumber } from "@/common-data";
import CtaButton from "@/components/cta-button";
import SubHeading from "@/components/sub-heading";
import Image from "next/image";

const HomeAbout = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4" id="about">
      <SubHeading>About Us</SubHeading>
      <div className="relative sm:h-[450px] aspect-video w-[100%]">
        <Image
          alt="Fruits"
          src="/images/img-about.png"
          fill
          sizes="100%"
          draggable={false}
          className="w-full h-full object-contain"
        />
      </div>
      <p className="text-center sm:w-8/12 w-11/12">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, deserunt. Nam veniam deserunt similique totam
        dolorum vitae, consectetur doloribus at, nobis dolore harum natus incidunt sequi nesciunt inventore optio, iusto
        eaque voluptates voluptatum neque praesentium cupiditate vero. Vero facilis a laborum sit amet quos quae sed
        minima dolore omnis ratione magni, aspernatur dicta? Libero neque, quam cum numquam voluptas doloribus iusto
        fuga odio cupiditate minima vitae at veritatis aut aspernatur itaque quae quas. Esse, doloremque ducimus rem
        vitae soluta voluptatem.
      </p>
      <CtaButton href={`https://wa.me/${phoneNumber}`}>Contact Us</CtaButton>
    </div>
  );
};

export default HomeAbout;
