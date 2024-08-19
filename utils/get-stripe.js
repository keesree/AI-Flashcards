import {loadStripe} from '@stripe/stripe-js'
let stripePromise
const getStripe = () => {
        if(!stripePromise){
            stripePromise = loadStripe(process.nextTick.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
        }
        return stripePromise
    }

    export default getStripe