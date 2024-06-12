import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AppliedPost = () => {
  const { user } = useContext(AuthContext);
  const [reqVolunteer, setReqVolunteer] = useState([]);

  useEffect(() => {
    reqgetData();
  }, []);

  const reqgetData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/applied-post`
    );
    // Filter the data by buyer email
    const filteredData = data.filter((item) => item.buyer.email === user.email);
    setReqVolunteer(filteredData);
  };

  return (
    <>
      <div className="container m-auto pb-5 px-6">
        <div className="mt-10">
          <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto text-center">
              <div className="mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                  Public <span className="text-blue-500">Volunteer Request</span>
                </h1>

                <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                  We invite you to join our team of dedicated volunteers at AidAlliance! Your support is crucial in helping us achieve our mission and make a lasting impact in our community.
                </p>
              </div>
            </div>
          </section>
          <section className="container px-4 mx-auto">
            <div className="flex items-center gap-x-3">
              <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                Public Request
              </h2>

              <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                {reqVolunteer.length} users
              </span>
            </div>

            <div className="flex flex-col mt-6">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            <div className="flex items-center gap-x-3">
                              <span>Name</span>
                            </div>
                          </th>

                          <th
                            scope="col"
                            className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            <div className="flex items-center gap-x-3">
                              <span>Post</span>
                            </div>
                          </th>

                          <th
                            scope="col"
                            className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            <button className="flex items-center gap-x-2">
                              <span>Status</span>
                            </button>
                          </th>

                          <th
                            scope="col"
                            className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            <button className="flex items-center gap-x-2">
                              <span>Location</span>
                            </button>
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            <button className="flex items-center gap-x-2">
                              <span>Deadline</span>
                            </button>
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Suggestion
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Category
                          </th>

                          <th scope="col" className="relative py-3.5 px-4">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                        {reqVolunteer.map((reqVolunteer) => (
                          <tr key={reqVolunteer._id}>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="inline-flex items-center gap-x-3">
                                <div className="flex items-center gap-x-2">
                                  <img
                                    className="object-cover w-10 h-10 rounded-full"
                                    src={reqVolunteer.photo}
                                    alt="thumbnail"
                                  />
                                  <div>
                                    <h2 className="font-medium text-gray-800 dark:text-white">
                                      {reqVolunteer.name}
                                    </h2>
                                    <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                      {reqVolunteer.email}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="inline-flex items-center gap-x-3">
                                <div className="flex items-center gap-x-2">
                                  <img
                                    className="object-cover w-10 h-10 rounded"
                                    src={reqVolunteer.thumbnail}
                                    alt="thumbnail"
                                  />
                                  <div>
                                    <h2 className="font-medium text-gray-800 dark:text-white">
                                      {reqVolunteer.title.substring(0, 20) +
                                        "....."}
                                    </h2>
                                    <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                      {reqVolunteer.description.substring(
                                        0,
                                        20
                                      ) + "....."}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                                <h2 className="text-sm font-normal text-emerald-500">
                                  {reqVolunteer.status}
                                </h2>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {reqVolunteer.location}
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {new Date(
                                reqVolunteer.deadline
                              ).toLocaleDateString()}
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
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
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <div className="flex items-center gap-x-2">
                                <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                  {reqVolunteer.category}
                                </p>
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
        </div>
      </div>
    </>
  );
};

export default AppliedPost;
