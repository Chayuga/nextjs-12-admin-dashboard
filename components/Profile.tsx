import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

import imgUrl from "../public/assets/profile_1.png";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const Profile = () => (
    <Menu as="div" className="relative inline-block text-left">
        <div>
            <Menu.Button className="flex items-center justify-center gap-2">
                <div className="hidden tablet:flex flex-col items-end leading-tight">
                    <h2 className="text-sm tablet:text-sm lg:text-lg xl:text-xl">
                        Rodgers Chayuga
                    </h2>
                    <p className="hidden desktop:flex text-xs lg:text-md text-gray-light">
                        chayugarodgers@gmail.com
                    </p>
                </div>
                <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-profile-border-radius overflow-hidden">
                    <Image
                        src={imgUrl}
                        alt="user profile photo"
                        width={500}
                        height={500}
                    />
                </span>
                <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5"
                    aria-hidden="true"
                />
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
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-light rounded-border-radius-2 bg-white shadow-lg ring-1 ring-light ring-opacity-5 focus:outline-none">
                <div className="flex tablet:hidden py-1 bg-gray-100 rounded-t-md">
                    <Menu.Item>
                        <div className="flex flex-col items-start leading-tight  px-4 py-2 text-sm">
                            <span className="text-xs tablet:text-md desktop:text-lg xl:text-xl">
                                Rodgers Chayuga
                            </span>
                            <span className="block desktop:hidden text-xs lg:text-md text-gray-light">
                                chayugarodgers@gmail.com
                            </span>
                        </div>
                    </Menu.Item>
                </div>
                <div className="py-1 hover:bg-light hover:text-gray-dark">
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                type="button"
                                className={classNames(
                                    active
                                        ? "bg-light text-gray-900"
                                        : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                )}
                            >
                                Edit
                            </button>
                        )}
                    </Menu.Item>
                </div>
                <div className="py-1 hover:bg-light hover:text-gray-dark">
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                type="button"
                                className={classNames(
                                    active
                                        ? "bg-light text-gray-900"
                                        : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                )}
                            >
                                Move
                            </button>
                        )}
                    </Menu.Item>
                </div>
                <div className="py-1 hover:bg-light hover:text-gray-dark">
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                type="button"
                                className={classNames(
                                    active
                                        ? "bg-light text-gray-900"
                                        : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                )}
                            >
                                Share
                            </button>
                        )}
                    </Menu.Item>
                </div>
                <div className="py-1 hover:bg-danger rounded-b-border-radius-2">
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                type="button"
                                className={classNames(
                                    active ? " text-white" : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                )}
                            >
                                Sign Out
                            </button>
                        )}
                    </Menu.Item>
                </div>
            </Menu.Items>
        </Transition>
    </Menu>
);

export default Profile;
