"use client";

import React, { useState } from "react";
import RealTimeDetection from "../components/WebcamPrediction";
import ProductDetector from "../components/ProductDetector";
export default function Home() {
  const [isReal, setIsReal] = useState(false);
  const [isImage, setIsImage] = useState(false);

  return (
    <div className="w-full first-line:lex flex-col items-center justify-center min-h-screen">
      <div className="w-full flex flex-col px-10 py-10 ">
        <div className="text-3xl font-bold font-sans text-background">
          <h1>Welcome to product predict page</h1>
        </div>
        {!isImage && !isReal ? (
          <div className="w-full">
            <h1 className="pt-5 text-xl text-primary font-semibold">
              How Product Prediction Works
            </h1>
            <div className=" relative w-full">
              <div className="w-[600px] h-[1.5px] rotate-90 bg-primary absolute top-80 -left-[280px] -z-10"></div>
              <div className="flex flex-col">
                <div className="pl-[10px] pt-10 z-1 flex gap-5  ">
                  <div className="w-5 h-5 rounded-full bg-background mt-1 z-10 flex flex-col justify-center items-center text-white  ">
                    1
                  </div>
                  <div>
                    <h1 className="text-primary text-xl font-semibold">
                      Image Capture
                    </h1>
                    <p className="pl-2">
                      When a product is placed in the cart, built-in cameras
                      capture high-resolution images of the item from multiple
                      angles.
                    </p>
                  </div>
                </div>
                <div className="pl-[10px] pt-10 z-1 flex gap-5  ">
                  <div className="w-5 h-5 rounded-full bg-background mt-1 z-10 flex flex-col justify-center items-center text-white  ">
                    2
                  </div>
                  <div>
                    <h1 className="text-primary text-xl font-semibold">
                      Preprocessing
                    </h1>
                    <p className="pl-2">
                      The captured images are cleaned and prepared by adjusting
                      brightness, contrast, and removing noise to ensure
                      accurate recognition.
                    </p>
                  </div>
                </div>
                <div className="pl-[10px] pt-10 z-1 flex gap-5  ">
                  <div className="w-5 h-5 rounded-full bg-background mt-1 z-10 flex flex-col justify-center items-center text-white  ">
                    3
                  </div>
                  <div>
                    <h1 className="text-primary text-xl font-semibold">
                      AI-Powered Detection
                    </h1>
                    <p className="pl-2">
                      Deep Learning Algorithms analyze the images. The system
                      uses models like Convolutional Neural Networks (CNNs)
                      trained on a vast dataset of products.
                    </p>
                  </div>
                </div>
                <div className="pl-[10px] pt-10 z-1 flex gap-5  ">
                  <div className="w-5 h-5 rounded-full bg-background mt-1 z-10 flex flex-col justify-center items-center text-white  ">
                    4
                  </div>
                  <div>
                    <h1 className="text-primary text-xl font-semibold">
                      Feature Matching
                    </h1>
                    <p className="pl-2">
                      Detected features are compared against a preloaded
                      database of product images and metadata (e.g., name,
                      category, price).
                    </p>
                  </div>
                </div>
                <div className="pl-[10px] pt-10 z-1 flex gap-5  ">
                  <div className="w-5 h-5 rounded-full bg-background mt-1 z-10 flex flex-col justify-center items-center text-white  ">
                    5
                  </div>
                  <div>
                    <h1 className="text-primary text-xl font-semibold">
                      Prediction Results
                    </h1>
                    <p className="pl-2">
                      The system identifies the product and provides information
                      such as:
                      <span className="text-background font-bold">
                        &nbsp;Product Name,
                      </span>
                      <span className="text-background font-bold">
                        &nbsp;Category,
                      </span>
                      <span className="text-background font-bold">
                        &nbsp;Price
                      </span>
                    </p>
                  </div>
                </div>
                <div className="pl-[10px] pt-10 z-1 flex gap-5  ">
                  <div className="w-5 h-5 rounded-full bg-background mt-1 z-10 flex flex-col justify-center items-center text-white  ">
                    6
                  </div>
                  <div>
                    <h1 className="text-primary text-xl font-semibold">
                      Real-Time Calculation
                    </h1>
                    <p className="pl-2">
                      The detected product's details are instantly added to the
                      cart summary, updating the total price in real time.
                    </p>
                  </div>
                </div>
                <div className="pl-[10px] pt-10 z-1 flex gap-5  ">
                  <div className="w-5 h-5 rounded-full bg-background mt-1 z-10 flex flex-col justify-center items-center text-white  ">
                    7
                  </div>
                  <div>
                    <h1 className="text-primary text-xl font-semibold">
                      Continuous Learning
                    </h1>
                    <p className="pl-2">
                      The system improves over time by learning from new
                      products and user feedback, ensuring even higher accuracy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div></div>
          </div>
        ) : (
          <div>
            {isReal && <RealTimeDetection />}
            {isImage && <ProductDetector />}
          </div>
        )}
      </div>
      <div className=" py-10 flex flex-col gap-5 w-full items-start px-10">
        <button
          className="bg-background text-text px-6 py-3 rounded-2xl text-xl font-medium hover:text-primary "
          onClick={() => {
            setIsReal(true);
            setIsImage(false);
          }}
        >
          Detect Product by Real-Time Detection
        </button>
        <button
          className="bg-background text-text px-6 py-3 rounded-2xl text-xl font-medium hover:text-primary "
          onClick={() => {
            setIsReal(false);
            setIsImage(true);
          }}
        >
          Detect Product by Image
        </button>
      </div>
    </div>
  );
}
