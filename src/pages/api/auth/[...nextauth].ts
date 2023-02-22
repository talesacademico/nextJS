import { fauna } from "@/src/Services/fauna"
import { query as q } from "faunadb"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

interface userProvaiderProps {
  user: {
    email: string
  }
}


export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
      //scope: 'read:user',
    }),
    // ...add more providers here
  ],

  callbacks: {
    async signIn({ user }: userProvaiderProps) {
      const { email } = user
      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index('user_by_email'),
                  q.Casefold(user.email)
                )
              )
            ),
            q.Create(
              q.Collection('users'),
              { data: { email } }
            ),
            q.Get(
              q.Match(
                q.Index('user_by_email'),
                q.Casefold(user.email)
              )
            )
          )
        )

        
        return true
      } catch {
        return false
      }

    }
  }
}
export default NextAuth(authOptions)