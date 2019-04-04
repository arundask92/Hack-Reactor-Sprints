import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = props => {
  return (
    <div className="pagination">
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={<span>...</span>}
        breakClassName={"break-me"}
        pageCount={props.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={props.handlePageChange}
        containerClassName={"pagination"}
        disabledClassName={"page-item disabled"}
        activeClassName={"active"}
        pageLinkClassName={"page-link"}
        pageClassName={"page-item"}
        previousClassName={"page-link"}
        nextClassName={"page-link"}
      />
    </div>
  );
};

export default Pagination;
