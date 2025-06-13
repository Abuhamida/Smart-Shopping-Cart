"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface FloorData {
  id: number;
  name: string;
  short_name: string;
  description: string;
  svg_path: string;
}

export default function Page() {
  const [floors, setFloors] = useState<FloorData[]>([]);
  const [name, setName] = useState<string>("");
  const [short_name, setShortName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [svg_path, setSvgPath] = useState<string>("");

  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [selectedFloor, setSelectedFloor] = useState<FloorData | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // 🔹 Loading state

  useEffect(() => {
    fetchFloors();
  }, []);

  const fetchFloors = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/map/get/floors");
      const data = await response.json();
      setFloors(data.data);
    } catch (error) {
      console.error("Error fetching floors:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/map/delete/floors?id=${id}`, {
      method: "DELETE",
    });
    fetchFloors();
  };

  const handleAddFloor = async () => {
    if (!name || !short_name || !description || !svg_path) {
      alert("Please fill all the fields");
      return;
    }
    const response = await fetch("/api/map/add/floors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, short_name, description, svg_path }),
    });
    if (response.ok) {
      setName("");
      setShortName("");
      setDescription("");
      setSvgPath("");
      fetchFloors();
    }
  };

  const handleUpdateFloor = async () => {
    if (!selectedFloor) return;
    const response = await fetch(
      `/api/map/update/floors?id=${selectedFloor.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, short_name, description, svg_path }),
      }
    );
    if (response.ok) {
      setEditModalOpen(false);
      setSelectedFloor(null);
      fetchFloors();
    }
  };

  const openEditModal = (floor: FloorData) => {
    setSelectedFloor(floor);
    setName(floor.name);
    setShortName(floor.short_name);
    setDescription(floor.description);
    setSvgPath(floor.svg_path);
    setEditModalOpen(true);
  };

  return (
    <div className="flex flex-wrap items-start justify-start min-h-screen w-full p-10 gap-10 pt-20">
      {loading ? (
        <div className="w-full flex justify-center items-center min-h-[calc(100vh-10rem)]">
          <div className="w-12 h-12 border-4 border-[#001b30] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {floors.map((floor) => (
            <div
              className="w-96 h-96 rounded-xl bg-[#001b30]/80 text-white flex flex-col items-start justify-center gap-2 p-4"
              key={floor.id}
            >
              <h1>name: {floor.name}</h1>
              <h2>short name: {floor.short_name}</h2>
              <h3>description: {floor.description}</h3>
              <h4>svg path: {floor.svg_path}</h4>
              <img src={floor.svg_path} alt="Floor" className="w-40 h-40" />
              <div className="flex items-center justify-between pt-4 w-full">
                <Link
                  href={`/editmap/${floor.id}`}
                  className="text-white bg-[#001b30] px-2 py-1 rounded-md hover:bg-[#001b30]/80"
                >
                  Edit points
                </Link>
                <button
                  className="text-white bg-[#001b30] px-2 py-1 rounded-md hover:bg-[#001b30]/80"
                  onClick={() => openEditModal(floor)}
                >
                  Edit floor
                </button>
                <button
                  className="text-white bg-red-500 px-2 py-1 rounded-md hover:bg-red-600"
                  onClick={() => handleDelete(floor.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}{" "}
          {/* Add New Floor */}
          <div className="w-96 h-96 rounded-xl bg-[#001b30]/80 text-white flex flex-col items-start justify-center gap-2 p-4">
            <h1>Add Floor</h1>
            <input
              type="text"
              placeholder="Name"
              className="input text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Short Name"
              className="input text-black"
              value={short_name}
              onChange={(e) => setShortName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              className="input text-black"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="SVG Path"
              className="input text-black"
              value={svg_path}
              onChange={(e) => setSvgPath(e.target.value)}
            />
            <button
              className="text-white bg-[#001b30] px-2 py-1 rounded-md hover:bg-[#001b30]/80"
              onClick={handleAddFloor}
            >
              Add
            </button>
          </div>
        </>
      )}

      {/* Edit Floor Modal */}
      {editModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-sm bg-black/50 z-50">
          <div className="bg-white text-black rounded-xl p-6 w-[400px]">
            <h2 className="text-xl mb-4 font-bold">Edit Floor</h2>
            <input
              type="text"
              placeholder="Name"
              className="input text-black w-full mb-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Short Name"
              className="input text-black w-full mb-2"
              value={short_name}
              onChange={(e) => setShortName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              className="input text-black w-full mb-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="SVG Path"
              className="input text-black w-full mb-4"
              value={svg_path}
              onChange={(e) => setSvgPath(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => {
                  setEditModalOpen(false);
                  setName("");
                  setShortName("");
                  setDescription("");
                  setSvgPath("");
                }}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={handleUpdateFloor}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
