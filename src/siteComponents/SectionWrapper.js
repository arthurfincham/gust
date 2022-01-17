export default function SectionWrapper({ children }) {
  return <div className="flex flex-col items-center w-full md:max-w-[800px] lg:max-w-[1010px]">{children}</div>;
}
