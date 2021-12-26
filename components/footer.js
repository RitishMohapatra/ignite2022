import Timer from "./Timer";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai"; 

function footer() {
  let date = new Date();
  let year = date.getFullYear();
  const submitForm = () => {
    window.open(
      `mailto:ignite@nmims.edu.in?subject=${encodeURIComponent(
        "Queries"
      )}&body=${encodeURIComponent("name")} (${encodeURIComponent(
        "email"
      )}): ${encodeURIComponent("message")}`
    );
  };
  return (
    <div className="w-full bg-black text-white">
      <div className="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
        <div className="w-full pt-12 flex flex-col sm:flex-row space-y-2 space-x-5 justify-around">
          <div className="w-full sm:w-2/5 pr-6 flex flex-row space-y-2 ">
            <object
              type="image/svg+xml"
              data="/logo/fire.svg"
              className="h-24 md:h-26 lg:h-32"
            />
            <div className="pt-8 pl-2 md:ml-5  ">
            <Timer
						hideYear={true}
            hideSecond={true}
						titlePosition='bottom'
						size='extra-small'
						endAt={'2022-03-20 01:26:58'} // Date/Time
					/>
          </div>

          </div>
          <hr className="md:hidden p-2 m-2 text-gray-500 "/>

          <div className="w-full sm:w-1/5 flex flex-col space-y-4 ">
            <a className="cursor-pointer">About</a>
            <a className="cursor-pointer">Site Map</a>
            <a className="cursor-pointer">Privacy Policy</a>
            <a className="cursor-pointer">Gallery</a>
            <a className="cursor-pointer">Team</a>
          </div>
          <hr className="md:hidden p-2 m-2 text-gray-500 "/>

          <div className="w-full sm:w-1/5 flex flex-col space-y-4">
            <h1 className=" font-bold">Contact Us</h1>

            <a className="flex ">
              <object
                type="image/svg+xml"
                data="/logo/navigation.svg"
                className="h-6 md:h-5 lg:h-6 m-1"
              />
              Plot No. 2, Pethapada, Next to Ramsheth Thakur College, Sector 33,
              Kharghar, Navi Mumbai, Maharashtra 410210
            </a>
            <a className="flex cursor-pointer" onClick={submitForm}>
              <object
                type="image/svg+xml"
                data="/logo/mail.svg"
                className="h-6 md:h-5 lg:h-6 m-1 cursor-pointer "
              />
              ignite@nmims.edu.in
            </a>
          </div>
          <hr className="md:hidden p-2 m-2 text-gray-500 "/>

          <div className="w-full sm:w-1/5 flex flex-col  md:pl-10 ">
            <h1 className=" font-bold  ">Follow Us </h1>
            <div className="flex mt-5 space-x-2 ">
              <a href="https://www.instagram.com/nmignite/" target="_blank"><AiFillInstagram className="cursor:pointer text-yellow-300 text-4xl "/></a>
              <a href="https://www.facebook.com/IGNITE19-295843527720790"  target="_blank"><AiFillFacebook  className="cursor:pointer text-yellow-300 text-4xl" /></a>
              <a href="https://twitter.com/nmignite" target="_blank"><AiFillTwitterSquare  className="cursor:pointer text-yellow-300 text-4xl" /></a>
              <a href="https://www.youtube.com/channel/UCNxk4RPg_wm0A_4v3dmji4w" target="_blank"><AiFillYoutube  className="cursor:pointer text-yellow-300 text-4xl" /></a>
              </div>
            
          </div>

        </div>
        <div className="opacity-60 pt-2">
          <p>© {year} All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default footer;
