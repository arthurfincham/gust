export default function CircularProgress({ min, max, value }) {
  const current = Math.ceil((value / (max - min)) * 100);
  const radius = 70;
  const stroke = 10;
  const normRadius = radius - stroke * 2;
  const circumference = normRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (current / 100) * circumference;

  return (
    <div className="h-[150px] w-[150px]  bg-white relative shadow-lg  rounded-xl flex items-center relative justify-center">
      <svg height={radius * 2} width={radius * 2} strokeLinecap="round" stroke-width={stroke}>
        <circle
          className="stroke-primary-100 fill-transparent"
          transform={`rotate(-90 ${radius} ${radius})`}
          r={normRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          className="stroke-primary-600 fill-transparent"
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          transform={`rotate(-90 ${radius} ${radius})`}
          r={normRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <span className="absolute text-4xl text-gray-700 handwriting">{current}%</span>
    </div>
  );
}
