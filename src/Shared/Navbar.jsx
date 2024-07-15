import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

const navItems = [
  { route: 'Home', pathname: '/' },
  { route: 'Add Blog', pathname: '/add-blog' },
  { route: 'My Blog', pathname: '/my-blog' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="flex flex-col">
      <nav className=" text-black border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 ">
            <div className="flex items-center">
              <div className="flex-shrink-0 cursor-pointer">
                <Link to="/">
                <h2 className='text-2xl font-bold'>BlogApp</h2>
                  
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-7">
                {navItems.map((item) => (
                  <Link
                    key={item.pathname}
                    to={item.pathname}
                    className="hover:text-secondary font-semibold text-lg hover:underline"
                  >
                    {item.route}
                  </Link>
                ))}
              </div>
            </div>
            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={handleDrawerToggle}
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {mobileOpen ? (
                  <FaTimes className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <FaBars className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          direction="right"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4">
              <img className="h-10" src="" alt="favicon" />
              <button
                onClick={handleDrawerToggle}
                className="bg-secondary text-black p-2 rounded-md"
              >
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-col mt-3 divide-y">
              {navItems.map((item) => (
                <Link
                  key={item.pathname}
                  to={item.pathname}
                  className="mt-2 px-3 py-2 text-black text-base font-medium"
                  onClick={handleDrawerToggle}
                >
                  {item.route}
                </Link>
              ))}
            </div>
          </div>
        </Drawer>
      </nav>
    </div>
  );
}

export default Navbar;
