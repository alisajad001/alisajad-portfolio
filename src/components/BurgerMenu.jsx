const BurgerMenu = ({ isMenuActive, setIsMenuActive }) => {
  return (
    <div
      onClick={() => setIsMenuActive(!isMenuActive)}
      className="w-12 h-12 z-10 md:hidden rounded-full cursor-pointer flex flex-col justify-center items-center gap-2"
    >
      <div
        className={
          isMenuActive
            ? "w-8 m-[-4.3px] h-[1px] bg-white rounded-full rotate-[-45deg]"
            : "w-8 h-[1px] bg-white rounded-full"
        }
      ></div>
      <div
        className={
          isMenuActive
            ? "w-8 m-[-4.3px] h-[1px] bg-white rounded-full rotate-[45deg]"
            : "w-8 h-[1px] bg-white rounded-full"
        }
      ></div>
    </div>
  );
};

export default BurgerMenu;
