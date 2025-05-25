import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/CTA";
import {recentSessions} from "@/constants";


const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
        <section className="home-section">
            <CompanionCard
                id="123"
                name="Neura the Brainy Explorer"
                topic="Neural Network of the Brain"
                subject="Sceince"
                duration={45}
                color="#ffdae6"
            />
            <CompanionCard
                id="456"
                name="Countsy the Number Wizard"
                topic="Derivatives & Integrals"
                subject="Maths"
                duration={30}
                color="#e5d0ff"
            />
            <CompanionCard
                id="478"
                name="The Vocabulary Builder"
                topic="English Literature"
                subject="Language"
                duration={50}
                color="#3B83D0"
            />

        </section>

        <section className="home-section">
            <CompanionsList
                title="Recently Completed Sessions"
                companions={recentSessions}
                classNames="2/3 max-lg:w-full"

            />
            <Cta />
        </section>

    </main>
  )
}

export default Page