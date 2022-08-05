import React from "react";

const Pagenation = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <div className="flex justify-center gap-1 m-4">
      <div
        className={`${
          page === 1
            ? "button-pagenation invisible"
            : "button-pagenation p-[3px]"
        }`}
        onClick={() => setPage(page - 1)}
      >
        &lt;
      </div>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <div
            className="button-pagenation"
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            <div className="p-[4px] h-full">{i + 1}</div>
          </div>
        ))}
      <div
        className={`${
          page === numPages
            ? "button-pagenation invisible"
            : "button-pagenation p-[3px]"
        }`}
        onClick={() => setPage(page + 1)}
      >
        &gt;
      </div>
    </div>
  );
};

export default Pagenation;
