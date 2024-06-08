import React from 'react'

function SalesAdminCustomerList() {
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
                  <a href="/salesadmin-dashboard" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-small align-middle">Home</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">Customer List</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}

              {/* <!-- Top Buttons Start --> */}
              <div className="col-3 d-flex align-items-end justify-content-end">
                {/* <!-- Check Button Start --> */}
                
                {/* <!-- Check Button End --> */}
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
                {/* <!-- Print Button Start --> */}
                {/* <button
                  className="btn btn-icon btn-icon-only btn-foreground-alternate shadow"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-delay="0"
                  title="Print"
                  type="button"
                >
                  <i data-acorn-icon="print"></i>
                </button> */}
                {/* <!-- Print Button End --> */}

                {/* <!-- Export Dropdown Start --> */}
                {/* <div className="d-inline-block">
                  <button className="btn p-0" data-bs-toggle="dropdown" type="button" data-bs-offset="0,3">
                    <span
                      className="btn btn-icon btn-icon-only btn-foreground-alternate shadow dropdown"
                      data-bs-delay="0"
                      data-bs-placement="top"
                      data-bs-toggle="tooltip"
                      title="Export"
                    >
                      <i data-acorn-icon="download"></i>
                    </span>
                  </button>
                  <div className="dropdown-menu shadow dropdown-menu-end">
                    <button className="dropdown-item export-copy" type="button">Copy</button>
                    <button className="dropdown-item export-excel" type="button">Excel</button>
                    <button className="dropdown-item export-cvs" type="button">Cvs</button>
                  </div>
                </div> */}
                {/* <!-- Export Dropdown End --> */}

                {/* <!-- Length Start --> */}
                {/* <div className="dropdown-as-select d-inline-block" data-childSelector="span">
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
                </div> */}
                {/* <!-- Length End --> */}
              </div>
            </div>
          </div>
          {/* <!-- Controls End --> */}

          {/* <!-- Customers List Start --> */}
          <div className="row">
            <div className="col-12 mb-5">
              <div className="card mb-2 bg-transparent no-shadow d-none d-lg-block">
                <div className="row g-0 sh-3">
                  <div className="col">
                    <div className="card-body pt-0 pb-0 h-100">
                      <div className="row g-0 h-100 align-content-center">
                        <div className="col-lg-1 d-flex align-items-center mb-2 mb-lg-0 text-muted text-small">ID</div>
                        <div className="col-lg-2 d-flex align-items-center text-muted text-small">NAME</div>
                        <div className="col-lg-3 d-flex align-items-center text-muted text-small">LOCATION</div>
                        <div className="col-lg-2 d-flex align-items-center text-muted text-small">SPENT</div>
                        <div className="col-lg-2 d-flex align-items-center text-muted text-small">LAST ORDER</div>
                        <div className="col-lg-1 d-flex align-items-center text-muted text-small"></div>
                        <div className="col-lg-1 d-flex align-items-center text-muted text-small"></div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="checkboxTable">
                <div className="card mb-2">
                  <div className="card-body pt-0 pb-0 sh-30 sh-lg-8">
                    <div className="row g-0 h-100 align-content-center">
                      <div className="col-11 col-lg-1 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 h-lg-100 position-relative">
                        <div className="text-muted text-small d-lg-none">Id</div>
                        <a href="/salesadmin-customerdetails" className="text-truncate h-100 d-flex align-items-center">245</a>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-2">
                        <div className="text-muted text-small d-lg-none">Name</div>
                        <div className="text-alternate">Joisse Kaycee</div>
                      </div>
                      <div className="col-6 col-lg-3 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-3">
                        <div className="text-muted text-small d-lg-none">Location</div>
                        <div className="text-alternate">Leipzig, DE</div>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4">
                        <div className="text-muted text-small d-lg-none">Spent</div>
                        <div className="text-alternate">
                          <span>
                            <span className="text-small">$</span>
                            321.75
                          </span>
                        </div>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-4">
                        <div className="text-muted text-small d-lg-none">Last Order</div>
                        <div className="text-alternate">
                          <a href="Orders.Detail.html" className="text-truncate h-100 d-flex align-items-center">5323</a>
                        </div>
                      </div>
                      <div class="col-12 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-last order-lg-5">
                        <div class="text-muted text-small d-lg-none mb-1">Status</div>
                        <div>
                          <i
                            class="text-primary me-2"
                            data-acorn-icon="content"
                            data-acorn-size="17"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Newsletter"
                          ></i>
                          <i
                            class="text-primary me-2"
                            data-acorn-icon="boxes"
                            data-acorn-size="17"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Purchased"
                          ></i>
                          <i
                            class="text-primary me-2"
                            data-acorn-icon="check-square"
                            data-acorn-size="17"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Trusted"
                          ></i>
                          <i
                            class="text-primary me-2"
                            data-acorn-icon="phone"
                            data-acorn-size="17"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Phone"
                          ></i>
                        </div>
                      </div>
                      
                     
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="card-body pt-0 pb-0 sh-30 sh-lg-8">
                    <div className="row g-0 h-100 align-content-center">
                      <div className="col-11 col-lg-1 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 h-lg-100 position-relative">
                        <div className="text-muted text-small d-lg-none">Id</div>
                        <a href="Customers.Detail.html" className="text-truncate h-100 d-flex align-items-center">244</a>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-2">
                        <div className="text-muted text-small d-lg-none">Name</div>
                        <div className="text-alternate">Kathleen Bertha</div>
                      </div>
                      <div className="col-6 col-lg-3 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-3">
                        <div className="text-muted text-small d-lg-none">Location</div>
                        <div className="text-alternate">Salvador, BR</div>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4">
                        <div className="text-muted text-small d-lg-none">Spent</div>
                        <div className="text-alternate">
                          <span>
                            <span className="text-small">$</span>
                            321.75
                          </span>
                        </div>
                      </div>
                      
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-4">
                        <div className="text-muted text-small d-lg-none">Last Order</div>
                        <div className="text-alternate">
                          <a href="Orders.Detail.html" className="text-truncate h-100 d-flex align-items-center">5323</a>
                        </div>
                      </div>
                      <div class="col-12 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-last order-lg-5">
                        <div class="text-muted text-small d-lg-none mb-1">Status</div>
                        <div>
                          <i
                            class="text-primary me-2"
                            data-acorn-icon="content"
                            data-acorn-size="17"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Newsletter"
                          ></i>
                          <i
                            class="text-primary me-2"
                            data-acorn-icon="boxes"
                            data-acorn-size="17"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Purchased"
                          ></i>
                          <i
                            class="text-primary me-2"
                            data-acorn-icon="check-square"
                            data-acorn-size="17"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Trusted"
                          ></i>
                          <i
                            class="text-primary me-2"
                            data-acorn-icon="phone"
                            data-acorn-size="17"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Phone"
                          ></i>
                        </div>
                      </div>
                     
                     
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="card-body pt-0 pb-0 sh-30 sh-lg-8">
                    <div className="row g-0 h-100 align-content-center">
                      <div className="col-11 col-lg-1 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 h-lg-100 position-relative">
                        <div className="text-muted text-small d-lg-none">Id</div>
                        <a href="Customers.Detail.html" className="text-truncate h-100 d-flex align-items-center">243</a>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-2">
                        <div className="text-muted text-small d-lg-none">Name</div>
                        <div className="text-alternate">Mickey Fianna</div>
                      </div>
                      <div className="col-6 col-lg-3 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-3">
                        <div className="text-muted text-small d-lg-none">Location</div>
                        <div className="text-alternate">San Antonio, US</div>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4">
                        <div className="text-muted text-small d-lg-none">Spent</div>
                        <div className="text-alternate">-</div>
                      </div>
                      <div className="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-4">
                        <div className="text-muted text-small d-lg-none">Last Order</div>
                        <div className="text-alternate">-</div>
                      </div>
                      <div class="col-12 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-last order-lg-5">
                        <div class="text-muted text-small d-lg-none mb-1">Status</div>
                        <div>
                          <i
                            class="text-primary me-2"
                            data-acorn-icon="content"
                            data-acorn-size="17"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Newsletter"
                          ></i>
                          <i
                            class="text-primary me-2"
                            data-acorn-icon="boxes"
                            data-acorn-size="17"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Purchased"
                          ></i>
                          <i
                            class="text-primary me-2"
                            data-acorn-icon="check-square"
                            data-acorn-size="17"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Trusted"
                          ></i>
                          <i
                            class="text-primary me-2"
                            data-acorn-icon="phone"
                            data-acorn-size="17"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Phone"
                          ></i>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
               
                
                     
                
               
                
               
                
                       </div>
            </div>
          </div>
          {/* <!-- Customers List End --> */}

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

export default SalesAdminCustomerList