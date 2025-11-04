import Header from "@app/components/header";
import Footer from "@app/components/footer";
import MeetTheTeam from "@app/components/MeetTheTeam";
import TeamPhoto from "@app/assets/team.jpg";

const HomePage = () => {
  return (
    <div className="bg-white leading-tight font-sans w-full">
      <Header />

      <main className="block box-border w-full">
        <div className="flex items-center w-full">
          <img src={TeamPhoto} className="w-full max-h-1/2 object-cover" />
        </div>
      </main>

      <MeetTheTeam />
      <Footer />
    </div>
  );
};

export default HomePage;
