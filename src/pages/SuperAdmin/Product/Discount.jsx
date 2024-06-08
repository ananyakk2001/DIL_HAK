import React from 'react'

function Discount() {
  return (
    <div>
        <div id="root">
      <main>
        <div className="container">
          {/* <!-- Title and Top Buttons Start --> */}
          <div className="page-title-container">
            <div className="row g-0">
              {/* <!-- Title Start --> */}
              <div className="col-auto mb-3 mb-md-0 me-auto">
                <div className="w-auto sw-md-30">
                  <a href="/" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-small align-middle">Home</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">Discount</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}

              {/* <!-- Top Buttons Start --> */}
              <div className="w-100 d-md-none"></div>
              <div className="col-12 col-sm-6 col-md-auto d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
                <a href="/adddiscount" className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto">
                  <i data-acorn-icon="plus"></i>
                  <span>Add Discount</span>
                </a>
                <div className="dropdown d-inline-block d-xl-none">
                  <button type="button" className="btn btn-outline-primary btn-icon btn-icon-only ms-1" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
                    <i data-acorn-icon="sort"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end custom-sort">
                    <a className="dropdown-item sort" data-sort="code" href="#">Code</a>
                    <a className="dropdown-item sort" data-sort="type" href="#">Type</a>
                    <a className="dropdown-item sort" data-sort="date" href="#">Date</a>
                    <a className="dropdown-item sort" data-sort="usage" href="#">Usage</a>
                    <a className="dropdown-item sort" data-sort="status" href="#">Status</a>
                  </div>
                </div>
                {/* <div className="btn-group ms-1 check-all-container">
                  <div className="btn btn-outline-primary btn-custom-control p-0 ps-3 pe-2" data-target="#checkboxTable">
                    <span className="form-check float-end">
                      <input type="checkbox" className="form-check-input" id="checkAll" />
                    </span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split"
                    data-bs-offset="0,3"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <button className="dropdown-item" id="deleteChecked" type="button">Delete</button>
                  </div>
                </div> */}
              </div>
              {/* <!-- Top Buttons End --> */}
            </div>
          </div>
          {/* <!-- Title and Top Buttons End --> */}

          {/* <!-- Controls Start --> */}
          <div className="row mb-2">
            {/* <!-- Search Start --> */}
            <div className="col-sm-12 col-md-5 col-lg-3 col-xxl-2 mb-1">
              <div className="d-inline-block float-md-start me-1 mb-1 search-input-container w-100 shadow bg-foreground">
                <input className="form-control" placeholder="Search" />
                <span className="search-magnifier-icon">
                  <i data-acorn-icon="search"></i>
                </span>
                <span className="search-delete-icon d-none">
                  <i data-acorn-icon="close"></i>
                </span>
              </div>
            </div>
            {/* <!-- Search End --> */}

            <div className="col-sm-12 col-md-7 col-lg-9 col-xxl-10 text-end mb-1">
              <div className="d-inline-block">
                {/* <!-- Length Start --> */}
                <div className="dropdown-as-select d-inline-block" data-childSelector="span">
                  <button className="btn p-0 shadow" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,3">
                    <span
                      className="btn btn-foreground-alternate dropdown-toggle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-delay="0"
                      title="Item Count"
                    >
                      10 Items
                    </span>
                  </button>
                  <div className="dropdown-menu shadow dropdown-menu-end">
                    <a className="dropdown-item" href="#">5 Items</a>
                    <a className="dropdown-item active" href="#">10 Items</a>
                    <a className="dropdown-item" href="#">20 Items</a>
                  </div>
                </div>
                {/* <!-- Length End --> */}
              </div>
            </div>
          </div>
          {/* <!-- Controls End --> */}

          {/* <!-- Discount List Start --> */}
          <div className="row">
            <div className="col-12 mb-5">
              <div className="card mb-2 bg-transparent no-shadow d-none d-lg-block">
                <div className="card-body pt-0 pb-0 sh-3">
                  <div className="row g-0 h-100 align-content-center">
                    <div className="col-12 col-lg-2 d-flex align-items-center mb-2 mb-lg-0 text-muted text-small">CODE</div>
                    <div className="col-6 col-lg-2 d-flex align-items-center text-alternate text-medium text-muted text-small">TYPE</div>
                    <div className="col-6 col-lg-4 d-flex align-items-center text-alternate text-medium text-muted text-small">DATE</div>
                    <div className="col-6 col-lg-1 d-flex align-items-center text-alternate text-medium text-muted text-small">STATUS</div>
                  </div>
                </div>
              </div>
              <div id="checkboxTable">
                <div className="card mb-2">
                  <div className="card-body py-4 py-lg-0 sh-lg-8">
                    <div className="row g-0 h-100 align-content-center">
                      <div className="col-11 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 h-lg-100 position-relative">
                        <div className="text-muted text-small d-lg-none">Code</div>
                        <a href="/viewdiscount" className="text-truncate h-100 d-flex align-items-center">
                          SUMMERSALE
                        </a>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-2">
                        <div className="text-muted text-small d-lg-none">Type</div>
                        <div className="text-alternate">Fixed Amount</div>
                      </div>
                      <div className="col-6 col-lg-4 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-3">
                        <div className="text-muted text-small d-lg-none">Date</div>
                        <div className="text-alternate">01.06.2021 - 01.07.2021</div>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-last order-lg-5">
                        <div className="text-muted text-small d-lg-none">Status</div>
                        <div>
                          <span className="badge rounded-pill bg-outline-primary">ACTIVE</span>
                        </div>
                      </div>
                      <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                        <a href="/updatediscount" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"><i className='fa-solid fa-pen'/></a>
                      </div>
                      <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                        <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"><i className='fa-solid fa-trash'/></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="card-body py-4 py-lg-0 sh-lg-8">
                    <div className="row g-0 h-100 align-content-center">
                      <div className="col-11 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 h-lg-100 position-relative">
                        <div className="text-muted text-small d-lg-none">Code</div>
                        <a
                          href="/viewdiscount"
                          className="text-truncate h-100 d-flex align-items-center muted-link"
                        >
                          15OFF
                        </a>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-2">
                        <div className="text-muted text-small d-lg-none">Type</div>
                        <div className="text-muted">Percentage</div>
                      </div>
                      <div className="col-6 col-lg-4 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-3">
                        <div className="text-muted text-small d-lg-none">Date</div>
                        <div className="text-muted">14.04.2021 - 21.04.2021</div>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-last order-lg-5">
                        <div className="text-muted text-small d-lg-none">Status</div>
                        <div>
                          <span className="badge rounded-pill bg-outline-muted">EXPIRED</span>
                        </div>
                      </div>
                      <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                        <a href="/updatediscount" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"><i className='fa-solid fa-pen'/></a>
                      </div>
                      <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                        <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"><i className='fa-solid fa-trash'/></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="card-body py-4 py-lg-0 sh-lg-8">
                    <div className="row g-0 h-100 align-content-center">
                      <div className="col-11 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 h-lg-100 position-relative">
                        <div className="text-muted text-small d-lg-none">Code</div>
                        <a
                          href="/viewdiscount"
                          className="text-truncate h-100 d-flex align-items-center muted-link"
                          >
                          25OFF
                        </a>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-2">
                        <div className="text-muted text-small d-lg-none">Type</div>
                        <div className="text-muted">Percentage</div>
                      </div>
                      <div className="col-6 col-lg-4 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-3">
                        <div className="text-muted text-small d-lg-none">Date</div>
                        <div className="text-muted">01.02.2021 - 01.03.2021</div>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-last order-lg-5">
                        <div className="text-muted text-small d-lg-none">Status</div>
                        <div>
                          <span className="badge rounded-pill bg-outline-muted">EXPIRED</span>
                        </div>
                      </div>
                      <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                        <a href="/updatediscount" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"><i className='fa-solid fa-pen'/></a>
                      </div>
                      <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                        <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"><i className='fa-solid fa-trash'/></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="card-body py-4 py-lg-0 sh-lg-8">
                    <div className="row g-0 h-100 align-content-center">
                      <div className="col-11 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 h-lg-100 position-relative">
                        <div className="text-muted text-small d-lg-none">Code</div>
                        <a
                          href="/viewdiscount"
                          className="text-truncate h-100 d-flex align-items-center muted-link"
                        >
                          NEWYEAR
                        </a>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-2">
                        <div className="text-muted text-small d-lg-none">Type</div>
                        <div className="text-muted">Percentage</div>
                      </div>
                      <div className="col-6 col-lg-4 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-3">
                        <div className="text-muted text-small d-lg-none">Date</div>
                        <div className="text-muted">21.12.2020 - 07.01.2021</div>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-last order-lg-5">
                        <div className="text-muted text-small d-lg-none">Status</div>
                        <div>
                          <span className="badge rounded-pill bg-outline-muted">EXPIRED</span>
                        </div>
                      </div>
                      <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                        <a href="/updatediscount" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"><i className='fa-solid fa-pen'/></a>
                      </div>
                      <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                        <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"><i className='fa-solid fa-trash'/></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Discount List End --> */}
        </div>
      </main>
    </div>
    </div>
  )
}

export default Discount
