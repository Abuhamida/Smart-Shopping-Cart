"use client";

import React, { useState, ChangeEvent } from "react";
import axios from "axios";

const ProductDetector: React.FC = () => {
  const [image, setImage] = useState<string | null>(null); // Selected image
  const [detectedClass, setDetectedClass] = useState<string | null>(null); // Detected class
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  // Convert the uploaded image to base64
  const loadImageBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle image upload
  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const base64Image = await loadImageBase64(file);
      setImage(base64Image); // Save the base64 image for preview
    }
  };

  // Detect product using the Roboflow API
  const detectProduct = async () => {
    if (!image) {
      alert("Please upload an image first.");
      return;
    }

    setLoading(true); // Set loading state
    try {
      const response = await axios({
        method: "POST",
        url: "https://detect.roboflow.com/egyptian-market-products/2",
        params: {
          api_key: "ZDMzYQ7098cCBloqZeJX", // Replace with your actual API key
        },
        data: image,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      // Extract the detected class from the predictions
      if (response.data.predictions.length > 0) {
        const detected = response.data.predictions[0].class;
        setDetectedClass(detected); // Save detected class
      } else {
        setDetectedClass("No product detected.");
      }
    } catch (error: any) {
      console.error("Detection Error:", error.message);
      setDetectedClass("Error during detection.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="w-full flex flex-col justify-center px-10 ">
      <h1 className="text-3xl text-background font-bold font-sans pb-20 absolute top-40 ">
        Product Detector Using Image
      </h1>
      <div className="flex justify-center items-center ">
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <div className="h-[300px]">
          {image && (
            <img
              src={image}
              alt="Uploaded Preview"
              width={300}
              className=" py-10 "
            />
          )}
        </div>
      </div>
      <div>
        <button
          onClick={detectProduct}
          disabled={loading}
          className="bg-background text-text px-6 py-3 rounded-2xl text-xl font-medium hover:text-primary "
        >
          {loading ? "Detecting..." : "Detect Product"}
        </button>
      </div>

      {detectedClass && (
        <div className=" flex flex-col w-full justify-center items-start py-10">
          <h2 className="text-primary text-2xl font-bold font-sans">
            Detected Product
          </h2>
          <p className="text-secondary pl-4 text-xl">{detectedClass}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetector;
