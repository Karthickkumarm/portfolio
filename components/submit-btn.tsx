import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group relative w-full h-12 flex items-center justify-center gap-2.5 rounded-xl font-semibold text-sm text-white
        bg-gradient-to-r from-violet-600 to-indigo-600
        hover:from-violet-500 hover:to-indigo-500
        focus:outline-none focus:ring-2 focus:ring-violet-500/50
        active:scale-[0.98] transition-all duration-200
        shadow-lg shadow-violet-500/25
        disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
    >
      {pending ? (
        <>
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          <span>Sending…</span>
        </>
      ) : (
        <>
          <span>Send Message</span>
          <FaPaperPlane className="text-xs opacity-80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
        </>
      )}
    </button>
  );
}
