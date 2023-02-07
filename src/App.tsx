import Header from './components/header';
import Footer from './components/footer';

import TeamPhoto from '../src/assets/team.jpg';

const App = () => {
  return (
    <div className="bg-white leading-tight font-sans w-full">
      <Header />
      <main className="block box-border w-full">
        <div className="flex items-center w-full">
          <img src={TeamPhoto} className="w-full"></img>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
