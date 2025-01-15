import Navbar from "./components/Navbar";
import Greeting from "./components/Greeting";
import CardLayout from "./components/CardLayout";
import AccordionLayout from "./components/AccordionLayout";

const App = () => {
  return (
    <main className="mx-auto pb-10">
      <Navbar />
      <Greeting />
      <CardLayout />
      <AccordionLayout />
    </main>
  );
};

export default App;
