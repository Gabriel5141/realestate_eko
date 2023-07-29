const Hamburger = () => {
  return (
    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative hidden flex-row items-center justify-center lg:flex">
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0 md:flex"
        alt=""
        src="/notification.svg"
      />
    </button>
  );
};

export default Hamburger;
