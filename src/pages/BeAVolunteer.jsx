import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const BeAVolunteer = () => {
  const { user } = useContext(AuthContext);
  const volunteer = useLoaderData();
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const thumbnail = form.thumbnail.value;
    const title = form.title.value;
    const deadline = form.deadline.value;
    const category = form.category.value;
    const location = form.location.value;
    const suggestion = form.suggestion.value;
    const status = form.status.value;
    const noOfVolunteersNeeded = form.noVolunteer.value;
    const description = form.description.value;
    const volunteerData = {
      thumbnail,
      title,
      deadline,
      category,
      suggestion,
      location,
      noOfVolunteersNeeded,
      description,
      status,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      buyer: {
        email: volunteer.buyer.email,
        name: volunteer.buyer.name,
        photo: volunteer.buyer.photo,
      },
    };
    if(volunteer.buyer.email === user.email){
      return toast.error("You can't be volunteer in your posts!");
    }
      
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/beavollunteer`,
        volunteerData
      );
      console.log(data);
      toast.success("Volunteer request added Successfully!");
      navigate("/need-volunteer");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 border my-10">
      <div className="flex justify-center">
        <img src="https://i.ibb.co/bQ8RfZZ/amrc-vbanner-1.png" alt="profile" />
      </div>
      

      <form onSubmit={handleFormSubmit}>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Thumbnail">
              Thumbnail
            </label>
            <input
              id="Thumbnail"
              name="thumbnail"
              readOnly
              defaultValue={volunteer.thumbnail}
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Post Title">
              Post Title
            </label>
            <input
              id="Post Title"
              name="title"
              type="text"
              readOnly
              defaultValue={volunteer.title}
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="category">
              Category
            </label>
            <input
              id="category"
              name="category"
              type="text"
              readOnly
              defaultValue={volunteer.category}
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="password">
              Location
            </label>
            <input
              id="password"
              type="text"
              readOnly
              name="location"
              defaultValue={volunteer.location}
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="password">
              No of Volunteers Needed
            </label>
            <input
              id="password"
              type="text"
              readOnly
              name="noVolunteer"
              defaultValue={volunteer.noOfVolunteersNeeded}
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="password">
              Deadline
            </label>
            <input
              id="password"
              type="text"
              readOnly
              name="deadline"
              defaultValue={new Date(volunteer.deadline).toLocaleDateString()}
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              class="text-gray-700 dark:text-gray-200"
              for="Organizer email"
            >
              Suggestion
            </label>

            <textarea
              placeholder="Suggestion..."
              name="suggestion"
              class="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            ></textarea>
          </div>

          <div>
            <label
              class="text-gray-700 dark:text-gray-200"
              for="Organizer email"
            >
              Description
            </label>

            <textarea
              placeholder="Description..."
              name="description"
              readOnly
              defaultValue={volunteer.description}
              class="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            ></textarea>
          </div>
          <div className="bg-slate-100 rounded-md p-5">
            <div className="flex justify-center">
              <img
                className="rounded-full h-[100px] w-[100px] object-cover"
                src={user?.photoURL}
                alt="profile image"
              />
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-center text-[13px]">
                <label class="text-gray-700 dark:text-gray-200" for="User name">
                  User name
                </label>
                <input
                  id="User name"
                  type="text"
                  disabled
                  value={user?.displayName}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring text-[13px]"
                />
              </div>

              <div className="text-center text-[13px]">
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="User email"
                >
                  User email
                </label>
                <input
                  id="User email"
                  type="email"
                  value={user.email}
                  disabled
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring text-[13px]"
                />
              </div>
            </div>
          </div>
          <div className="bg-slate-100 rounded-md p-5">
            <div className="flex justify-center">
              <img
                className="rounded-full h-[100px] w-[100px] object-cover"
                src={volunteer.buyer.photo}
                alt="profile image"
              />
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-center text-[13px]">
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="Organizer name"
                >
                  Organizer name
                </label>
                <input
                  id="Organizer name"
                  type="text"
                  disabled
                  value={volunteer.buyer.name}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring text-[13px]"
                />
              </div>

              <div className="text-center text-[13px]">
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="Organizer email"
                >
                  Organizer email
                </label>
                <input
                  id="Organizer email"
                  type="email"
                  value={volunteer.buyer.email}
                  disabled
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring text-[13px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <label class="text-gray-700 dark:text-gray-200" for="Post Title">
            Status
          </label>
          <input
            id="Post Title"
            name="status"
            type="text"
            value="requested"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>

        <div class="flex justify-end mt-6">
          <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Request Volunteer
          </button>
        </div>
      </form>
    </section>
  );
};

export default BeAVolunteer;
