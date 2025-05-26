import { SignedIn, SignedOut, SignInButton, PricingTable } from "@clerk/nextjs";


const Subscription = () => {
    return (
        <div>
            {/*<SignedIn>*/}
                <PricingTable />
            {/*</SignedIn>*/}
            {/*<SignedOut>*/}
            {/*    <SignInButton />*/}
            {/*</SignedOut>*/}
        </div>
    )
}
export default Subscription
