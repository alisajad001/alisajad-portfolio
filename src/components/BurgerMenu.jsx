const BurgerMenu = ({ isMenuActive, setIsMenuActive }) => {
  return (
    <div
      onClick={() => setIsMenuActive(!isMenuActive)}
      className="w-12 h-12 z-10 md:hidden bg-purple-600 rounded-full cursor-pointer flex flex-col justify-center items-center gap-1"
    >
      <div
        className={
          isMenuActive
            ? "w-6 m-[-2.5px] h-[1px] bg-white rounded-full rotate-[-45deg]"
            : "w-6 h-[1px] bg-white rounded-full"
        }
      ></div>
      <div
        className={
          isMenuActive
            ? "w-6 m-[-2.5px] h-[1px] bg-white rounded-full rotate-[45deg]"
            : "w-6 h-[1px] bg-white rounded-full"
        }
      ></div>
    </div>
  );
};

export default BurgerMenu;
