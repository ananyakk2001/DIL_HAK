import React from 'react'

function SalesOrderList() {
  return (
    <div>
      <main>
        <div className="container">
          {/* <!-- Title and Top Buttons Start --> */}
          <div className="page-title-container">
            <div className="row">
              {/* <!-- Title Start --> */}
              <div className="col-auto mb-3 mb-md-0 me-auto">
                <div className="w-auto sw-md-30">
                  <a href="/" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-small align-middle">Home</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">Order List</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}
              {/* <!-- Top Buttons Start --> */}
              <div className="col-12 col-md-5 d-flex align-items-end justify-content-end">
                {/* <!-- Status Button Start --> */}
                <div className="dropdown-as-select w-100 w-md-auto">
                  <button
                    className="btn btn btn-outline-primary w-100 w-md-auto dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">Status: Pending</a>
                    <a className="dropdown-item" href="#">Status: Shipped</a>
                    <a className="dropdown-item active" href="#">Status: Delivered</a>
                  </div>
                </div>
                {/* <!-- Status Button End --> */}

                {/* <!-- Dropdown Button Start --> */}
                <div className="ms-1">
                  {/* <button
                    type="button"
                    className="btn btn-outline-primary btn-icon btn-icon-only"
                    data-bs-offset="0,3"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-submenu
                  >
                    <i data-acorn-icon="more-horizontal"></i>
                  </button> */}
                  <div className="dropdown-menu dropdown-menu-end">
                    <button className="dropdown-item" type="button">Edit</button>
                    <button className="dropdown-item" type="button">View Invoice</button>
                    <button className="dropdown-item" type="button">Track Package</button>
                  </div>
                </div>
                {/* <!-- Dropdown Button End --> */}
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

          {/* <!-- Order List Start --> */}
          <div className="row">
            <div className="col-12 mb-5">
              <div className="card mb-2 bg-transparent no-shadow d-none d-md-block">
                <div className="card-body pt-0 pb-0 sh-3">
                  <div className="row g-0 h-100 align-content-center">
                    <div className="col-md-2 d-flex align-items-center mb-2 mb-md-0 text-muted text-small">ID</div>
                    <div className="col-md-3 d-flex align-items-center text-muted text-small">NAME</div>
                    <div className="col-md-2 d-flex align-items-center text-muted text-small">PRICE</div>
                    <div className="col-md-2 d-flex align-items-center text-muted text-small">DATE</div>
                    <div className="col-md-2 d-flex align-items-center text-muted text-small">STATUS</div>
                  </div>
                </div>
              </div>
              <div id="checkboxTable">
                <div className="card mb-2">
                  <div className="card-body pt-0 pb-0 sh-21 sh-md-8">
                    <div className="row g-0 h-100 align-content-center">
                      <div className="col-11 col-md-2 d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                        <div className="text-muted text-small d-md-none">Id</div>
                        <a href="/sales-orderdetails" className="text-truncate h-100 d-flex align-items-center">1239</a>
                      </div>
                      <div className="col-6 col-md-3 d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                        <div className="text-muted text-small d-md-none">Name</div>
                        <div className="text-alternate">Joisse Kaycee</div>
                      </div>
                      <div className="col-6 col-md-2 d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                        <div className="text-muted text-small d-md-none">Price</div>
                        <div className="text-alternate">
                          <span>
                            <span className="text-small">$</span>
                            321.75
                          </span>
                        </div>
                      </div>
                      <div className="col-6 col-md-2 d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                        <div className="text-muted text-small d-md-none">Date</div>
                        <div className="text-alternate">13.09.2020</div>
                      </div>
                      <div className="col-6 col-md-2 d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                        <div className="text-muted text-small d-md-none">Status</div>
                        <div className="text-alternate">
                          <span className="badge rounded-pill bg-outline-primary">CONFIRMED</span>
                        </div>
                      </div>
                      <div className="col-1 col-md-1 d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
                        <label className="form-check float-end pe-none mt-1">
                          <input type="checkbox" className="form-check-input" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="card-body pt-0 pb-0 sh-21 sh-md-8">
                    <div className="row g-0 h-100 align-content-center">
                      <div className="col-11 col-md-2 d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                        <div className="text-muted text-small d-md-none">Id</div>
                        <a href="/sales-orderdetails" className="text-truncate h-100 d-flex align-items-center">1251</a>
                      </div>
                      <div className="col-6 col-md-3 d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                        <div className="text-muted text-small d-md-none">Name</div>
                        <div className="text-alternate">Esperanza Lodge</div>
                      </div>
                      <div className="col-6 col-md-2 d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                        <div className="text-muted text-small d-md-none">Price</div>
                        <div className="text-alternate">
                          <span>
                            <span className="text-small">$</span>
                            59.00
                          </span>
                        </div>
                      </div>
                      <div className="col-6 col-md-2 d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                        <div className="text-muted text-small d-md-none">Date</div>
                        <div className="text-alternate">14.09.2020</div>
                      </div>
                      <div className="col-6 col-md-2 d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                        <div className="text-muted text-small d-md-none">Status</div>
                        <div className="text-alternate">
                          <span className="badge rounded-pill bg-outline-primary">CONFIRMED</span>
                        </div>
                      </div>
                      <div className="col-1 col-md-1 d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
                        <label className="form-check float-end pe-none mt-1">
                          <input type="checkbox" className="form-check-input" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="card-body pt-0 pb-0 sh-21 sh-md-8">
                    <div className="row g-0 h-100 align-content-center">
                      <div className="col-11 col-md-2 d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                        <div className="text-muted text-small d-md-none">Id</div>
                        <a href="/sales-orderdetails" className="text-truncate h-100 d-flex align-items-center">1397</a>
                      </div>
                      <div className="col-6 col-md-3 d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                        <div className="text-muted text-small d-md-none">Name</div>
                        <div className="text-alternate">Blaine Cottrell</div>
                      </div>
                      <div className="col-6 col-md-2 d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                        <div className="text-muted text-small d-md-none">Price</div>
                        <div className="text-alternate">
                          <span>
                            <span className="text-small">$</span>
                            128.25
                          </span>
                        </div>
                      </div>
                      <div className="col-6 col-md-2 d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                        <div className="text-muted text-small d-md-none">Date</div>
                        <div className="text-alternate">17.09.2020</div>
                      </div>
                      <div className="col-6 col-md-2 d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                        <div className="text-muted text-small d-md-none">Status</div>
                        <div className="text-alternate">
                          <span className="badge rounded-pill bg-outline-primary">CONFIRMED</span>
                        </div>
                      </div>
                      <div className="col-1 col-md-1 d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
                        <label className="form-check float-end pe-none mt-1">
                          <input type="checkbox" className="form-check-input" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="card-body pt-0 pb-0 sh-21 sh-md-8">
                    <div className="row g-0 h-100 align-content-center">
                      <div className="col-11 col-md-2 d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                        <div className="text-muted text-small d-md-none">Id</div>
                        <a href="/sales-orderdetails" className="text-truncate h-100 d-flex align-items-center">1397</a>
                      </div>
                      <div className="col-6 col-md-3 d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                        <div className="text-muted text-small d-md-none">Name</div>
                        <div className="text-alternate">Blaine Cottrell</div>
                      </div>
                      <div className="col-6 col-md-2 d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                        <div className="text-muted text-small d-md-none">Price</div>
                        <div className="text-alternate">
                          <span>
                            <span className="text-small">$</span>
                            128.25
                          </span>
                        </div>
                      </div>
                      <div className="col-6 col-md-2 d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                        <div className="text-muted text-small d-md-none">Date</div>
                        <div className="text-alternate">17.09.2020</div>
                      </div>
                      <div className="col-6 col-md-2 d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                        <div className="text-muted text-small d-md-none">Status</div>
                        <div className="text-alternate">
                          <span className="badge rounded-pill bg-outline-primary">CONFIRMED</span>
                        </div>
                      </div>
                      <div className="col-1 col-md-1 d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
                        <label className="form-check float-end pe-none mt-1">
                          <input type="checkbox" className="form-check-input" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Order List End --> */}

          {/* <!-- Pagination Start --> */}
          <div className="d-flex justify-content-center">
            <nav>
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link shadow" href="#" tabindex="-1" aria-disabled="true">
                    <i data-acorn-icon="chevron-left"></i>
                  </a>
                </li>
                <li className="page-item active"><a className="page-link shadow" href="#">1</a></li>
                <li className="page-item"><a className="page-link shadow" href="#">2</a></li>
                <li className="page-item"><a className="page-link shadow" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i data-acorn-icon="chevron-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* <!-- Pagination End --> */}
        </div>
      </main>
    </div>
  )
}

export default SalesOrderList
