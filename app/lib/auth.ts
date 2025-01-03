import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    jwt: async ({ token, user}:any) => {
      if (user) {
        console.log(user);
        token.userId = token.sub;
      }
      return token;
    },
    session: async ({ session, token ,user}: any) => {
      console.log(session);
      if (session.user && session.user) {
        session.user.id = token.userId;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
  debug: true, 
};

export default authOptions;
