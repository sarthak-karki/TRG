import Header from "@app/components/header";
import Footer from "@app/components/footer";
import MeetTheTeam from "@app/components/MeetTheTeam";
import Hero from "@app/components/TeamPhoto";
import Sponsors from "@app/components/Sponsors";

const HomePage = () => {
  return (
    <div className="bg-[#0a1929] leading-tight font-sans w-full min-h-screen">
      <Header />

      {/* Full-screen Hero Section */}
      <Hero />

      {/* Meet The Team Section */}
      <MeetTheTeam />

      {/* Sponsors Section */}
      <Sponsors />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
