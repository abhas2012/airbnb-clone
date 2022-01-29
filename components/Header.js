import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UsersIcon,
  UserCircleIcon,
  MenuIcon,
} from "@heroicons/react/solid";
function Header() {
  return (
    <header className=" sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
      {/* left  */}
      <div className="relative flex items-center h-10 my-auto">
        <Image
          className="cursor-pointer"
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle  */}
      <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2 ">
        <input
          type="text"
          placeholder="Start your search"
          className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2" />
      </div>
      {/* right  */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex border-2 items-center p-2 space-x-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
