const OrderSection = () => {
  return (
    <>
      <section className="flex justify-between items-center mb-10 bg-purple-50 p-5 rounded-lg shadow-lg">
        <p className="black-white font-bold text-2xl">Orders</p>
        <button className="bg-blue-500 text-white px-5 py-1 font-semibold rounded-md">
          CREATE NEW
        </button>
      </section>
    </>
  );
};
export default OrderSection;
