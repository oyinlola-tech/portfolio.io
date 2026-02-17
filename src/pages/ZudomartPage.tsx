const headline = 'ZudoMart joins EquityPilot to scale a scam-proof super-app for African entrepreneurs';

const productHighlights = [
  'Three-tier verification system with AI fraud detection',
  'Escrow payments for safer transactions',
  'Hyper-local discovery for goods, services, and micro-gigs',
  'ZudoReels short video content features',
  'Live-stream monetization with virtual gifts',
];

const plan3060 = [
  'Harden escrow and AI detection workflows',
  'Launch creator ad monetization pilots',
  'Initiate campus ambassador activations in Lagos',
  'Validate integrations and early monetization flows with ecosystem support',
];

const next90Days = [
  'Launch public MVP with escrow and verification',
  'Onboard first creator cohorts for ad revenue pilots',
  'Integrate two local payment providers',
  'Measure user retention and dispute resolution time',
];

export function ZudomartPage() {
  return (
    <main className="px-4 md:px-8 lg:px-32 py-16 md:py-24">
      <div className="max-w-5xl mx-auto space-y-6">
        <header className="border border-[#abb2bf] p-6 space-y-3">
          <p className="font-['Fira_Code'] text-[#c778dd] text-sm">Press Release</p>
          <h1 className="font-['Fira_Code'] text-white text-3xl">{headline}</h1>
          <p className="font-['Fira_Code'] text-[#abb2bf] text-sm">
            Lagos, Nigeria and Dubai, UAE - January 27, 2026
          </p>
        </header>

        <section className="border border-[#abb2bf] p-6 space-y-4">
          <h2 className="font-['Fira_Code'] text-white text-xl">Market Context</h2>
          <p className="font-['Fira_Code'] text-[#abb2bf] text-sm leading-relaxed">
            Africa&apos;s informal peer-to-peer economy supports millions of micro-entrepreneurs but remains
            fragmented and vulnerable to fraud. An estimated 65% of traders report losses to scams on informal
            platforms, and Nigeria represents a significant share of the continent&apos;s e-commerce activity.
            Investors and ecosystem actors are prioritizing digital trust, local payments, and creator
            monetization tools tailored to African market realities.
          </p>
        </section>

        <section className="border border-[#abb2bf] p-6 space-y-4">
          <h2 className="font-['Fira_Code'] text-white text-xl">What the Startup Delivers</h2>
          <p className="font-['Fira_Code'] text-[#abb2bf] text-sm leading-relaxed">
            ZudoMart is an Africa-first super-app built to empower entrepreneurs through an integrated
            marketplace for goods, services, and micro-gigs, with live commerce capabilities and a multi-layer
            trust engine.
          </p>
          <ul className="space-y-2">
            {productHighlights.map((item) => (
              <li key={item} className="font-['Fira_Code'] text-[#abb2bf] text-sm">
                - {item}
              </li>
            ))}
          </ul>
          <p className="font-['Fira_Code'] text-[#abb2bf] text-sm leading-relaxed">
            ZudoMart targets an addressable market of 8.1 million active e-commerce traders today, with a
            long-term ambition to reach 12M+ users across the continent after successful MVP validation.
          </p>
        </section>

        <section className="border border-[#abb2bf] p-6 space-y-4">
          <h2 className="font-['Fira_Code'] text-white text-xl">Why Now</h2>
          <p className="font-['Fira_Code'] text-[#abb2bf] text-sm leading-relaxed">
            Mobile adoption, local mobile-money ecosystems, and the growth of creator economies have created a
            window to migrate informal transactions to a secure, purpose-built platform. Rising advertiser
            interest in Gen-Z audiences and demand for affordable microloan and payout integrations further
            strengthen timing for a trust-first marketplace.
          </p>
        </section>

        <section className="border border-[#abb2bf] p-6 space-y-4">
          <h2 className="font-['Fira_Code'] text-white text-xl">Program Plan (First 30-60 Days)</h2>
          <p className="font-['Fira_Code'] text-[#abb2bf] text-sm leading-relaxed">
            Through EquityPilot, ZudoMart will refine product-market fit and execute high-priority milestones.
            FasterCapital will provide execution support, mentorship, and introductions to payment providers and
            brands to validate integrations and early monetization flows. This phase is KPI-driven and does not
            imply fundraising guarantees.
          </p>
          <ul className="space-y-2">
            {plan3060.map((item) => (
              <li key={item} className="font-['Fira_Code'] text-[#abb2bf] text-sm">
                - {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="border border-[#abb2bf] p-6 space-y-4">
          <h2 className="font-['Fira_Code'] text-white text-xl">Leadership Comment</h2>
          <p className="font-['Fira_Code'] text-[#abb2bf] text-sm leading-relaxed">
            &quot;Hesham Zreik, Founder and CEO of FasterCapital, said: We&apos;re excited to support ZudoMart
            through EquityPilot. Our team will focus on execution milestones and connecting the startup with the
            right ecosystem stakeholders.&quot;
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-4">
          <article className="border border-[#abb2bf] p-6 space-y-3">
            <h2 className="font-['Fira_Code'] text-white text-xl">Founder Background</h2>
            <p className="font-['Fira_Code'] text-[#abb2bf] text-sm leading-relaxed">
              Founded by Oluwayemi Oyinlola and co-founded with Idebi Olubusayo, ZudoMart combines product,
              design, and engineering experience grounded in Nigerian market realities. The team blends
              technical delivery with grassroots outreach for organic adoption among micro-entrepreneurs.
            </p>
          </article>
          <article className="border border-[#abb2bf] p-6 space-y-3">
            <h2 className="font-['Fira_Code'] text-white text-xl">Competitive Landscape</h2>
            <p className="font-['Fira_Code'] text-[#abb2bf] text-sm leading-relaxed">
              ZudoMart addresses gaps across social platforms (scam-prone DMs), classifieds (limited dispute
              resolution), and global freelance marketplaces (high fees and poor micro-gig fit). Core
              differentiators include escrow for small transactions, localized payment options, campus-level
              discovery, and built-in creator monetization.
            </p>
          </article>
        </section>

        <section className="border border-[#abb2bf] p-6 space-y-4">
          <h2 className="font-['Fira_Code'] text-white text-xl">Next 90 Days</h2>
          <ul className="space-y-2">
            {next90Days.map((item) => (
              <li key={item} className="font-['Fira_Code'] text-[#abb2bf] text-sm">
                - {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="border border-[#abb2bf] p-6 space-y-4">
          <h2 className="font-['Fira_Code'] text-white text-xl">About ZudoMart</h2>
          <p className="font-['Fira_Code'] text-[#abb2bf] text-sm leading-relaxed">
            ZudoMart is a super-app designed to empower African entrepreneurs to trade safely, monetize skills,
            and build trusted communities. By combining marketplace listings, services, micro-gigs, live
            commerce, and AI-driven trust systems, ZudoMart aims to reduce scams and support broader financial
            inclusion.
          </p>
        </section>

        <section className="border border-[#abb2bf] p-6 space-y-4">
          <h2 className="font-['Fira_Code'] text-white text-xl">About FasterCapital</h2>
          <p className="font-['Fira_Code'] text-[#abb2bf] text-sm leading-relaxed">
            FasterCapital is a global venture builder and online incubator dedicated to co-funding and
            co-founding innovative startups. Established in 2014, it supports startups worldwide through
            funding assistance, business development, and technical support. EquityPilot helps early-stage
            startups build scalable solutions with mentorship, strategic guidance, and network support.
          </p>
        </section>

        <section className="border border-[#abb2bf] p-6 space-y-2">
          <h2 className="font-['Fira_Code'] text-white text-xl mb-2">Media Contact</h2>
          <p className="font-['Fira_Code'] text-[#abb2bf] text-sm">Lydia Zeng</p>
          <p className="font-['Fira_Code'] text-[#abb2bf] text-sm">
            Email:{' '}
            <a href="mailto:lydia.zeng@fastercapital.com" className="text-[#c778dd] hover:text-white transition-colors">
              lydia.zeng@fastercapital.com
            </a>
          </p>
          <p className="font-['Fira_Code'] text-[#abb2bf] text-sm">Phone: +1 (512) 400-0256</p>
          <p className="font-['Fira_Code'] text-[#abb2bf] text-sm">
            Website:{' '}
            <a
              href="https://www.fastercapital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c778dd] hover:text-white transition-colors"
            >
              https://www.fastercapital.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
