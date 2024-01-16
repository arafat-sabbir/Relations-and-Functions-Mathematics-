import { IoIosArrowDown } from "react-icons/io";
const Faq = () => {
    return (
        <div className="mt-[154px] mb-40">
            <h1 className="text-[#0B2EA3] text-[48px] font-bold">FAQ</h1>
            <div className="mt-[48px] space-y-[32px]">
                <h1 className="w-[848px]  h-[58px] border p-3 rounded-xl border-[#217EEC] flex items-center justify-between ">Can education flashcards be used for all age groups? <span><IoIosArrowDown/></span></h1>
                <h1 className="w-[848px]  h-[58px] border p-3 rounded-xl border-[#217EEC] flex items-center justify-between ">How do education flashcards work? <span><IoIosArrowDown/></span></h1>
                <h1 className="w-[848px]  h-[58px] border p-3 rounded-xl border-[#217EEC] flex items-center justify-between ">Can education flashcards be used for test preparation?<span><IoIosArrowDown/></span></h1>
            </div>
        </div>
    );
};

export default Faq;