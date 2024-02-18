import "./App.css";
import OrderSection from "./components/OrderSection";
import SearchSection from "./components/SearchSection";
import TableSection from "./components/TableSection";
function App() {
  return (
    <>
      <section className="p-5 w-full container mx-auto border border-1 border-sky-400 ">
        <OrderSection />
        <SearchSection />
        <TableSection />
      </section>
    </>
  );
}

export default App;
