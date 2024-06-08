import React from 'react'

function Search() {
  return (
    <div>
       {/* <!-- Search Modal Start --> */}
    <div className="modal fade modal-under-nav modal-search modal-close-out" id="searchPagesModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header border-0 p-0">
            <button type="button" className="btn-close btn btn-icon btn-icon-only btn-foreground" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body ps-5 pe-5 pb-0 border-0">
            <input id="searchPagesInput" className="form-control form-control-xl borderless ps-0 pe-0 mb-1 auto-complete" type="text" autocomplete="off" />
          </div>
          <div className="modal-footer border-top justify-content-start ps-5 pe-5 pb-3 pt-3 border-0">
            <span className="text-alternate d-inline-block m-0 me-3">
              <i data-acorn-icon="arrow-bottom" data-acorn-size="15" className="text-alternate align-middle me-1"></i>
              <span className="align-middle text-medium">Navigate</span>
            </span>
            <span className="text-alternate d-inline-block m-0 me-3">
              <i data-acorn-icon="arrow-bottom-left" data-acorn-size="15" className="text-alternate align-middle me-1"></i>
              <span className="align-middle text-medium">Select</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Search Modal End --> */}
    </div>
  )
}

export default Search
