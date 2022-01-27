import React from 'react';
export default function NewsletterFormTitled() {
  const FormField = ({ type, name, placeholder, className }) => {
    return (
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`${className} p-3 md:py-4 text-md md:text-lg roboto-regular border-2 rounded-lg focus:outline-none border-none m-3 shadow-lg placeholder:font-hand placeholder:text-2xl`}
      />
    );
  };

  return (
    <div className="flex flex-col items-start justify-around w-full h-auto p-4 shadow-xl bg-primary-600 rounded-xl">
      <h3 className="mb-2 ml-4 text-4xl text-white text-shadow-md md:text-6xl font-sans-bb">
        Keep in touch.
      </h3>
      <div className="flex items-center justify-between w-full h-1/3">
        <FormField
          type="email"
          name="email"
          placeholder="email address"
          className="w-4/5"
        />
        <input
          type="submit"
          value="Subscribe"
          name="Subscribe"
          className="p-3 mx-auto bg-white rounded-lg shadow-md cursor-pointer md:p-4 text-md md:text-lg text-primary-600 font-sans-bb hover:bg-gray-100"
        />
      </div>
    </div>
  );
}
