const Navbar = () => {
  return (
    <div
      className="flex py-6 justify-between items-center container mx-auto
    "
    >
      {/* Logo section */}
      <div className="flex items-center justify-center">
        <img src="https://i.ibb.co/nCknKhg/Rectangle.png" alt="" />
        <div className="flex">
         <h1 className="text-3xl font-semibold"> Hygge</h1>
          <img src="https://i.ibb.co/N7qDyYs/Group.png" alt="" />
        </div>
      </div>
      {/* Navigation And Auth */}
      <ul className="flex items-center gap-10 text-[#3A3740] text-lg">
        <li>Home</li>
        <li>Flashcard</li>
        <li>Contact</li>
        <li>FAQ</li>
        <button
          style={{
            background: "linear-gradient(180deg, #06286E 0%, #164EC0 100%)",
          }}
          className=" px-10 py-3 rounded-full text-white font-medium text-lg"
        >
          Login
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
