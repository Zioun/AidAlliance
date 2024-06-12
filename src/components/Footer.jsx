import React from "react";
("use client");
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const FooterBottom = () => {
  return (
    <Footer>
      <div className="w-full p-10 bg-slate-50">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="https://i.ibb.co/PmpGsm2/360-F-272398712-z28-EMWLb-M9-Y8zojg51t-LZo4-D8-Ju3-R7-EG-1.jpg"
              alt="Flowbite Logo"
              name="AidAlliance"
            />
          </div> 
          
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Page" />
              <Footer.LinkGroup col>
                <Footer.Link href="#"><Link to={"/"}>Home</Link></Footer.Link>
                <Footer.Link href="#"><Link to={"/need-volunteer"}>Need Volunteer Page</Link></Footer.Link>
                <Footer.Link href="#"><Link to={"/add-volunteer"}>Add Volunteer Page</Link></Footer.Link>
                <Footer.Link href="#"><Link to={"/manage-my-post"}>Manage My Post</Link></Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact info" />
              <Footer.LinkGroup col>
                <Footer.Link href="#"><div className="flex items-center gap-2"><span><MdOutlineEmail /></span> jionkhan0@gmail.com</div></Footer.Link>
                <Footer.Link href="#"><div className="flex items-center gap-2"><span><MdOutlineLocalPhone /></span> +880 1619971997</div></Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="AidAlliance" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterBottom;
