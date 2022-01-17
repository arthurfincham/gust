import Wrapper from '../../siteComponents/Wrapper';

export default function VerticalProgress({ min, max, value }) {
  const current = Math.ceil((value / (max - min)) * 100);

  const progressStyle = {
    height: `${current}%`,
  };

  const component = (
    <div className="w-[20px] h-3/4 min-h-[200px] shadow-md bg-primary-100 relative  rounded-xl my-1">
      <div style={progressStyle} className="w-[20px] rounded-b-xl bottom-0 bg-primary-600 absolute">
        <span className="absolute top-[-5px] text-center w-[10px] text-xs left-7">{current}%</span>
      </div>
    </div>
  );

  const code = `
    export default function VerticalProgress({ min, max, value }) {
      const current = Math.ceil((value / (max - min)) * 100);
    
      const progressStyle = {
        width: '\${current}%',
      };
    
      return (
        <div className="w-[20px] h-3/4 shadow-md bg-primary-100 relative rounded-xl my-1">
          <div style={progressStyle} className="w-[20px] rounded-b-xl bottom-0 bg-primary-600 absolute">
            <span className="absolute top-[-5px] text-center w-[10px] text-xs left-7">{current}%</span>
          </div>
        </div>
      );
    };
    `;

  return <Wrapper compChild={component} title="Vertical Progress" myCode={code} />;
}
