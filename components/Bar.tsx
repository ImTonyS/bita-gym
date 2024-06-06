import React from "react";

export default function Bar({
  servicio,
  children,
}: {
  servicio: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center">
      {/* Icon */}
      <span className="inline-flex size-[46px] flex-shrink-0 items-center justify-center rounded-full border border-2 border-bita-green bg-bita-dark text-gray-800 shadow-sm">
        {children}
      </span>
      <div className="ms-4">
        <h3 className="text-base font-semibold text-gray-800  dark:text-neutral-200">
          {servicio}
        </h3>
      </div>
    </div>
  );
}
