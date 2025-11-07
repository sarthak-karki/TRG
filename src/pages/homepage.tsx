import Header from "@app/components/header";
import Footer from "@app/components/footer";
import MeetTheTeam from "@app/components/MeetTheTeam";
import TeamPhoto from "@app/components/TeamPhoto";
import Fixtures from "@app/components/Fixtures";
import Sponsors from "@app/components/Sponsors";

const HomePage = () => {
  return (
    <div className="bg-white leading-tight font-sans w-full">
      <Header />
      <main className="block box-border w-full">
        <div className="flex items-center w-full">
          <TeamPhoto />
        </div>
      </main>

      <MeetTheTeam />

      <Fixtures />

      <Sponsors />

      {/* Sponsors */}

      <Footer />
    </div>
  );
};

export default HomePage;
