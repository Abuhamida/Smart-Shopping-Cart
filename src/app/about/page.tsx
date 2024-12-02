import React from "react";

import Image from "next/image";

export default function page() {
  return (
    <div className="flex flex-col py-10 items-center min-h-screen">
      <div className=" w-full top-0 px-10">
        <h1 className="text-3xl text-background font-bold font-sans">
          About Smart Shopping Cart
        </h1>
      </div>
      <div className="w-full px-10 flex  gap-4 h-[400px]">
        <div className="w-full px-10 flex flex-col gap-4 justify-center">
          <p className="text-xl leading-7">
            At Smart Shopping Cart, we are redefining the in-store shopping
            experience with an innovative blend of AI, IoT, and computer vision
            technologies. Our mission is to make shopping more convenient,
            efficient, and enjoyable for everyone.
          </p>
        </div>
        <div className="w-full px-10 flex relative ">
          <Image
            src="/smartcart-turku-finland.jpg"
            alt=""
            fill
            className=" rounded-xl"
          ></Image>
        </div>
      </div>

      <div className=" w-full py-16">
        <div className=" w-full top-0 px-10 flex flex-col items-start">
          <h1 className="text-3xl text-background font-bold font-sans">
            What is Smart Shopping Cart?
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className="w-full flex h-[300px] px-10 gap-10 pt-10  ">
          <div className="w-full px-10 flex relative ">
          <Image
            src="/107087167-1657577323174-New_Version_of_the_Dash_Cart_Screen.jpg"
            alt=""
            fill
            className=" rounded-xl"
          ></Image>
        </div>
            <div className="w-full">
              <h1 className="text-xl font-bold pb-7">
                Our Smart Shopping Cart is an intelligent retail solution
                designed to:
              </h1>
              <ul className=" list-disc leading-5 gap-7 flex flex-col px-10  ">
                <li className="text-primary ">
                  Automatically recognize items placed in the cart using cameras
                  and sensors.
                </li> 
                <li className="text-primary ">
                  Calculate the total cost in real-time, giving you complete
                  control over your shopping expenses.
                </li>
                <li className="text-primary ">
                  Simplify the checkout process with seamless, cashier-less
                  payment options.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
