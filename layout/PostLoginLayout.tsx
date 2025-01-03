import PostLoginNavbar from "@/layout/PostLoginNavbar";

import LeftSideBar from "./LeftSideBar";
import { PostLoginLayoutProps } from "@/interface/layout";

const PostLoginLayout: React.FC<PostLoginLayoutProps> = ({
  children,
  userdetails,
}) => {
  return (
    <div className="w-full bg-neutral-100 h-full flex min-h-screen flex-col  mx-auto">
      <PostLoginNavbar userdetails={userdetails} />

      <div className="flex flex-col-reverse md:flex-row w-full h-full max-w-[85rem] mx-auto gap-6 px-3 md:p-5">
        <LeftSideBar userdetails={userdetails}/>
        {children}
      </div>
      {/* <LeftSideBar userdetails={userdetails} className="sticky bottom-0 flex w-full justify-evenly gap-5 border-t bg-card p-2 sm:hidden" /> */}
    </div>
  );
};

export default PostLoginLayout;