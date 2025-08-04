import React, { useState } from "react";
import images from "../constants/images";

const donationItems = [
  {
    title: "",
    price: "",
    image: images.house,
  },
  {
    title: "NIA Transport Bus",
    price: "₦18,000,000",
    image: images.bus,
  },
];

const DonationItems = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 tracking-tight">
          Support Our Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {donationItems.map((item, index) => (
            <div
              key={index}
              className="relative h-96 rounded-3xl overflow-hidden shadow-xl group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="relative z-10 h-full w-full flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-1 drop-shadow">
                  {item.title}
                </h3>
                <p className="text-lg font-semibold text-[#b1e0c2] mb-4 drop-shadow">
                  {item.price}
                </p>
                <button
                  onClick={() => openModal(item)}
                  className="bg-[#2C5B43] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#1e3d2f] transition-all duration-200 w-fit"
                >
                  Donate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white max-w-md w-full rounded-2xl shadow-lg p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold mb-4 text-center text-[#2C5B43]">
              Donate to {selectedItem?.title}
            </h3>

            <div className="text-gray-800 space-y-2 mb-6 text-center">
              <p><strong>Bank Name:</strong> First Bank</p>
              <p><strong>Account Number:</strong> 2001827668</p>
              <p><strong>Account Name:</strong> Nigerian Institute of Architects, Osun State Chapter</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#2C5B43] text-white px-4 py-2 rounded-lg hover:bg-[#1e3d2f] w-full">
                Pay with Card
              </button>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 w-full">
                Pay via Bank Transfer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DonationItems;
