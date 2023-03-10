import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { Button, SparkLine, Stacked } from "../../components/components";
import StateContext from "../../libs/context/AppContext";
import { earningData, SparklineAreaData } from "../../libs/data/dummy";

function Ecommerce() {
  const { currentColor } = StateContext();
  return (
    <div className="FadeAp mt-5">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        {/* Earning */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-5  m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div>
            <p className="font-bold text-gray-400">Earnings</p>
            <p className="text-2xl">$63, 448,78</p>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              borderRadius="10px"
              size="md"
              className="px-3 py-2 hover:drop-shadow-xl"
            >
              Download
            </Button>
          </div>
        </div>
        {/* Dashboard main Data */}
        <div className="flex m-3 flex-wrap justify-center gap-2 items-center">
          {earningData.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-44 p-8 rounded-2xl"
            >
              <button
                type="button"
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg,
                }}
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-gray-400 text-sm mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Revenue updates</h2>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-3 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-3 text-green-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Bugdet</span>
              </p>
            </div>
          </div>
          {/* Chart */}
          <div className="mt-10 flex gap-10 justify-center flex-wrap">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93, 438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 text-xs ml-3">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-5">
                <p>
                  <span className="text-3xl font-semibold">$48, 438</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="80px"
                  color={currentColor}
                  data={SparklineAreaData}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  className="px-3 py-2"
                  borderRadius="5px"
                >
                  Download Report
                </Button>
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
