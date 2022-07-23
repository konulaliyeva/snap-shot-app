import React from "react";
import "./pagination.css";

function Pagination({handleFilter}) {
    
  return (
    <>
      <div className="pagination mb-5 mt-5">
        <a href="">&laquo;</a>
        <a href="" className="active" onClick={handleFilter}>1</a>
        <a href="" >
          2
        </a>
        <a href="">3</a>
        <a href="">4</a>
        <a href="" onClick={handleFilter}>&raquo;</a>
      </div>
    </>
  );
}

export default Pagination;
