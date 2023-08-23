import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-2 bg-white h-16 px-4 lg:px-8 flex items-center justify-between">
      <Link href="/" passHref>
        <a className="flex items-center space-x-2">
          <img className="w-10 h-10" alt="" src="/houseline.svg" />
          <div className="flex flex-col">
            <div className="font-semibold text-lg">REIS</div>
            <div className="text-xs">Real Estate</div>
          </div>
        </a>
      </Link>
      <button className="lg:hidden">
        <img className="w-6 h-6" alt="" src="/notification.svg" />
      </button>
      {/* Mobile Navigation Menu */}
      <nav className="lg:hidden absolute top-16 left-0 right-0 bg-white border-t-2 border-gray-100">
        <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" href="#">HOME</a>
        <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" href="#">ABOUT US</a>
        <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" href="#">OUR AGENTS</a>
        <a className="block py-2 px-4 text-sm text-primary-700 font-semibold hover:bg-gray-100" href="#">PROPERTIES</a>
        <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" href="#">GALLERY</a>
        <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" href="#">BLOG</a>
        <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" href="#">CONTACT US</a>
        <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" href="#">SEARCH</a>
      </nav>
    </header>
  );
};

export default Header;

