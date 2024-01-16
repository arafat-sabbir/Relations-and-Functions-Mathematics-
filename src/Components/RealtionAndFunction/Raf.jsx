import { SlHome } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";
const Raf = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-1">
        <SlHome />
        <IoIosArrowForward />
        <h1>Flashcard</h1>
        <IoIosArrowForward />
        <h1>Mathematics</h1>
        <IoIosArrowForward />
        <h1 className="text-[#06286E] font-semibold text-lg">
          Relation and Function
        </h1>
      </div>
      <h1 className="text-[32px] text-[#164EC0] font-bold mt-[64px]">
        Relations and Functions ( Mathematics )
      </h1>
      {/* Different Section */}
      <ul className="flex text-[#696671] text-xl font-medium justify-center items-center mt-[56px] gap-[64px]">
        <li className="text-[#06286E] font-bold border-b-[3px] pb-1 border-b-[#06286E]">
          Study
        </li>
        <li>Quiz</li>
        <li>Test</li>
        <li>Game</li>
        <li>Others</li>
      </ul>
    </div>
  );
};

export default Raf;
