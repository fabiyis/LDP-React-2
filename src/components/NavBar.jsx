function NavBar() {
    return (
      <>
        <nav className="bg-black fixed h-16 w-full flex justify-between items-center px-3 fontFamily:Segoe, Tahoma, sans-serif" >
            <h1 className="text-3xl font-bold text-amber-500">fabXchange$</h1>
            <div className="flex items-center gap-10 space-y-1 px-2 pb-3 pt-2">
                <a 
                href="." className="text-white text-sm font-semibold hover:text-amber-500">
                    Home
                </a>
                <a 
                href="." className="text-white text-sm font-semibold hover:text-amber-500">
                    About
                </a>
                <a 
                href="." className="text-white text-sm font-semibold hover:text-amber-500">
                    Market
                </a>
                <a 
                href="." className="text-white text-sm font-semibold hover:text-amber-500">
                    Contact
                </a>

            </div>
        </nav>
      </>
    )
  }
  
  export default NavBar;