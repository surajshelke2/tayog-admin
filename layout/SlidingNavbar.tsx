"use client";

import { Icon } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes, RefObject } from "react";

interface Section {
  title: string;
  icon: React.JSX.Element;
  ref: RefObject<HTMLDivElement> | undefined;
}

interface SideNavbarProps {
  scrollBorder: number;
  handleScroll: (elementRef: RefObject<HTMLDivElement>, index: number) => void;
  sections: Section[];
}

export default function SideNavbar({
  scrollBorder,
  handleScroll,
  sections,
}: SideNavbarProps) {
  return (
    <div className="sticky top-20 md:top-24 py-4 h-fit w-full md:w-44 lg:w-72 flex-none bg-[#f5f5f5] z-40">
      <div className="flex bg-white rounded-xl md:py-4  md:flex-col justify-between shadow-sm">
        {sections.map((section, index) => (
          <button
            key={index}
            className={`p-2.5 my-1 text-center flex items-center px-6 text-sm gap-x-4 md:border-l-4  ${
              scrollBorder === index + 1
                ? "md:border-primary-500 text-primary-600"
                : "border-white text-black"
            }`}
            onClick={() =>
              section && section?.ref && handleScroll(section.ref, index + 1)
            }
          >
            {section.icon}
            <div className="hidden md:block">{section.title}</div>
          </button>
        ))}
      </div>
    </div>
  );
}