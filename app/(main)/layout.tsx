
import { User } from "@/interface/auth";
import PostLoginLayout from "@/layout/PostLoginLayout";
import { getServerSession, Session } from "next-auth";
import authOptions from "../lib/auth";


export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session: Session | null = await getServerSession(authOptions);
  const user: User = session?.user as User;
  return(
    
   <PostLoginLayout userdetails={user}>{children}</PostLoginLayout>
   
   );
}