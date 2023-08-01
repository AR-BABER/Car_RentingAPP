"use client";
import React from "react";
import { useState, Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { CustomeFilter } from "@/types";
import { text } from "stream/consumers";
import { type } from "os";
import { updateSearchParams } from "@/utils";
function CustomFilter({ title, options }: CustomeFilter) {
  const [selected, setselected] = useState(options[0]);
  const router = useRouter();

  const handleUpdateP = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLocaleLowerCase());

    router.push(`${newPathName}#searchbar`);
  };
  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setselected(e);
          handleUpdateP(e);
        }}
      >
        <div className=" relative w-fit z-10">
          <div className="relative w-fit z-10">
            <Listbox.Button className="custom-filter__btn">
              <span className="block truncate">{selected.title}</span>
              <Image
                src="/chevron-up-down.svg"
                width={20}
                height={20}
                className="ml-4 object-contain"
                alt="chvron"
              />
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="trasition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="custom-filter__options">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.title}
                    value={option}
                    className={({ active }) => `relative cursor-default
                     select-none py-2 px-4 
                     ${
                       active ? "bg-primary-blue text-white" : "text-gray-900"
                     }`}
                  >
                    {({ selected }) => (
                      <span
                        className={`block truncate ${
                          selected ? "font-medium font-serif" : `font-normal`
                        }`}
                      >
                        {option.title}
                      </span>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      </Listbox>
    </div>
  );
}

export default CustomFilter;
