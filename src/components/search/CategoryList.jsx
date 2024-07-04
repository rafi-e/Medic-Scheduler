import React, { useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../shadcn/ui/command";
import { categoryList } from "../../data/data";
import { Link, useLocation } from "react-router-dom";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

export default function CategoryList({
  showCategoryList,
  setShowCategoryList,
}) {
  const location = useLocation();
  const params = location.pathname;
  const category = params.split("/")[2];

  const handleClick = () => {
    window.scrollTo(0, 0); // scroll to top of the page
  };

  return (
    <>
      <div className="lg:w-60 fixed">
        <div
          className={`h-screen  lg:flex flex-col border-r-2 ${
            showCategoryList ? "flex" : "hidden"
          }`}
        >
          <Command className="pt-3">
            <CommandInput placeholder="Search Category..." />
            <CommandList className="overflow-visible">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {categoryList &&
                  categoryList.map((item, index) => (
                    <CommandItem key={index}>
                      <Link
                        to={`/search/${item.name.toLowerCase()}`}
                        onClick={handleClick()}
                        className={`w-full p-2 flex gap-2 text-[14px] text-blue-600 items-center rounded-md cursor-pointer ${
                          category == item.name.toLowerCase() && "bg-blue-200"
                        }`}
                      >
                        <img
                          src={item.image}
                          alt="icon"
                          width={20}
                          height={20}
                        />
                        <label>{item.name}</label>
                      </Link>
                    </CommandItem>
                  ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
        {showCategoryList ? (
          <div
            onClick={() => setShowCategoryList(false)}
            className="p-2 absolute top-14 left-52 lg:left-60 lg:hidden rounded-r-lg border-2 border-l-0 bg-white hover:bg-primary text-primary hover:text-white cursor-pointer"
          >
            <ChevronsLeft />
          </div>
        ) : (
          <div
            onClick={() => setShowCategoryList(true)}
            className="p-2 absolute top-14 left-0 lg:left-60 lg:hidden rounded-r-lg border-2 border-l-0 bg-white hover:bg-primary text-primary hover:text-white cursor-pointer"
          >
            <ChevronsRight />
          </div>
        )}
      </div>
    </>
  );
}
