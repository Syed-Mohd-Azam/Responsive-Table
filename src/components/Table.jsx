import { BiEdit } from "react-icons/bi";
const Table = () => {
  return (
    <>
      <section>
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 bg-purple-50">
                  <thead>
                    <tr>
                      <th scope="col" className="py-3 ps-4">
                        <div className="flex items-center h-5">
                          <input
                            id="hs-table-checkbox-all"
                            type="checkbox"
                            className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          />
                          <label
                            htmlFor="hs-table-checkbox-all"
                            className="sr-only"
                          >
                            Checkbox
                          </label>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Shipify#
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        DATE
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        STATUS
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        CUSTOMER
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        EMAIL
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        COUNTRY
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        SHIPPING
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        SOURSE
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase whitespace-nowrap"
                      >
                        ORDER TYPE
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y  ">
                    <tr className="bg-white hover:bg-purple-50 hover:cursor-pointer">
                      <td className="py-3 ps-4">
                        <div className="flex items-center h-5">
                          <input
                            id="hs-table-checkbox-1"
                            type="checkbox"
                            className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          />
                          <label
                            htmlFor="hs-table-checkbox-1"
                            className="sr-only"
                          >
                            Checkbox
                          </label>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-800">
                        1077620
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                        17713
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        22 Jan 2020
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Pending
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Ahmad
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        ahmad.123@mail.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Australia
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Australian Post API
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        ShopifyAU
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Customer
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        <BiEdit />
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-purple-50 hover:cursor-pointer">
                      <td className="py-3 ps-4">
                        <div className="flex items-center h-5">
                          <input
                            id="hs-table-checkbox-1"
                            type="checkbox"
                            className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          />
                          <label
                            htmlFor="hs-table-checkbox-1"
                            className="sr-only"
                          >
                            Checkbox
                          </label>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-800">
                        1077620
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                        17713
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        22 Jan 2020
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Pending
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Ahmad
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        ahmad.123@mail.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Australia
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Australian Post API
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        ShopifyAU
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Customer
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        <BiEdit />
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-purple-50 hover:cursor-pointer">
                      <td className="py-3 ps-4">
                        <div className="flex items-center h-5">
                          <input
                            id="hs-table-checkbox-1"
                            type="checkbox"
                            className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          />
                          <label
                            htmlFor="hs-table-checkbox-1"
                            className="sr-only"
                          >
                            Checkbox
                          </label>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-800">
                        1077620
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                        17713
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        22 Jan 2020
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Pending
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Ahmad
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        ahmad.123@mail.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Australia
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Australian Post API
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        ShopifyAU
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Customer
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        <BiEdit />
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-purple-50 hover:cursor-pointer">
                      <td className="py-3 ps-4">
                        <div className="flex items-center h-5">
                          <input
                            id="hs-table-checkbox-1"
                            type="checkbox"
                            className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          />
                          <label
                            htmlFor="hs-table-checkbox-1"
                            className="sr-only"
                          >
                            Checkbox
                          </label>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-800">
                        1077620
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                        17713
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        22 Jan 2020
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Pending
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Ahmad
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        ahmad.123@mail.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Australia
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Australian Post API
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        ShopifyAU
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Customer
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        <BiEdit />
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-purple-50 hover:cursor-pointer">
                      <td className="py-3 ps-4">
                        <div className="flex items-center h-5">
                          <input
                            id="hs-table-checkbox-1"
                            type="checkbox"
                            className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          />
                          <label
                            htmlFor="hs-table-checkbox-1"
                            className="sr-only"
                          >
                            Checkbox
                          </label>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-800">
                        1077620
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                        17713
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        22 Jan 2020
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Pending
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Ahmad
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        ahmad.123@mail.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Australia
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Australian Post API
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        ShopifyAU
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Customer
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        <BiEdit />
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-purple-50 hover:cursor-pointer">
                      <td className="py-3 ps-4">
                        <div className="flex items-center h-5">
                          <input
                            id="hs-table-checkbox-1"
                            type="checkbox"
                            className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          />
                          <label
                            htmlFor="hs-table-checkbox-1"
                            className="sr-only"
                          >
                            Checkbox
                          </label>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-800">
                        1077620
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                        17713
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        22 Jan 2020
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Pending
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Ahmad
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        ahmad.123@mail.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Australia
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Australian Post API
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        ShopifyAU
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Customer
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        <BiEdit />
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-purple-50 hover:cursor-pointer">
                      <td className="py-3 ps-4">
                        <div className="flex items-center h-5">
                          <input
                            id="hs-table-checkbox-1"
                            type="checkbox"
                            className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          />
                          <label
                            htmlFor="hs-table-checkbox-1"
                            className="sr-only"
                          >
                            Checkbox
                          </label>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-800">
                        1077620
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                        17713
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        22 Jan 2020
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Pending
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Ahmad
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        ahmad.123@mail.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Australia
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Australian Post API
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        ShopifyAU
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Customer
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        <BiEdit />
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-purple-50 hover:cursor-pointer">
                      <td className="py-3 ps-4">
                        <div className="flex items-center h-5">
                          <input
                            id="hs-table-checkbox-1"
                            type="checkbox"
                            className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          />
                          <label
                            htmlFor="hs-table-checkbox-1"
                            className="sr-only"
                          >
                            Checkbox
                          </label>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-800">
                        1077620
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                        17713
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        22 Jan 2020
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Pending
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Ahmad
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        ahmad.123@mail.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Australia
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Australian Post API
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        ShopifyAU
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        Customer
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                        <BiEdit />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Table;
