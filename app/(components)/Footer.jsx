import React from "react";

const Footer = () => {
  return (
    <div className="flex bg-slate-100 py-2 items-end px-4 flex-row-reverse">
      <p>
        Made by{" "}
        <a
          className="underline text-fuchsia-700 hover:text-fuchsia-500"
          href="https://www.galitie.com/"
          target="_blank"
        >
          Galitie
        </a>
      </p>
    </div>
  );
};

export default Footer;
