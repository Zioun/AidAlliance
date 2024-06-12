import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

const AllVolunteerCard = ({ volunteer }) => {
  const {_id, thumbnail, title, description, category, location, deadline, buyer} = volunteer
  return (
    <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <img
        className="object-cover w-full h-64"
        src={thumbnail}
        alt="Thembnail"
      />
      <div className="p-6">
        <div>
          <div className="flex flex-wrap gap-5 justify-between">
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              {category}
            </span>
            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300 flex gap-3">
              <span className="flex gap-2 items-center">
                <SlCalender /> {new Date(deadline).toLocaleDateString()}
              </span>
              <span className="flex gap-1 items-center">
                <span className="text-[16px]">
                  <CiLocationArrow1 />
                </span>{" "}
                {location}
              </span>
            </span>
          </div>
          <a
            href="#"
            className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
            tabIndex="0"
            role="link"
          >
            {title}
          </a>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {description && description.substring(0, 150) + "....."}
          </p>
        </div>
        <div className="mt-4">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                className="object-cover h-10 w-10 rounded-full"
                src={buyer?.photo}
                alt="Avatar"
              />
              <div className="">
                <a
                  href="#"
                  className="font-semibold text-gray-700 dark:text-gray-200"
                  tabIndex="0"
                  role="link"
                >
                  {buyer?.name}
                </a>
                <p>{buyer?.email}</p>
              </div>
            </div>
            <div class="inline-flex w-full sm:w-auto">
              
              <Link to={`/volunteer/${_id}`}>
                <button
                  href="#"
                  class="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                >
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllVolunteerCard;
