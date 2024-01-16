const Navbar = () => {
  return (
    <div
      className="flex py-6 justify-between items-center container mx-auto
    "
    >
      {/* Logo section */}
      <div className="flex items-center justify-center">
        <img className="h-20 w-20" src="https://i.ibb.co/zPT4KcS/Untitled-design.png" alt="" />
      <svg
            xmlns="http://www.w3.org/2000/svg"
            width="116"
            height="36"
            viewBox="0 0 116 36"
            fill="none"
          >
            <path
              d="M4.01153 3.78583H0.953796V25.7483H4.01153V15.3718H17.1354V25.7483H20.1931V3.78583H17.1354V12.4985H4.01153V3.78583Z"
              fill="#06286E"
            />
            <path
              d="M20.7561 9.47291L28.0004 25.748C27.347 28.0475 26.4863 28.8034 24.4073 28.8034C23.9917 28.8034 23.4572 28.7433 22.7153 28.6222V31.4053C23.6055 31.4955 24.2589 31.5264 24.704 31.5264C28.6529 31.5264 29.3063 30.0438 31.236 25.6269L38.3025 9.47291H34.948L29.6334 23.1771L24.1999 9.47291H20.7561Z"
              fill="#06286E"
            />
            <path
              d="M52.2265 9.47324V12.1352C50.9502 10.139 48.8122 8.95869 46.0208 8.95869C41.0038 8.95869 37.5001 12.5587 37.5001 17.6413C37.5001 22.693 40.9734 26.2019 46.0512 26.2019C48.6039 26.2019 50.564 25.2648 52.2265 23.3587V23.9033C52.2265 27.4423 50.5935 28.8639 46.2291 28.8639C43.587 28.8639 42.1023 28.0479 41.8056 26.293H38.5691C38.8953 29.6808 41.5383 31.5869 46.1996 31.5869C52.4339 31.5869 55.1064 29.1362 55.1064 23.661V9.47324H52.2265ZM46.4668 11.6817C50.1484 11.6817 52.4339 13.9202 52.4339 17.6413C52.4339 21.3014 50.1484 23.4798 46.4668 23.4798C42.7852 23.4798 40.5283 21.3315 40.5283 17.6413C40.5283 13.9202 42.7852 11.6817 46.4668 11.6817Z"
              fill="#06286E"
            />
            <path
              d="M71.227 9.47324V12.1352C69.9506 10.139 67.8126 8.95869 65.0213 8.95869C60.0043 8.95869 56.5005 12.5587 56.5005 17.6413C56.5005 22.693 59.9739 26.2019 65.0517 26.2019C67.6044 26.2019 69.5645 25.2648 71.227 23.3587V23.9033C71.227 27.4423 69.594 28.8639 65.2295 28.8639C62.5874 28.8639 61.1028 28.0479 60.806 26.293H57.5695C57.8958 29.6808 60.5388 31.5869 65.2 31.5869C71.4344 31.5869 74.1069 29.1362 74.1069 23.661V9.47324H71.227ZM65.4673 11.6817C69.1489 11.6817 71.4344 13.9202 71.4344 17.6413C71.4344 21.3014 69.1489 23.4798 65.4673 23.4798C61.7857 23.4798 59.5288 21.3315 59.5288 17.6413C59.5288 13.9202 61.7857 11.6817 65.4673 11.6817Z"
              fill="#06286E"
            />
            <path
              d="M92.9592 18.216V17.6413C92.9592 12.2263 89.7227 8.95869 84.2597 8.95869C78.9156 8.95869 75.5013 12.3775 75.5013 17.6413C75.5013 22.8742 78.8861 26.2019 84.2597 26.2019C88.5053 26.2019 91.5639 24.2056 92.6919 20.6967H89.3366C88.6841 22.4817 86.7838 23.4798 84.2597 23.4798C80.8454 23.4798 78.559 21.3925 78.559 18.216H92.9592ZM78.6189 16.1286C79.0935 13.3455 81.202 11.6817 84.2597 11.6817C87.3478 11.6817 89.4259 13.3756 89.8711 16.1286H78.6189Z"
              fill="#06286E"
            />
            <path
              d="M92.3372 3.78583L100.799 14.6159L91.9216 25.7483H98.6904L104.035 18.6995L109.052 25.7483H116L107.212 14.5558L115.703 3.78583H109.052L104.094 10.6525L99.1364 3.78583H92.3372Z"
              fill="#06286E"
            />
          </svg>
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
