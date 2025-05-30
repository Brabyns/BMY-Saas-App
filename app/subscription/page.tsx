import { SignedIn, SignedOut, SignInButton, PricingTable } from "@clerk/nextjs";


const Subscription = () => {
    return (
        <main>
            <SignedIn>
                <PricingTable />
            </SignedIn>
            <SignedOut>
                <SignInButton />
            </SignedOut>
        </main>
    )
}
export default Subscription
