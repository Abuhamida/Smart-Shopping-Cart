"use client";

import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";

interface Detection {
  inference_id: string;
  time: number;
  image: {
    width: number;
    height: number;
  };
  predictions: Prediction[];
}

interface Prediction {
  x: number;
  y: number;
  width: number;
  height: number;
  confidence: number;
  class: string;
  class_id: number;
  detection_id: string;
}

const RealTimeDetection: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const [detection, setDetection] = useState<string | null>(null);
  const [isDetecting, setIsDetecting] = useState<boolean>(false);

  // Function to capture the image and detect the product
  const detectProduct = async () => {
    if (!webcamRef.current) return;

    const imageSrc = webcamRef.current.getScreenshot(); // Capture the current frame
    if (!imageSrc) return;

    const base64Image = imageSrc.split(",")[1]; // Remove the Base64 prefix

    try {
      const response = await axios.post<Detection>(
        "https://detect.roboflow.com/egyptian-market-products/2",
        base64Image,
        {
          params: { api_key: "ZDMzYQ7098cCBloqZeJX" },
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      // Extract the class of the first prediction if available
      const firstPrediction = response.data.predictions[0];
      setDetection(
        firstPrediction ? firstPrediction.class : "No prediction found"
      );
    } catch (error: any) {
      console.error("Error detecting product:", error.message);
    }
  };

  // Function to run the detection loop
  const startDetectionLoop = () => {
    setIsDetecting(true);
    const interval = setInterval(() => {
      detectProduct();
    }, 2000); // Run every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  };

  useEffect(() => {
    if (isDetecting) {
      const stopDetectionLoop = startDetectionLoop();
      return () => stopDetectionLoop();
    }
  }, [isDetecting]);

  return (
    <div className="w-full flex flex-col justify-center px-10 ">
      <h1 className="text-3xl text-background font-bold font-sans pb-10 absolute top-40 ">
        Real-Time Product Detection
      </h1>

      <div className="flex gap-5 w-full h-[600px]">
        <div className="w-full">
          <Webcam
            className="w-full  h-[600px]"
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width="100%"
            videoConstraints={{
              facingMode: "environment", // Use the back camera if available
            }}
          />
        </div>
        <div className="w-full">
          {detection && (
            <div className=" flex flex-col w-full justify-center items-start ">
              <h2 className="text-primary text-2xl font-bold font-sans">
                Detected Class:
              </h2>
              <p className="text-secondary pl-4 text-xl">{detection}</p>
            </div>
          )}
        </div>
      </div>
      <div className="-mt-10">
        <button
          className="bg-background text-text px-6 py-3 rounded-2xl text-xl font-medium hover:text-primary cursor-pointer "
          onClick={() => setIsDetecting(!isDetecting)}
        >
          {isDetecting ? "Stop Detection" : "Start Detection"}
        </button>
      </div>
    </div>
  );
};

export default RealTimeDetection;
