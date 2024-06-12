import React from "react";
import { Helmet } from "react-helmet";
import { CiLocationArrow1 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { Link, useLoaderData } from "react-router-dom";
import { MdOutlineVolunteerActivism } from "react-icons/md";


const Details = () => {
  const volunteer = useLoaderData();
  const {
    _id,
    thumbnail,
    title,
    description,
    category,
    location,
    deadline,
    noOfVolunteersNeeded,
    buyer,
  } = volunteer || {};
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <Helmet>
          <title>AidAlliance - Details</title>
        </Helmet>
        <div class="container px-6 py-10 mx-auto">
          <div class="lg:-mx-6 lg:flex lg:items-center">
            <img
              class="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
              src={thumbnail}
              alt=""
            />

            <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
              <p class="text-5xl font-semibold text-blue-500 ">“</p>

              <h3 class="text-lg font-medium bg-blue-500 text-white py-3 px-5 mb-3 badge">{category}</h3>
              <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                {title}
              </h1>

              <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                “ {description} ”
              </p>
              <span className="mx-1 mt-5 text-xs text-gray-600 dark:text-gray-300 flex gap-3">
                <span className="flex gap-2 items-center">
                  <SlCalender /> {new Date(deadline).toLocaleDateString()}
                </span>
                <span className="flex gap-1 items-center">
                  <span className="text-[16px]">
                    <CiLocationArrow1 />
                  </span>{" "}
                  {location}
                </span>
                <span className="flex gap-1 items-center">
                  <span className="text-[17px]">
                  <MdOutlineVolunteerActivism />
                  </span>{" "}
                  {noOfVolunteersNeeded}
                </span>
              </span>
              <div className="">
                <div className="flex items-center mt-6 gap-5">
                  <img
                    className="h-[50px] w-[50px] object-cover rounded-full"
                    src={buyer?.photo}
                    alt=""
                  />
                  <div>
                    <h3 class="text-lg font-medium text-blue-500">
                      {buyer?.name}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300">
                      {buyer?.email}
                    </p>
                  </div>
                </div>

                <Link to={`/be-a-volunteer/${_id}`}>
                  <button
                    href="#"
                    class="inline-flex items-center justify-center px-8 mt-5 py-3 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                  >
                    Be a Volunteer
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
