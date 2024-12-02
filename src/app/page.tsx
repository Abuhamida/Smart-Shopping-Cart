import React from "react";
import Image from "next/image";
import Link from "next/link";

import bg from "../../public/main-bg2.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className=" relative w-full h-[750px]">
        <Image
          alt="Mountains"
          src={bg}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className=" absolute top-[50%] pl-10 text-white flex flex-col gap-4">
          <h1 className="  text-4xl font-bold font-sans ">
            Welcome to the Future of Shopping!
          </h1>
          <h2 className=" text-2xl font-semibold font-sans">
            Revolutionizing the Way You Shop
          </h2>
        </div>
      </div>
      <div className="flex flex-col min-h-[600px] justify-center items-start w-full px-10">
        <h1 className="text-background text-xl font-semibold pb-5">
          Experience the future of shopping with our
          <span className="font-bold"> Smart Shopping Cart, </span>
          designed to simplify and enhance your in-store experience.
        </h1>
        <div className="w-[200px] h-[2px] bg-primary relative top-28 -left-[74px] rounded-full rotate-90"></div>
        <ul className=" list-disc px-12 leading-10 text-base pt-5">
          <li className="text-primary text-3xl">
            <div className="text-black text-xl">
              Automated Item Recognition: Using advanced AI and computer vision,
              the cart instantly identifies the products you add.
            </div>
          </li>
          <li className="text-primary text-3xl">
            <div className="text-black text-xl">
              Real-Time Cost Calculation: Keep track of your total as you
              shop—no surprises at checkout.
            </div>
          </li>
          <li className="text-primary text-3xl">
            <div className="text-black text-xl">
              Seamless Checkout: Skip the lines with a hassle-free payment
              process.
            </div>
          </li>
          <li className="text-primary text-3xl">
            <div className="text-black text-xl">
              Navigation Assistance: Find products faster with in-store
              navigation guidance.
            </div>
          </li>
          <li className="text-primary text-3xl">
            <div className="text-black text-xl">
              Personalized Recommendations: Discover deals and products tailored
              to your preferences.
            </div>
          </li>
        </ul>

        <div className="flex flex-col pt-20 ">
          <h1 className="text-3xl font-bold font-sans">
            Start Shopping Smarter Today!
          </h1>
          <h2 className="font-sans font-medium">
            Let us make your shopping experience faster, easier, and more
            enjoyable.{" "}
            <Link
              href={"/predict"}
              className="text-primary hover:text-secondary"
            >
              {" "}
              Try now
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}
