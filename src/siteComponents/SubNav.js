import MenuIcon from '../svgs/MenuIcon';
import CloseIcon from '../svgs/CloseIcon';

export default function SubNav({ isClosed, setIsClosed, liveComp }) {
  return (
    <div className="md:hidden flex w-full mt-[50px] h-[40px] px-4 shadow-md justify-center  items-center relative  border-t-[0.1em]">
      <button onClick={() => setIsClosed(!isClosed)} className="absolute italic text-left left-3">
        {isClosed ? <MenuIcon /> : <CloseIcon svgClass="pl-1" />}
      </button>
      <span className="roboto-bold">{liveComp.name}</span>
    </div>
  );
}
