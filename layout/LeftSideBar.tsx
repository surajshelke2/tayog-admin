"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  EllipsisHorizontalCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { USER_ADMIN } from "@/Constant/Uers";

export const leftSideLinks = [
  {
    icon: <HomeIcon width={24} height={24} />,
    label: "Home",
    route: "/",
  },
  {
    icon: <BriefcaseIcon width={24} height={24} />,
    label: "Opportunities",
    route: "/opportunities",
  },
  {
    icon: <ChatBubbleLeftRightIcon width={24} height={24} />,
    label: "Thoughts",
    route: "/thoughts",
  },
  {
    icon: <UserGroupIcon width={24} height={24} />,
    label: "Mentorship",
    route: "/mentorship",
  },
  {
    icon: <EllipsisHorizontalCircleIcon width={24} height={24} />,
    label: "Help",
    route: "/help",
  },
];

interface LeftSidebarProps {
  userdetails: {
    role: string;
  };
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ userdetails }) => {
  const pathname = usePathname();

  return (
    <section className="flex flex-col items-center h-screen bg-white shadow-md">
      <div className="flex flex-col items-center w-full gap-4 py-4">
        {leftSideLinks.map((link, index) => {
          const isActive = pathname === link.route;

          return (
            <Link href={link.route} key={index} className="w-full">
              <div
                className={`flex flex-col items-center justify-center w-full gap-1 py-2 rounded-lg ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-blue-400 hover:bg-blue-50"
                } transition`}
              >
                <div>{link.icon}</div>
                <p className="text-xs font-medium">{link.label}</p>
              </div>
            </Link>
          );
        })}

        {userdetails && userdetails.role === USER_ADMIN && (
          <Link href="/admin/users" className="w-full">
            <div
              className={`flex flex-col items-center justify-center w-full gap-1 py-2 rounded-lg ${
                pathname.includes("/admin/users")
                  ? "bg-blue-100 text-blue-600"
                  : "text-blue-400 hover:bg-blue-50"
              } transition`}
            >
              <div>
                <UsersIcon width={24} height={24} />
              </div>
              <p className="text-xs font-medium">All Users</p>
            </div>
          </Link>
        )}
      </div>
    </section>
  );
};

export default LeftSidebar;
