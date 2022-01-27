export default function SignInForm() {
  const FormField = ({ type, name, placeholder, className }) => {
    return (
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`${className} p-3 py-4 text-lg bg-gray-50 roboto-regular border-2 rounded-lg focus:outline-primary-600 border-2 border-primary-300 m-3 shadow-md placeholder:font-hand placeholder:text-2xl`}
      />
    );
  };

  const logo = (
    <svg className="w-1/6 mr-2 fill-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268 267">
      <g>
        <path d="M62,85.51Q53.88,106.77,53.88,134t8.18,48.21a92.43,92.43,0,0,0,16.07,26.9V57.86A97.26,97.26,0,0,0,62,85.51Z" />
        <path d="M36,103.32q-5.13,13.37-5.12,30.51T36,164.15a58.24,58.24,0,0,0,10.11,16.92V85.93A61.23,61.23,0,0,0,36,103.32Z" />
        <path d="M196.15,117.11h-41v46.48H181V178.9a44.42,44.42,0,0,1-10.82,3.22,78.56,78.56,0,0,1-13.63,1.08,50.88,50.88,0,0,1-18.2-2.92,27.67,27.67,0,0,1-12.16-8.77q-4.56-5.83-6.85-15.54A103.09,103.09,0,0,1,117,132.69,110.23,110.23,0,0,1,119,110.46q2-9.33,5.84-15.11A24.31,24.31,0,0,1,135,86.69a36,36,0,0,1,15-2.89,35,35,0,0,1,9.27,1.11A17.81,17.81,0,0,1,171,94.11a35,35,0,0,1,3.22,8.77l30.63-2.56,30.62-2.55a79.29,79.29,0,0,0-9-27.43,66.74,66.74,0,0,0-17.86-20.52A77.92,77.92,0,0,0,183,37a114.33,114.33,0,0,0-32.37-4.27q-22.69,0-40.4,6.72A81.37,81.37,0,0,0,87.46,52.56l1.16,163.38A83.27,83.27,0,0,0,111,227.79q18.27,6.45,42,6.45a160.93,160.93,0,0,0,23.4-1.68,150.75,150.75,0,0,0,22.4-5,133,133,0,0,0,20.52-8.12,113.33,113.33,0,0,0,17.76-11V117.11Z" />
      </g>
    </svg>
  );

  return (
    <>
      <div className="flex flex-col items-center justify-around w-full h-auto p-4 bg-white shadow-xl rounded-xl">
        {logo}
        <form className="flex flex-col items-center justify-between w-11/12 max-w-[600px] ">
          <div className="flex flex-col w-full md:w-3/4 lg:w-2/3">
            <FormField type="text" name="email" placeholder="email" className="h-[50px]" />
            <FormField type="password" name="password" placeholder="password" className="h-[50px]" />
          </div>
          <input
            type="submit"
            name="Send"
            value="Sign In"
            className="p-2 px-3 mx-auto mt-3 text-lg text-white rounded-lg shadow-md cursor-pointer bg-primary-600 font-sans-bb h-3/4 hover:bg-primary-700"
          />
        </form>
      </div>
    </>
  );
}
