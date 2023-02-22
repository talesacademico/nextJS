import { fauna } from "@/src/Services/fauna";
import { stripe } from "@/src/Services/stripe";
import { query as q } from "faunadb";

export async function saveSubscription(
  subscriptionId: string,
  customerId: string,
  createdAction = false
) {
  const userRef = await fauna.query(
    q.Select(
      "ref",
      q.Get(
        q.Match(
          q.Index('user_by_stripe_customer_id'),
          customerId
        )
      )
    )
  )
  console.log(userRef)

  const subscription = await stripe.subscriptions.retrieve(subscriptionId)

  const subscriptionData ={
    id: subscription.id,
    userId: userRef,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id
  }

  if(createdAction){
    await fauna.query(
      q.Create(
        q.Collection('subscriptions'),
        {data: subscriptionData}
      )
    )
  }else{
    await fauna.query(
      q.Replace(
        q.Select(
          "ref",
          q.Get(
            q.Match(
              'subscription_by_id',
              subscriptionId
            )
          )
        ),
        {data: subscriptionData}
      )
    )
  }
}