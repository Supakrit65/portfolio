import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="group flex items-center gap-2 justify-center 
      h-[3rem] w-[8rem] bg-slate-800 text-white rounded-full 
      outline-none transition-all hover:scale-110 hover:bg-slate-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-60
      dark:bg-white dark:bg-opacity-10"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 text-sm opacity-70 transition-all" />
        </>
      )}
    </button>
  );
};

export default SubmitBtn;
