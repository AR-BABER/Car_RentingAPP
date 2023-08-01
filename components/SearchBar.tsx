"use client";
import React from "react";
import SearchManu from "./SearchManu";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

function SearchBar() {
  const [Smanufecturar, setmanufecturar] = useState("");
  const [model, setmodel] = useState("");
  const router = useRouter();

  const handelSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Smanufecturar === "" && model === "") {
      return alert("please fill the search");
    }
    updateSearchParams(model.toLowerCase(), Smanufecturar.toLowerCase());
  };
  const updateSearchParams = (model: string, Smanufecturar: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (Smanufecturar) {
      searchParams.set("manufacturer", Smanufecturar);
    } else {
      searchParams.delete("manufacturer");
    }
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    console.log(newPathname);

    router.push(`${newPathname}#searchbar`);
  };

  return (
    <form id="searchbar" className="searchbar" onSubmit={handelSearch}>
      <div className="searchbar__item">
        <SearchManu
          Smanufecturar={Smanufecturar}
          setmanufecturar={setmanufecturar}
        />
        <SearchButton otherclasses="sm:hidden" />
      </div>
      {/* first search input ended  */}

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] m-4"
          alt="car"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setmodel(e.target.value)}
          placeholder="Baber's Mehran"
          className="searchbar__input"
        />
        <SearchButton otherclasses="sm:hidden" />
      </div>
      <SearchButton otherclasses="max-sm:hidden" />
    </form>
  );
}

const SearchButton = ({ otherclasses }: { otherclasses: string }) => (
  <button type="submit" className={`-ml z-10 ${otherclasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="mg"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

export default SearchBar;
