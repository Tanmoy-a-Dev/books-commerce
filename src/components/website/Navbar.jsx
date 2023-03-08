import Link from 'next/link';
export default function Navbar({ genres }) {
  // console.log(genres);
  return (
    <nav className="flex w-2/4 mx-auto justify-center space-x-12 font-semibold ">
      {/* genres */}
      <div id="genres" className="group">
        <button className="text-xl text-borderColor font-light">Genres</button>
        <div className="absolute top-[10vh] left-0 right-0 flex-wrap md:w-[36rem] h-[30rem] bg-darker_Color shadow-inner shadow-body_Color rounded-lg px-5 py-4 mx-auto genre_subMenu hidden flex">
          {genres &&
            genres.map((genre, index) => (
              <Link
                href={`/genres/${genre.toLowerCase()}`}
                legacyBehavior
                key={index}
              >
                <a className="flex-1 md:basis-1/4 basis-1/3 my-1 mx-2 ">
                  {genre}
                </a>
              </Link>
            ))}
        </div>
      </div>
      {/* blogs */}
      <div id="blogs" className="text-xl text-borderColor font-light">
        <button>Blogs</button>
      </div>
    </nav>
  );
}
