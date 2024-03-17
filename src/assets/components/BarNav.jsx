import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { IconUser, IconAddressBook, IconHome, IconFileFilled, IconSettings } from "@tabler/icons-react";
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';




export default function BarNav() {
  const [t, i18n] = useTranslation()
  const currentLanguage = i18next.resolvedLanguage
  const [Theme, setTheme] = useState('dark')

  const handleLanguageToggle = () => {
    if (currentLanguage === 'en') {
      i18n.changeLanguage('es');

    } else if (currentLanguage === 'es') {
      i18n.changeLanguage('en');
    }
  }
  const handleToggleTheme = () => {
    if (Theme === 'dark') {
      document.documentElement.classList.remove('dark')
      setTheme('noDark')
    } else {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    }
  }

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-c-1 dark:bg-d-1 w-full fixed z-10">
          {({ open }) => (
            <>
              <div className="mx-auto p-2 max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="flex p-3 justify-between h-16 ">
                  <div>
                    <h1 className="text-c-4 dark:text-d-4 text-2xl font-bold">IA</h1>
                  </div>

                  {/* Navigation between components */}
                  <div className="hidden md:items-center md:block">
                    <ul className="gap-8 flex flex-row text-c-4 dark:text-d-4">

                      <li className="">
                        <Link className="w-full flex flex-col 
                          items-center hover:text-d-4 dark:hover:text-c-4" Link to={"/"}>
                          <IconHome />
                          <span className="" > {t("NavBar.Home")}</span>
                        </Link>
                      </li>

                      <li className="flex justify-center">

                        <Link className="w-full flex flex-col items-center
                           hover:text-d-4 dark:hover:text-c-4" to={"/about"}>
                          <IconUser /> <span> {t("NavBar.About")}</span>
                        </Link>

                      </li>

                      <li>
                        <Link className="w-full flex flex-col
                           items-center hover:text-d-4 dark:hover:text-c-4" to={"/projects"}>
                          <IconFileFilled className='' />
                          <span> {t("NavBar.Projects")}</span>
                        </Link>
                      </li>

                      <li>
                        <Link className="w-full flex flex-col
                           items-center hover:text-d-4 dark:hover:text-c-4" to={"/contact"}>
                          <IconAddressBook className="" />
                          <span> {t("NavBar.Contact")}</span>
                        </Link>
                      </li>

                    </ul>
                  </div>
                  {/* Menu bar */}
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">


                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center
                           rounded-full bg-gray-800 text-sm focus:outline-none ">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <IconSettings className="h-8 w-8 rounded-full text-c-4 dark:text-d-4" />


                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-transparent
                           backdrop-blur-2xl py-1 shadow-lg 
                          ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="flex justify-center items-center flex-wrap">

                              <label className="relative inline-flex items-center cursor-pointer">
                                <input className="sr-only peer" value="" type="checkbox" onChange={handleLanguageToggle} />
                                <div className="peer rounded-br-2xl rounded-tl-2xl outline-none 
                                   duration-100 after:duration-500 
                                   w-20 h-8 bg-c-2 dark:bg-d-2 peer-focus:outline-none peer-focus:ring-4 
                                 peer-focus:ring-c-4 dark:peer-focus:ring-d-4  after:content-['En'] 
                                   after:absolute after:outline-none after:rounded-br-xl after:rounded-tl-xl 
                                   after:h-6 after:w-8 after:bg-c-4 dark:after:bg-d-4 after:top-1 after:left-1 after:flex 
                                   after:justify-center after:items-center  after:text-c-1 dark:after:text-d-1 after:font-bold 
                                   peer-checked:after:translate-x-10 peer-checked:after:content-['Es'] 
                                 peer-checked:after:border-d-4">
                                </div>
                              </label>

                              <label className="ml-6 relative inline-flex items-center cursor-pointer">
                                <input className="sr-only peer" type="checkbox" onChange={handleToggleTheme} />
                                <div className="w-16 h-8 rounded-full ring-0 peer duration-500 outline-none 
                                bg-c-2 overflow-hidden before:flex before:items-center before:justify-center 
                                  after:flex after:items-center after:justify-center before:content-['☀️'] 
                                  before:absolute before:h-6 before:w-6 before:top-1/2 before:bg-c-4 
                                  before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all 
                                  before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 
                                  peer-checked:before:-translate-y- shadow-lg shadow-gray-400 
                                  peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] 
                                  after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full 
                                  after:top-[4px] after:right-1 after:translate-y-full after:w-6 after:h-6 
                                  after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 
                                  peer-checked:after:rotate-180 peer-checked:after:translate-y-0"
                                ></div>
                              </label>


                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md text-c-4
                     p-2 text-gray-400 hover:bg-gray-700  focus:outline-none focus:ring-1 focus:ring-c-4 focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  <ul className="grid grid-flow-col justify-self-center font-thin size-sm
                   gap-8 max-md:gap-2 text-c-4 max-md:text-sm">

                    <li className="">
                      <Link className="w-full flex flex-col items-center hover:text-d-4" Link to={"/"}>
                        <IconHome />
                        <span className="" > {t("NavBar.Home")}</span>
                      </Link>
                    </li>

                    <li className="flex justify-center">

                      <Link className="w-full flex flex-col items-center hover:text-d-4" to={"/about"}>
                        <IconUser /> <span> {t("NavBar.About")}</span>
                      </Link>

                    </li>

                    <li>
                      <Link className="w-full flex flex-col items-center hover:text-d-4" to={"/projects"}>
                        <IconFileFilled />
                        <span> {t("NavBar.Projects")}</span>
                      </Link>
                    </li>

                    <li>
                      <Link className="w-full flex flex-col items-center hover:text-d-4" to={"/contact"}>
                        <IconAddressBook className="" />
                        <span> {t("NavBar.Contact")}</span>
                      </Link>
                    </li>

                    <Menu as="div" className="relative">
                      <div>
                        <Menu.Button className="relative flex max-w-xs items-center 
                        rounded-full text-sm focus:outline-none
                         max-md:text-xs max-md:flex-col">


                          <IconSettings className="h-8 w-8 max-md:size-6 rounded-full text-c-4" />
                          <span>  {t("SideBar.Settings")} </span>

                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-transparent
                           backdrop-blur-2xl py-1 shadow-lg 
                          ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="flex justify-center items-center flex-wrap">

                            <label className="relative inline-flex items-center cursor-pointer">
                              <input className="sr-only peer" value="" type="checkbox" onChange={handleLanguageToggle} />
                              <div className="peer rounded-br-2xl rounded-tl-2xl outline-none 
                                   duration-100 after:duration-500 
                                   w-20 h-8 bg-c-2 dark:bg-d-2 peer-focus:outline-none peer-focus:ring-4 
                                 peer-focus:ring-c-4 dark:peer-focus:ring-d-4  after:content-['En'] 
                                   after:absolute after:outline-none after:rounded-br-xl after:rounded-tl-xl 
                                   after:h-6 after:w-8 after:bg-c-4 dark:after:bg-d-4 after:top-1 after:left-1 after:flex 
                                   after:justify-center after:items-center  after:text-c-1 after:font-bold dark:after:text-d-1  
                                   peer-checked:after:translate-x-10 peer-checked:after:content-['Es'] 
                                 peer-checked:after:border-d-4 dark:peer-checked:after:border-c-4">
                              </div>
                            </label>

                            <label className="ml-6 relative inline-flex items-center cursor-pointer">
                              <input className="sr-only peer" type="checkbox" onChange={handleToggleTheme} />
                              <div className="w-16 h-8 rounded-full ring-0 peer duration-500 outline-none 
                                bg-c-2 overflow-hidden before:flex before:items-center before:justify-center 
                                  after:flex after:items-center after:justify-center before:content-['☀️'] 
                                  before:absolute before:h-6 before:w-6 before:top-1/2 before:bg-c-4 
                                  before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all 
                                  before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 
                                  peer-checked:before:-translate-y- shadow-lg shadow-gray-400 
                                  peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] 
                                  after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full 
                                  after:top-[4px] after:right-1 after:translate-y-full after:w-6 after:h-6 
                                  after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 
                                  peer-checked:after:rotate-180 peer-checked:after:translate-y-0"
                              ></div>
                            </label>


                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>



                  </ul>
                </div>

              </Disclosure.Panel>
            </>
          )}
        </Disclosure>


      </div>
    </>
  )
}
