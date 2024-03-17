import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { FirebaseApp } from "services/firebase";
const auth = getAuth(FirebaseApp);
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {},
      async authorize(credentials) {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            credentials?.email,
            credentials?.password
          );
          
          /* 	console.log(user.user); */
          return user.user;
        } catch (error) {
          return error;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      
      // Send properties to the client, like an access_token from a provider.
     
      session.accessToken = token.accessToken;

      return session;
    },
    async jwt({ token, user, account }) {
      // Persist the OAuth access_token to the token right after signin
     
      if (account) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
