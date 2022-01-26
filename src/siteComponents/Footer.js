import Twitter from '../svgs/Twitter';
import GitHub from '../svgs/GitHub';

export default function Footer() {
  return (
    <div className="flex items-center justify-between w-full px-24 py-3 mt-8 space-x-12 text-sm roboto-light">
      <span>Gust UI 2022</span>
      <div className="flex flex-row items-center space-x-6">
        <span>Feedback</span>
        <Twitter className="w-[25px] h-[25px] mt-[.1em] fill-black" />
        <GitHub className="w-[25px] h-[25px] fill-black" />
      </div>
    </div>
  );
}
