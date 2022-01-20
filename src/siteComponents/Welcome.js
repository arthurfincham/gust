import LogoText from '../svgs/LogoText';

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full md:flex-row sm:h-5/6 ">
      <div className="inline-flex flex-col w-auto mt-12 sm:mt-0 md:w-2/3 ">
        <LogoText svgClass="w-[350px] md:w-[450px] mb-2" />
        <ul className="ml-12 list-disc">
          <li className="m-1 text-2xl">React and Tailwind CSS</li>
          <li className="m-1 text-2xl">Functional components</li>
          <li className="m-1 text-2xl">Minimal config</li>
          <li className="m-1 text-2xl">No install</li>
        </ul>
      </div>
      <div className="flex flex-col justify-end text-center h-1/4 sm:h-1/3">
        <a
          className="p-2 m-2 text-xl text-white bg-primary-600 rounded-md shadow-lg font-sans-b hover:cursor-pointer  border-[0.01em] hover:shadow-xl"
          href="/documentation"
          data-testid="getStartedButton"
        >
          Get Started
        </a>
        <a
          className="p-2 m-2 text-xl text-primary-600 bg-white rounded-md shadow-lg hover:cursor-pointer  shadow-indigo-200/50 border-[0.01em] hover:shadow-xl font-sans-b"
          href="/components"
          data-testid="componentsButton"
        >
          Components
        </a>
      </div>
    </div>
  );
}
