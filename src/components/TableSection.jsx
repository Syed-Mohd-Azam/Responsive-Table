import TableHeader from "./TableHeader";
import Table from "./Table";
const TableSection = () => {
  return (
    <>
      <section className="rounded-xl bg-white mt-10 flex flex-col overflow-hidden">
        <TableHeader />
        <Table />
      </section>
    </>
  );
};
export default TableSection;
