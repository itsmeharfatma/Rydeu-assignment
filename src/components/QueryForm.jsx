import React from "react";

const QueryForm = () => {
  return (
    <form className="w-full max-w-xl space-y-4 pt-3 pb-1 max-sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3 max-md:mt-6">
        {[
          { id: "name", label: "Name" },
          {
            id: "email",
            type: "email",
            label: "Email",
          },
          {
            id: "subject",
            label: "Subject",
          },
          {
            id: "orderNumber",
            label: "Order no.",
          },
        ].map(({ id, type = "text", label }) => (
          <div key={id} className="space-y-1">
            <label className="text-xs font-medium text-[#484848]">
              {label}
            </label>
            <input
              type={type}
              id={id}
              className="block w-full rounded border border-[#E2E2E2] bg-[#F7F7F7] px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>
        ))}
      </div>
      <div className="space-y-1">
        <label className="text-xs font-medium text-[#484848]">Your Query</label>
        <textarea
          id="query"
          rows={4}
          className="block w-full rounded-md border border-[#E2E2E2] bg-[#F7F7F7] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          required
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="focus:ring-primary-500 rounded-sm bg-[#FD2E5A] px-10 py-1 text-center text-white text-sm focus:outline-none focus:ring-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default QueryForm;
