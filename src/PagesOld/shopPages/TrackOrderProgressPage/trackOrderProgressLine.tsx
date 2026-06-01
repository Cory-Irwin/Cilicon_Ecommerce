import React from "react";
import Handshake from "../../../assets/TrackOrderProgress/Handshake.svg";
import Notebook from "../../../assets/TrackOrderProgress/Notebook.svg";
import Package from "../../../assets/TrackOrderProgress/Package.svg";
import Truck from "../../../assets/TrackOrderProgress/Truck.svg";

interface ProgressBarProps {
  step: number; // values: 0 to 3
}

const trackOrderProgressLine: React.FC<ProgressBarProps> = ({ step }) => {
  const totalSteps = 4;
  const progressPercent = (step / (totalSteps - 1)) * 100;

  return (
    <div className="w-full px-24 py-6">
      <div className="relative w-full h-2 bg-gray-300 rounded-full">
        {/* Progress Fill */}
        <div
          className="absolute h-2 bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />

        {/* Checkpoints */}
        <div className="absolute top-1/2 left-0 w-full flex justify-between transform -translate-y-1/2">
          {[...Array(totalSteps)].map((_, index) => (
            <div
              key={index}
              className={`w-6 h-6 rounded-full flex items-center justify-center 
                ${
                  index <= step
                    ? "bg-blue-500"
                    : "bg-white border-2 border-gray-400"
                }
              `}
            >
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-13 flex-row">
        <div className="flex relative">
          <div className="flex relative right-1.5 flex-col">
            <div className="py-5 flex">
              <img src={Notebook} alt="" />
            </div>
            <div className="relative right-8 bottom-3">
              <h1>Order Placed</h1>
            </div>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex relative left-5.5 flex-col">
            <div className="py-5 flex">
              <img src={Package} alt="" />
            </div>
            <div className="relative right-6 bottom-3">
              <h1>Packaging</h1>
            </div>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex relative left-17 flex-col">
            <div className="py-5 flex">
              <img src={Truck} alt="" />
            </div>
            <div className="relative right-8 bottom-3">
              <h1>On the Road</h1>
            </div>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex relative left-24 flex-col">
            <div className="py-5 flex">
              <img src={Handshake} alt="" />
            </div>
            <div className="relative right-6 bottom-3">
              <h1>Delievered</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default trackOrderProgressLine;
