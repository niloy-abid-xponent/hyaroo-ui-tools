import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navItems = [
  {
    name: "Component",
    href: "#",
  },
  {
    name: "Documentation",
    href: "#",
  },
  {
    name: "Search",
    href: "#",
  },
  {
    name: "Account",
    href: "/about",
  },
];

export default function Header() {
  return (
    <div>
      <header>
        <Popover className="relative bg-white">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-24 border-b-[1px]">
            {/* <div className="border-b-2"> */}
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <a className="flex items-center">
                  <span className="sr-only">Hyaroo</span>
                  <Image
                    src="/img/logo-alternate.svg"
                    alt="hyaroo"
                    className="h-8 w-auto sm:h-10"
                    width={98}
                    height={24}
                    priority="true"
                  />
                </a>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-900 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-5">
              {navItems.map((nav) => (
                <Link href={nav.href} key={nav.href}>
                  <a className="text-sm font-medium text-slate-500 hover:text-slate-700 ">
                    {nav.name}
                  </a>
                </Link>
              ))}
            </Popover.Group>
            {/* <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link href="/jobs">
                <a className="rounded-md shadow bg-transparent border border-white font-normal text-white text-base hover:text-opacity-80 transition py-2 px-4 mr-2">
                  Log in
                </a>
              </Link>
              <Link href="/jobs">
                <a className="rounded-md font-normal shadow bg-secondary text-white text-base hover:opacity-80 transition py-2 px-4">
                  Sign Up
                </a>
              </Link>
            </div> */}
            {/* </div> */}
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <Image
                        className="h-8 w-auto"
                        src="/img/logo-alternate.svg"
                        alt="xponent ctg"
                        width={162}
                        height={40}
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-primary hover:text-secondary hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="pb-5 px-5">
                  <Popover.Group
                    as="nav"
                    className="flex flex-col flex-wrap md:hidden "
                  >
                    {navItems.map((nav) => (
                      <Link href={nav.href} key={nav.href}>
                        <a className="text-lg py-2 border-b border-gray-100 font-medium text-gray-800 hover:text-primary">
                          {nav.name}
                        </a>
                      </Link>
                    ))}
                  </Popover.Group>

                  {/* <div className="mt-6">
                    <div className="flex flex-wrap items-center justify-start">
                      <Link href="/jobs">
                        <a className="rounded-md shadow bg-primary border border-white font-normal text-white text-base hover:text-opacity-80 transition py-2 px-4 mr-2">
                          Log in
                        </a>
                      </Link>
                      <Link href="/jobs">
                        <a className="rounded-md font-normal shadow bg-secondary text-white text-base hover:opacity-80 transition py-2 px-4">
                          Sign Up
                        </a>
                      </Link>
                    </div>
                  </div> */}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </header>
    </div>
  );
}
