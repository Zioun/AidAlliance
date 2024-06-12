import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { MdClear } from "react-icons/md";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const ManagePost = () => {
  const { user } = useContext(AuthContext);
  const [volunteer, setVolunteer] = useState([]);
  // for volunteer post
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/volunteers/${user.email}`,
      { withCredentials: true }
    );
    setVolunteer(data);
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
    .then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axios.delete(
            `${import.meta.env.VITE_API_URL}/volunteers/${id}`
          );
          console.log("delete", data);
          // refresh ui
          getData();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        } catch (err) {
          console.log(err.message);
          toast.error(err.message);
        }
      }
    });
  };

  // for volunteer request
  const [reqVolunteer, setReqVolunteer] = useState([]);
  useEffect(() => {
    reqgetData();
  }, []);
  const reqgetData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/be-a-volunteer/${user.email}`,
      { withCredentials: true }
    );
    setReqVolunteer(data);
  };

  const handleCancel = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        try {
          const { data } = await axios.delete(
            `${import.meta.env.VITE_API_URL}/req-volunteer/${id}`
          );
          console.log("delete", data);
          // refresh ui
          reqgetData();
        } catch (err) {
          console.log(err.message);
          toast.error(err.message);
        }
      }
    });
  };
  return (
    <div className="container m-auto pb-5 px-6">
      <Helmet>
        <title>AidAlliance - Manage Post</title>
      </Helmet>
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto text-center">
            <div className="mx-auto">
              <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                My Need
                <span class="text-blue-500"> Volunteer Post</span>
              </h1>

              <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                Join our team and make a difference! We're looking for
                passionate volunteers to help us [briefly describe the mission
                or goal of your organization]. Get involved today!
              </p>
            </div>
          </div>
        </section>
        <section class="container px-4 mx-auto">
          <div class="flex items-center gap-x-3">
            <h2 class="text-lg font-medium text-gray-800 dark:text-white">
              My Need Volunteer Post
            </h2>

            <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              {volunteer.length} users
            </span>
          </div>

          <div class="flex flex-col mt-6">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  {volunteer.length > 0 ?
                  (<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
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
                          <span>Location</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button class="flex items-center gap-x-2">
                          <span>Deadline</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        No of volunteers needed
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
                                alt="thumbnail"
                              />
                              <div>
                                <h2 class="font-medium text-gray-800 dark:text-white ">
                                  {volunteer.title.substring(0, 20) + "....."}
                                </h2>
                                <p class="text-sm font-normal text-gray-600 dark:text-gray-400">
                                  {volunteer.description.substring(0, 20) +
                                    "....."}
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {volunteer.location}
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {new Date(volunteer.deadline).toLocaleDateString()}
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <span className="badge bg-emerald-500 text-white">
                            {volunteer.noOfVolunteersNeeded}
                          </span>{" "}
                          Volunteers Needed
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
                            <button
                              onClick={() => handleDelete(volunteer._id)}
                              class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </button>

                            <Link to={`/update/${volunteer._id}`}>
                              <button class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none mt-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="w-5 h-5"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                  />
                                </svg>
                              </button>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>) : <div className="flex justify-center"><img src="https://i.ibb.co/z87QRK7/empty.gif"></img></div>}
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-10">
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto text-center">
            <div className="mx-auto">
              <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                My Volunteer <span class="text-blue-500">Request Post</span>
              </h1>

              <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                Post your requests here! Share details about your project, time
                commitment, and required skills. Let's make a difference
                together in our community
              </p>
            </div>
          </div>
        </section>
        <section class="container px-4 mx-auto">
          <div class="flex items-center gap-x-3">
            <h2 class="text-lg font-medium text-gray-800 dark:text-white">
              My Volunteer Request Post
            </h2>

            <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              {reqVolunteer.length} users
            </span>
          </div>

          <div class="flex flex-col mt-6">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                {reqVolunteer.length > 0 ?
                  (<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead class="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Author</span>
                          </div>
                        </th>

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
                            <span>Status</span>
                          </button>
                        </th>

                        <th
                          scope="col"
                          class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <button class="flex items-center gap-x-2">
                            <span>Location</span>
                          </button>
                        </th>

                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <button class="flex items-center gap-x-2">
                            <span>Deadline</span>
                          </button>
                        </th>

                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Suggestion
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
                      {reqVolunteer.map((reqVolunteer) => (
                        <tr>
                          <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div class="inline-flex items-center gap-x-3">
                              <div class="flex items-center gap-x-2">
                                <img
                                  class="object-cover w-10 h-10 rounded-full"
                                  src={reqVolunteer.buyer.photo}
                                  alt="thumbnail"
                                />
                                <div>
                                  <h2 class="font-medium text-gray-800 dark:text-white ">
                                    {reqVolunteer.buyer.name}
                                  </h2>
                                  <p class="text-sm font-normal text-gray-600 dark:text-gray-400">
                                    {reqVolunteer.buyer.email}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div class="inline-flex items-center gap-x-3">
                              <div class="flex items-center gap-x-2">
                                <img
                                  class="object-cover w-10 h-10 rounded"
                                  src={reqVolunteer.thumbnail}
                                  alt="thumbnail"
                                />
                                <div>
                                  <h2 class="font-medium text-gray-800 dark:text-white ">
                                    {reqVolunteer.title.substring(0, 20) +
                                      "....."}
                                  </h2>
                                  <p class="text-sm font-normal text-gray-600 dark:text-gray-400">
                                    {reqVolunteer.description.substring(0, 20) +
                                      "....."}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                              <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                              <h2 class="text-sm font-normal text-emerald-500">
                                {reqVolunteer.status}
                              </h2>
                            </div>
                          </td>
                          <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {reqVolunteer.location}
                          </td>
                          <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {new Date(reqVolunteer.deadline).toLocaleDateString()}
                          </td>
                          <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <textarea
                              className="rounded border-gray-300 outline-none"
                              name=""
                              readOnly
                              id=""
                            >
                              {reqVolunteer.suggestion === ""
                                ? "No suggestion have"
                                : reqVolunteer.suggestion}
                            </textarea>
                          </td>
                          <td class="px-4 py-4 text-sm whitespace-nowrap">
                            <div class="flex items-center gap-x-2">
                              <p class="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                {reqVolunteer.category}
                              </p>
                            </div>
                          </td>
                          <td class="px-4 py-4 text-sm whitespace-nowrap">
                            <div class="flex items-center gap-x-6">
                              <button
                                onClick={() => handleCancel(reqVolunteer._id)}
                                class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
                              >
                                <span className="badge bg-red-500 text-white">
                                  Cancel
                                </span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>) : <div className="flex justify-center"><img src="https://i.ibb.co/z87QRK7/empty.gif"></img></div>}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ManagePost;
