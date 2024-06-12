import axios from "axios";
import React, { useEffect, useState } from "react";
import AllVolunteerCard from "./AllVolunteerCard";
import { FaTableCellsLarge } from "react-icons/fa6";
import { MdTableRows } from "react-icons/md";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NeedVolunteer = () => {
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [volunteer, setVolunteer] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${
          import.meta.env.VITE_API_URL
        }/all-volunteer?page=${currentPage}&size=${itemsPerPage}&search=${search}`
      );
      setVolunteer(data);
    };
    getData();
  }, [currentPage, itemsPerPage, search]);

  // for pagination
  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/volunteer-count?search=${search}`
      );
      setCount(data.count);
    };
    getCount();
  }, [search]);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  //handle pagination
  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };

  //handle Search
  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
  };

  // handle box
  const handleBox = (e) => {
    e.preventDefault();
    const cards = document.getElementById("cards");
    const table = document.getElementById("table");
    if (cards) {
      cards.classList.remove("hidden");
    }
    if (table) {
      table.classList.add("hidden");
    }
  };
  const handleTable = (e) => {
    e.preventDefault();
    const table = document.getElementById("table");
    const cards = document.getElementById("cards");
    if (table) {
      table.classList.remove("hidden");
    }
    if (cards) {
      cards.classList.add("hidden");
    }
  };

  return (
    <div className="container m-auto pb-5 px-6">
      <Helmet>
        <title>AidAlliance - Need Volunteer</title>
      </Helmet>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 pt-10 mx-auto text-center">
          <div className="mx-auto">
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
              Need <span className="text-blue-500">Volunteer Page</span>
            </h1>

            <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
              Get involved in our community! Whether it's event support or
              administrative tasks, your help makes a real difference. Join us
              today and be part of something meaningful!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 rounded mb-10">
        <div className="pt-2 pb-5">
          <div className="flex justify-center">
            <form
              onSubmit={handleSearch}
              class="flex flex-col md:flex-row bg-white rounded"
            >
              <input
                type="text"
                name="search"
                placeholder="Enter Post Title"
                class="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-white border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />

              <button
                type="submit"
                class="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
              >
                Search
              </button>
            </form>
          </div>
          <div className="flex justify-end sm:-mt-9 pr-5 mt-5">
            <div className="flex gap-5">
              <button onClick={handleBox} className="text-[25px]">
                <FaTableCellsLarge />
              </button>
              <button onClick={handleTable} className="text-[27px]">
                <MdTableRows />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="cards" className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {volunteer.map((volunteer) => (
          <AllVolunteerCard
            key={volunteer.id}
            volunteer={volunteer}
          ></AllVolunteerCard>
        ))}
      </section>
      <section id="table" class="container hidden px-4 mx-auto">
        <div class="flex flex-col mt-6">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <span>Post</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button class="flex items-center gap-x-2">
                          <span>Deadline</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button class="flex items-center gap-x-2">
                          <span>Location</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Author
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Category
                      </th>

                      <th scope="col" class="relative py-3.5 px-4">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {volunteer.map((volunteer) => (
                      <tr>
                        <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div class="inline-flex items-center gap-x-3">
                            <div class="flex items-center gap-x-2">
                              <img
                                class="object-cover w-10 h-10 rounded"
                                src={volunteer.thumbnail}
                                alt=""
                              />
                              <div>
                                <h2 class="font-medium text-gray-800 dark:text-white ">
                                  {volunteer.title &&
                                    volunteer.title.substring(0, 15) + "....."}
                                </h2>
                                <p class="text-sm font-normal text-gray-600 dark:text-gray-400">
                                  {volunteer.title &&
                                    volunteer.title.substring(0, 15) + "....."}
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-gray-500">
                            <h2 class="text-sm font-normal">
                              {new Date(
                                volunteer.deadline
                              ).toLocaleDateString()}
                            </h2>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {volunteer.location}
                        </td>
                        <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div class="inline-flex items-center gap-x-3">
                            <div class="flex items-center gap-x-2">
                              <img
                                class="object-cover w-10 h-10 rounded-full"
                                src={volunteer.buyer.photo}
                                alt=""
                              />
                              <div>
                                <h2 class="font-medium text-gray-800 dark:text-white ">
                                  {volunteer.buyer.name}
                                </h2>
                                <p class="text-sm font-normal text-gray-600 dark:text-gray-400">
                                  {volunteer.buyer.email}
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                          <div class="flex items-center gap-x-2">
                            <p class="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                              {volunteer.category}
                            </p>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                          <div class="flex items-center gap-x-6">
                            <Link to={`/volunteer/${volunteer._id}`}>
                              <button class="badge bg-slate-900 text-white">
                                Details
                              </button>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-100 py-5 flex justify-center my-10">
        <div className="flex">
          <button
            onClick={() => handlePaginationButton(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md dark:bg-gray-800 dark:text-gray-600"
          >
            <div className="flex items-center -mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 rtl:-scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>

              <span className="mx-1">Previous</span>
            </div>
          </button>

          {pages.map((btnNum) => (
            <button
              onClick={() => handlePaginationButton(btnNum)}
              key={btnNum}
              className={`px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ${
                currentPage === btnNum ? "bg-blue-500 text-black" : ""
              }`}
            >
              {btnNum}
            </button>
          ))}

          <button
            onClick={() => handlePaginationButton(currentPage + 1)}
            disabled={currentPage === numberOfPages}
            className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
          >
            <div className="flex items-center -mx-1">
              <span className="mx-1">Next</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 rtl:-scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default NeedVolunteer;
