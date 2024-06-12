import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const UpdateVolunteer = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const volunteer = useLoaderData();
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const thumbnail = form.thumbnail.value;
    const title = form.title.value;
    const deadline = startDate;
    const category = form.category.value;
    const location = form.location.value;
    const noOfVolunteersNeeded = form.noOfVolunteersNeeded.value;
    const description = form.description.value;
    if(thumbnail === '' || title === '' || deadline === '' || category === '' || location === '' || noOfVolunteersNeeded === '' || description === ''){
      return toast.error("Input Can't be empty")
    }
    if(noOfVolunteersNeeded < 1 ){
      return toast.error("No of volunteers can't be less than 1")
    }
    const volunteerData = {
      thumbnail,
      title,
      deadline,
      category,
      location,
      noOfVolunteersNeeded,
      description,
      buyer: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    };
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/update/${volunteer._id}`,
        volunteerData
      );
      console.log(data);
      Swal.fire({
        title: "Success!",
        text: "Volunteer update Successfully!",
        icon: "success"
      });
      navigate("/manage-my-post");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 border my-10">
      <div className="flex justify-center">
        <img
          src="https://i.ibb.co/p0NXrrF/speech-bubble-with-text-new-update-545399-2045-1.jpg"
          alt=""
        />
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
              type="text"
              defaultValue={volunteer.thumbnail}
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
              defaultValue={volunteer.title}
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Category">
              Category
            </label>
            <br />
            <select
              name="category"
              id="category"
              defaultValue={volunteer.category}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Social Service">Social Service</option>
              <option value="Animal Welfare">Animal Welfare</option>
            </select>
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="password">
              Location
            </label>
            <input
              id="password"
              type="text"
              name="location"
              defaultValue={volunteer.location}
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="password">
              No. of volunteers needed
            </label>
            <input
              id="password"
              type="number"
              name="noOfVolunteersNeeded"
              defaultValue={volunteer.noOfVolunteersNeeded}
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div className="flex flex-col">
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="Deadline"
            >
              Deadline
            </label>
            <DatePicker
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
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
              defaultValue={volunteer.description}
              class="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            ></textarea>

            <p class="mt-3 text-xs text-gray-400 dark:text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
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
                  value={user?.displayName}
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
                  value={user.email}
                  disabled
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring text-[13px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-end mt-6">
          <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Update Volunteer
          </button>
        </div>
      </form>
    </section>
  );
};

export default UpdateVolunteer;
