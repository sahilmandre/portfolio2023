import React from "react";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
function Contacts({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    (window.location.href = `mailto:sahilmandre@gmail.com?subject=${formData.subject}&body=Hi my name is 
    ${formData.name}. ${formData.message} (${formData.email})`);

  return (
    <div
      className="h-screen flex flex-col relative 
            text-center md:text-left md:flex-row 
            max-w-5xl px-10 justify-evenly items-center mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Contact
      </h3>

      <div className="flex  flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#f7ab04]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-10 mx-auto">
          <div className="flex items-center space-x-5">
            <PhoneIcon className="text-[#f7ab04] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+91-7987391196</p>
          </div>

          <div className="flex items-center space-x-5">
            <EnvelopeIcon className="text-[#f7ab04] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Sahilmandre@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5">
            <MapIcon className="text-[#f7ab04] h-7 w-7 animate-pulse " />
            <p className="text-2xl text-left">
              Present in Jabalpur, Bhopal & Indore
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              type="text"
              className="contactInput"
            />
            <input
              {...register("email")}
              placeholder="Email"
              type="email"
              className="contactInput"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            type="text"
            className="contactInput"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />

          <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
