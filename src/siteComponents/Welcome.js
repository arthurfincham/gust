import gustBanner from '../svgs/gustBanner.svg';
import gustBannerMob from '../svgs/gustBannerMob.svg';

export default function Welcome() {
  const points = ['React and Tailwind CSS', 'Responsive components', 'No install'];

  const crossPoints = ['Deprecated dependencies', 'Bloated packages', 'Confusing props'];

  const tick = () => {
    return (
      <svg className="w-[2em]  h-[2em]" width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path d="M18.16,46.5a5.32,5.32,0,1,0-6.24,8.61c8.29,6,15.07,15.37,20.63,27.71a5.32,5.32,0,0,0,9.67.06C53.07,59.54,68.79,37,87.63,20.86a5.32,5.32,0,0,0-6.91-8.08c-17.5,15-32.3,34.88-43.38,56C32,59.45,25.69,52,18.16,46.5Z" />
      </svg>
    );
  };

  const cross = () => {
    return (
      <svg className="w-[2em]  h-[2em]" width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path d="M77.74,20.38A168.64,168.64,0,0,0,50.62,38.26c-7.06-8.72-14.21-17.37-22.06-25.4-5.71-5.84-14.67,3.12-9,9,7.55,7.73,14.45,16,21.24,24.4C30.65,54.72,20.65,63.51,9.78,71.28,3.2,76,9.52,87,16.17,82.22,27.53,74.11,38,64.82,48.72,55.93A325.51,325.51,0,0,0,72.1,82.49c5.79,5.75,14.76-3.2,9-9A320.38,320.38,0,0,1,58.54,48a164.89,164.89,0,0,1,25.6-16.71c7.26-3.72.86-14.65-6.4-10.94Z" />
      </svg>
    );
  };

  return (
    <div className="flex flex-col items-center justify-start w-full h-full mt-[50px]">
      <div className="mt-12 flex flex-col items-center justify-center w-[100%] sm:flex-row space-y-12 sm:space-y-0 sm:space-x-[5vw] mb-6 ">
        <ul className="w-2/3 my-auto space-y-4 sm:w-auto">
          {points.map((item, index) => {
            return (
              <div key={index} className="flex items-center">
                {tick()}
                <li className="ml-3 text-3xl font-bold tracking-wide sm:text-2xl md:text-4xl lg:text-5xl font-hand">{item}</li>
              </div>
            );
          })}
        </ul>
        <ul className="w-2/3 my-auto space-y-4 sm:w-auto">
          {crossPoints.map((item, index) => {
            return (
              <div key={index} className="flex items-center">
                {cross()}
                <li className="ml-3  tracking-wide  text-3xl sm:text-2xl md:text-4xl lg:text-5xl  font-hand   line-through decoration-[3px] decoration-black">
                  {item}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      <img data-testid="desktopAppBanner" width="90%" height="90%" src={gustBanner} alt="gust button" className="hidden md:block" />
      <img width="80%" height="80%" src={gustBannerMob} alt="gust button" className="md:hidden" />
    </div>
  );
}
