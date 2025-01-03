"use client";

import { RightSideNavigationProps } from "@/interface/layout";
import { PencilIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RightSideNavigation: React.FC<RightSideNavigationProps> = ({
  links,
  reference,
  referenceLink,
}) => {
  const pathname = usePathname();
  return (
    <div className="z-50 md:z-0 sticky top-[4.4rem] py-4 md:pt-0 md:top-24 h-fit  w-full md:flex-none flex flex-col gap-3 lg:w-72 bg-[#f5f5f5]">
      <div className="flex bg-white rounded-xl md:py-4  md:flex-col justify-between shadow-sm">
        {links.map((link) => {
          const isActive = pathname == link.route;
          return (
            <Link
              key={link.label}
              href={link.route}
              className={`p-2.5 my-1 text-center flex items-center px-6 text-sm gap-x-4 md:border-l-4  ${
                isActive
                  ? "md:border-primary-500 text-primary-600"
                  : "border-white text-black"
              }`}
            >
              {isActive ? <>{link.active}</> : <>{link.icon}</>}

              <div className="hidden md:block">{link.label}</div>
            </Link>
          );
        })}
      </div>

      {reference && (
        <div className="bg-white md:px-2.5 md:py-3 rounded-xl">
          <Link
            href={referenceLink || "#"}
            className={` py-2.5 px-4 flex items-center justify-center gap-x-4 text-sm text-center font-medium border border-primary-600 rounded-xl shadow-medium  ${
              pathname.includes(referenceLink || "")
                ? "bg-white text-primary-600"
                : "bg-primary-600 text-white hover:bg-primary-500"
            }`}
          >
            <PencilIcon height={20} width={20} />
            <div className="">{reference} </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default RightSideNavigation;