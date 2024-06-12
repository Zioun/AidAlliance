import React from "react";

const Services = () => {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            explore our <br /> awesome{" "}
            <span class="underline decoration-blue-500">Components</span>
          </h1>
          <p class="mt-4 text-gray-500 max-w-[1100px] xl:mt-6 dark:text-gray-300">
          Welcome to our comprehensive collection of components! Dive into our selection and discover the building blocks for your next project. From sleek and modern to classic and timeless, our components cater to a wide range of styles and needs. Whether you're a seasoned designer or just starting out, our diverse range ensures you'll find the perfect fit for your project. Explore our components now and bring your ideas to life!
          </p>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div class="space-y-3">
              <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                <h1 className="font-bold px-[3px]">01</h1>
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Explore Our Volunteer Opportunities
              </h1>

              <p class="text-gray-500 dark:text-gray-300">
              Discover a variety of meaningful volunteer opportunities in your community. Whether you're passionate about supporting the homeless, promoting literacy, or caring for the environment, there's a role for you.
              </p>
            </div>
            <div class="space-y-3">
              <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                <h1 className="font-bold px-[3px]">02</h1>
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Copy & Paste Components
              </h1>

              <p class="text-gray-500 dark:text-gray-300">
              Volunteer on your terms. With flexible scheduling options, it's easy to find volunteer opportunities that fit your busy lifestyle. Make a difference in your community on your own time.
              </p>
            </div>
            <div class="space-y-3">
              <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                <h1 className="font-bold px-[3px]">03</h1>
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Support Local Communities
              </h1>

              <p class="text-gray-500 dark:text-gray-300">
              Join us in making a positive impact in your community. Volunteer your time and skills to support local initiatives and make a difference where it's needed most.
              </p>
            </div>
            <div class="space-y-3">
              <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                <h1 className="font-bold px-[3px]">04</h1>
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Explore Diverse Roles

              </h1>

              <p class="text-gray-500 dark:text-gray-300">
              Become part of our volunteer team and explore a variety of fulfilling roles. From event planning to direct service, there's something for everyone. Join us and make a difference today.
              </p>
            </div>
            <div class="space-y-3">
              <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                <h1 className="font-bold px-[3px]">05</h1>
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Volunteer for a Cause
              </h1>

              <p class="text-gray-500 dark:text-gray-300">
              Support those in need by volunteering your time and expertise. Whether it's helping the homeless, supporting mental health, or assisting with disaster relief, your efforts can change lives.
              </p>
            </div>
            <div class="space-y-3">
              <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                <h1 className="font-bold px-[3px]">06</h1>
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Make a Positive Impact
              </h1>

              <p class="text-gray-500 dark:text-gray-300">
              Ready to get started? Begin your volunteer journey today and make a positive impact in your community. Your time and effort can make a world of difference.
              </p>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Services;
