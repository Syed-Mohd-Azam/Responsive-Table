import OrderSection from "./components/OrderSection";
import SearchSection from "./components/SearchSection";
import TableSection from "./components/TableSection";
function App() {
  return (
    <>
      <section className="p-5 w-full md:container md:mx-auto ">
        <OrderSection />
        <SearchSection />
        <TableSection />
      </section>
    </>
  );
}

export default App;
