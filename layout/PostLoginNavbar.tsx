import Image from "next/image";
import Link from "next/link";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { TbBeta } from "react-icons/tb";

import {

  ArrowRightEndOnRectangleIcon,
  QuestionMarkCircleIcon,

} from "@heroicons/react/24/outline";
import { redirect } from "next/navigation";


import { UserDetailsProps } from "@/interface/auth";
import GlobalSearchDialog from "./GlobalSearchDialog";
import { signOut } from "next-auth/react";
import NotificationIcon from "@/components/button/NotificationIcon";




const PostLoginNavbar: React.FC<UserDetailsProps> = async ({ userdetails }) => {
  //   const user = await getUser(userdetails?.id);
  return (
    <section className="bg-white z-50 w-full shadow-md border  h-[10px] sticky top-0 ">
   <nav
  className="bg-white flex justify-between items-center max-w-[85rem] px-3 md:px-5 mx-auto"
  style={{ height: "60px", minHeight: "60px" }}
>


      <div className="flex items-center space-x-4 lg:space-x-8 ">
        <Link className="text-xl flex items-end relative" href="/">
          <Image
            src="/assets/bluelogo.png"
            alt="Tayog"
            className=""
            width={124}
            height={32}
          />
          <div className="bg-primary-500 p-1 rounded-full absolute -right-3 -bottom-1">
            <TbBeta className=" font-bold text-sm text-white" />
          </div>
        </Link>
      </div>
      <div className="flex items-center  space-x-4 lg:space-x-4">
        <GlobalSearchDialog />
        {(userdetails != undefined || userdetails != null) && (
          <>
            <Link href="/notification">
              <NotificationIcon userId={userdetails?.id} />
            </Link>
            <PopoverGroup className="lg:flex lg:gap-x-12">
              <Popover className="relative">
                <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 rounded-full focus:outline-none">
                  <Image
                    className="inline-block h-9 w-9 rounded-full border-2 border-logoblue bg-[#FF8B30]"
                    src={userdetails?.image || "/assets/face.png"}
                    alt="profile_img"
                    width={20}
                    height={20}
                  />
                </PopoverButton>
                <Transition
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <PopoverPanel className="absolute -left-52 md:-left-72 top-full z-10 mt-6 w-screen max-w-[340px] overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-3">
                      <Link
                        href={
                          userdetails?.role == "organization"
                            ? `/organization/${userdetails?.uName}`
                            : `/profile/${userdetails?.uName}`
                        }
                      >
                        <div className="group relative flex items-center gap-x-6 rounded-2xl p-3 text-md leading-6 hover:bg-gray-50">
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gray-50 group-hover:bg-white">
                            <Image
                              className="inline-block h-10 w-10 rounded-full border-2 border-logoblue bg-[#FF8B30]"
                              src={userdetails?.image || "/assets/face.png"}
                              alt="profile_img"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div className="flex-auto text-sm">
                            <p className="mt-1 text-gray-600">
                              {userdetails?.name || "name"}{" "}
                            </p>
                            <p className="mt-0.5 text-primary-600">
                              View Profile
                            </p>
                          </div>
                        </div>
                      </Link>
                      <Link href={"/support"}>
                        <div className="group relative flex items-center gap-x-6 rounded-xl px-3 text-sm leading-6 hover:bg-gray-50">
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                            <QuestionMarkCircleIcon width={20} height={20} />
                          </div>
                          <div className="flex-auto">
                            <p className=" text-gray-600">Support</p>
                          </div>
                        </div>
                      </Link>
                      <form
                        action={async () => {
                          "use server";
                          await signOut();
                          redirect("/signin");
                        }}
                      >
                        <button
                          type="submit"
                          className="group relative flex items-center gap-x-6 rounded-xl px-3 text-sm leading-6 hover:bg-gray-50 w-full"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                            <ArrowRightEndOnRectangleIcon
                              width={20}
                              height={20}
                            />
                          </div>
                          <div className="flex-auto text-left">
                            <p className=" text-gray-600">Log out</p>
                          </div>
                        </button>
                      </form>
                    </div>
                  </PopoverPanel>
                </Transition>
              </Popover>
            </PopoverGroup>
          </>
        )}
      </div>
    </nav>
  </section>
  
  );
};

export default PostLoginNavbar;