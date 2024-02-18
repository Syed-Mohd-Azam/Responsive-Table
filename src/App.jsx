import "./App.css";
import OrderSection from "./components/OrderSection";
import SearchSection from "./components/SearchSection";
function App() {
  return (
    <>
      <section className="p-5 w-4/5 mx-auto border border-1 border-sky-400 ">
        <OrderSection />
        <SearchSection />
      </section>
    </>
  );
}

export default App;
