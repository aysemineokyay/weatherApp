import { MdOutlineSort } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="w-full h-12 bg-neutral-200 flex justify-around items-center">
      <a href="#" className="font-bold">
        Hava Durumu Sorgulama
      </a>
      <button className="bg-blue-400 p-2 rounded-md">
        <MdOutlineSort />
      </button>
    </div>
  );
};

export default Navbar;
