import Navbar from './Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Header({ genres }) {
  return (
    <header className="flex justify-around bg-darker_Color mx-auto h-[15vh] text-slate-200  items-center px-4 font-primary ">
      {/* logo */}
      <div id="logo" className="">
        <Link href={`/`}>
          <Image
            src={`/images/site_logo.png`}
            alt="Site Logo"
            width={80}
            height={50}
            className="logo"
          />
        </Link>
      </div>
      {/* navbar */}
      <Navbar genres={genres} />
      {/* searchBar */}
      <div id="searchBar" className="basis-[25%] mr-6">
        <form className="">
          <input
            type="text"
            id="search"
            name="searchBar"
            className=" rounded-lg border-2 border-slate-300 focus-within:border-blue-400 focus-within:outline-none px-2 bg-transparent w-full "
            placeholder="Enter Author, Title or ISBN to search"
          />
        </form>
      </div>
      {/* signIn or profile */}
      <div id="authDivision" className="ml-2">
        <button className="border-2 px-3 py-1 rounded-md border-slate-300">
          SignIn
        </button>
      </div>
    </header>
  );
}
