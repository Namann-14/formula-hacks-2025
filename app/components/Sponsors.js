import Image from "next/image";

const sponsors = {
  cultural: [
    {
      name: "Vibinz",
      src: "/assets/Vibinz.png",
      width: 150,
      height: 80,
      tier: "cultural",
    },
  ],
  gold: [
    {
      name: "Project Samvardhanam",
      src: "/assets/project Samvardhanam.jpg",
      width: 180,
      height: 70,
      tier: "gold",
    },
    {
      name: "Sponsor Logo 2",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBijkePy1ptMO52JDQ8PB2b4p07aZoRNHVvoWPFfm9HP5-o9kpzf4-klt4HVdL3RlP4Tn6zVFxSUmB1Y-vNKS43kckch1UMChOFehGxSRdxhJVz6YcjCd1cgGTd-idIGopmZNV6bOvxaN-d01KOQlt5JJwwtveKWM6xPg642NU3j_9DkUfpa7HgaMPKI1-_HplmKwyAtwOHxMh_X60o0cwRs1ccJl-ZaaeD--CfE3wNEU-dkfpz8xPv7utl6z2U4yVB1wJ1tRVS7wKS",
      width: 180,
      height: 70,
      tier: "gold",
    },
  ],
  silver: [
    {
      name: "Sponsor Logo 4",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJORwQe2m1iOJ2_kfQpoq3PRxBgOSNheCtdUouqEKW6pePYgJT2BfFw6taCYELAV4hY42bXWfmEshMq3nkaXru9qXzDdu-tW4BO60XgZBkJZebr6PCxYQWpiq0V5vjIyGAMpExLL1V14MXP55RVwxPI2b4YFo1zbSO074pXNtbrM1Lc_D2L4dVvjIuF0_DTZi_yFZSy7iiG-Hzyn4iHAJf9zlJyuis-THpGHQ2cZthMEnFTnBgWr_dHEn3FRmMGySNhyDQ_Q0oQ4ml",
      width: 150,
      height: 60,
      tier: "silver",
    },
    {
      name: "Sponsor Logo 5",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCm6g7ySnwal6c2z6qgJUry_fHFaUN9Yl8Ku_7zNA-SLAyfOHcpQKlSFrIhdw4ZgGl60z5UhEdMCl_b4fC16aEyforZiX2o2mNE73RJqKu-5wClrVnsAYSDc5jpfKuGYPYZ9DXx3WspoYHcGkCMZv1QrV-jhf1nUHORBqMQM0g06ww-N8geWyZa4_PlatwyaHke3sVHOyrl5LjQHZMKQ52NqUBRQoBXNpmKeLsCQHhIJg7gUi8G73XEgFtJ4vwDN71fGzKnV52xaS5G",
      width: 150,
      height: 60,
      tier: "silver",
    },
  ],
};

const SponsorTier = ({
  title,
  sponsors,
  gridClass,
  imageClass,
  titleClass,
}) => (
  <div className="w-full">
    <h3
      className={`font-display text-3xl font-bold text-center mb-10 ${titleClass}`}
    >
      {title}
    </h3>
    <div
      className={`flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16 ${gridClass}`}
    >
      {sponsors.map((sponsor) => (
        <div
          key={sponsor.name}
          className="flex flex-col items-center text-center gap-y-4"
        >
          <div className="group transition-all duration-300">
            <Image
              alt={sponsor.name}
              className={`object-contain transition-all duration-300 group-hover:drop-shadow-lg ${imageClass}`}
              src={sponsor.src}
              width={sponsor.width}
              height={sponsor.height}
            />
          </div>
          <p className="text-sm font-medium text-text-dark/80 tracking-wide">
            {sponsor.name}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default function Sponsors() {
  return (
    <section
      className="py-24 bg-card-dark text-text-dark border-t border-secondary-dark"
      id="sponsors"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold text-text-dark">
            Official <span className="text-primary">Partners</span>
          </h2>
          <p className="mt-4 text-lg text-text-dark/80 max-w-2xl mx-auto">
            Powering innovation at the F1 Hackathon. We're proud to be supported
            by industry leaders.
          </p>
        </div>
        <div className="space-y-20">
          <SponsorTier
            title="Cultural Partner"
            sponsors={sponsors.cultural}
            titleClass="text-primary"
            imageClass="max-h-28"
          />
          {/*
            <SponsorTier
              title="Gold Sponsors"
              sponsors={sponsors.gold}
              titleClass="text-yellow-400"
              imageClass="max-h-24"
            />
            <SponsorTier
              title="Silver Sponsors"
              sponsors={sponsors.silver}
              titleClass="text-gray-400"
              imageClass="max-h-20"
            />
          */}
        </div>
        <div className="space-y-20">
          <p className="mt-8 text-lg text-text-dark/80 max-w-3xl mx-auto text-center">
            VibinZ is the heartbeat of campus life — the club that brings
            energy, excitement, and crazy ideas to life. From electrifying fests
            and high-voltage concerts to creative cultural nights and
            grand-scale events, we’re the team behind the vibe that everyone
            talks about. As the Cultural Partners for this hackathon, VibinZ
            adds a spark of creativity, fun, and celebration to the tech spirit
            — blending innovation with entertainment to make the experience
            truly unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
}
