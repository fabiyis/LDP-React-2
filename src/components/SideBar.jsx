function Sidebar () {
  return (
    <>
      <aside className="pt-20 ml-5 md:w-1/4 lg:w-1/5 bg-white rounded-lg shadow-lg">
        <ul className="cursor-pointer">
            <li className="text-black font-semibold text-sm hover:bg-amber-500 hover:text-white p-2 rounded-md mb-2 transition duration-300">Trading</li>
            <li className="text-black font-semibold text-sm hover:bg-amber-500 hover:text-white p-2 rounded-md mb-2 transition duration-300">Signal</li>
            <li className="text-black font-semibold text-sm hover:bg-amber-500 hover:text-white p-2 rounded-md mb-2 transition duration-300">Risk Control</li>
            <li className="text-black font-semibold text-sm hover:bg-amber-500 hover:text-white p-2 rounded-md mb-2 transition duration-300">Reward Hub</li>
        </ul>
      </aside>
    </>
  )
}

export default Sidebar;