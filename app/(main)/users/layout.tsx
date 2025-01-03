

import { Metadata } from "next";
import { HiArrowTrendingUp, HiOutlineUserPlus, HiUserPlus } from "react-icons/hi2";

import RightSideNavigation from "@/layout/RightSideNavigation";

export const metadata: Metadata = {
    title: "Admin All Users",
    robots: {
        follow: true,
        index: false
    }
};

const linksForAdmin = [
    {
        label: "All Users",
        icon: <HiOutlineUserPlus className="h-5 w-5" />,
        route: "/admin/users",
        active: <HiUserPlus className="h-5 w-5" />,
    },
    {
        label: "Analytics",
        icon: <HiArrowTrendingUp className="h-5 w-5"  />,
        route: "/admin/users/analytics",
        active: <HiArrowTrendingUp className="h-5 w-5"  />,
    },
];

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex flex-col-reverse md:flex-row w-full gap-2 md:gap-6">
            <div className="w-full md:min-h-fit min-h-[60vh]">{children}</div>
        
        </main>
    );
}