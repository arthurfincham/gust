export default function ContactForm() {
  const FormField = ({ type, name, placeholder, className }) => {
    return (
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`${className} p-3 py-4 text-lg roboto-regular border-2 rounded-lg focus:outline-none border-none m-3 shadow-lg placeholder:font-hand placeholder:text-2xl`}
      />
    );
  };

  return (
    <>
      <div className="flex items-center justify-around w-full h-auto p-4 shadow-xl bg-primary-600 rounded-xl">
        <form className="flex flex-col items-center justify-between w-11/12 ">
          <div className="flex w-full">
            <FormField type="text" name="name" placeholder="name" className="ml-0 w-2/5 h-[40px]" />
            <FormField type="text" name="email" placeholder="email" className="w-3/5 h-[40px] mr-0" />
          </div>
          <textarea
            className="p-3 mx-4 placeholder:font-hand placeholder:text-2xl w-full text-lg border-primary-300 roboto-regular  rounded-lg h-[200px] shadow-lg focus:outline-none"
            placeholder="Enter your message..."
          ></textarea>
          <input type="submit" name="Send" className="p-2 mx-auto mt-4 text-xl bg-white shadow-md text-primary-600 font-sans-bb h-3/4 rounded-xl" />
        </form>
      </div>
    </>
  );
}