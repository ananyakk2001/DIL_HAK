import React from 'react'

function ProductList() {
  return (
    <div>
       <main>
        <div className="container">
          {/* <!-- Title and Top Buttons Start --> */}
          <div className="page-title-container">
            <div className="row g-0">
              {/* <!-- Title Start --> */}
              <div className="col-auto mb-3 mb-md-0 me-auto">
                <div className="w-auto sw-md-30">
                  <a href="#" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-small align-middle">Home</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">Product List</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}

              {/* <!-- Top Buttons Start --> */}
              <div className="w-100 d-md-none"></div>
              <div className="col-12 col-sm-6 col-md-auto d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
                <button type="button" className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto">
                  <i data-acorn-icon="plus"></i>
                  <span>Add Product</span>
                </button>
                <div className="dropdown d-inline-block d-lg-none">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-icon btn-icon-only ms-1"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i data-acorn-icon="sort"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end custom-sort">
                    <a className="dropdown-item sort" data-sort="name" href="#">Title</a>
                    <a className="dropdown-item sort" data-sort="email" href="#">Stock</a>
                    <a className="dropdown-item sort" data-sort="phone" href="#">Price</a>
                    <a className="dropdown-item sort" data-sort="group" href="#">Status</a>
                  </div>
                </div>
                <div className="btn-group ms-1 check-all-container-checkbox-click">
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
                </div>
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
                <button
                  className="btn btn-icon btn-icon-only btn-foreground-alternate shadow"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-delay="0"
                  title="Print"
                  type="button"
                >
                  <i data-acorn-icon="print"></i>
                </button>
                {/* <!-- Print Button End --> */}

                {/* <!-- Export Dropdown Start --> */}
                <div className="d-inline-block">
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
                </div>
                {/* <!-- Export Dropdown End --> */}

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

          <div className="row g-0">
            <div className="col-12 mb-5">
              {/* <!-- List Items Start --> */}
              <div id="checkboxTable">
                <div className="mb-4 mb-lg-3 bg-transparent no-shadow d-none d-lg-block">
                  <div className="row g-0">
                    <div className="col-auto sw-11 d-none d-lg-flex"></div>
                    <div className="col">
                      <div className="ps-5 pe-4 h-100">
                        <div className="row g-0 h-100 align-content-center custom-sort">
                          <div className="col-lg-4 d-flex flex-column mb-lg-0 pe-3 d-flex">
                            <div className="text-muted text-small cursor-pointer sort" data-sort="name">NAME</div>
                          </div>
                          <div className="col-lg-2 d-flex flex-column pe-1 justify-content-center">
                            <div className="text-muted text-small cursor-pointer sort" data-sort="email">STOCK</div>
                          </div>
                          <div className="col-lg-3 d-flex flex-column pe-1 justify-content-center">
                            <div className="text-muted text-small cursor-pointer sort" data-sort="phone">PRICE</div>
                          </div>
                          <div className="col-lg-2 d-flex flex-column pe-1 justify-content-center">
                            <div className="text-muted text-small cursor-pointer sort" data-sort="group">STATUS</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Items Container Start --> */}

                <div className="card mb-2">
                  <div className="row g-0 h-100 sh-lg-9 position-relative">
                    <a href="Products.Detail.html" className="col-auto position-relative">
                      <img src="img/product/small/product-1.webp" alt="product" className="card-img card-img-horizontal sw-11 h-100" />
                    </a>
                    <div className="col py-4 py-lg-0">
                      <div className="ps-5 pe-4 h-100">
                        <div className="row g-0 h-100 align-content-center">
                          <a href="Products.Detail.html" className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center">
                            CHURIDHAR
                          </a>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                            <div className="lh-1 text-alternate">2.511</div>
                          </div>
                          <div className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                            <div className="lh-1 text-alternate">$123.99</div>
                          </div>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                            <span className="badge bg-outline-primary group">SALE</span>
                          </div>
                          <div className="col-1 d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                            <label className="form-check mt-2">
                              <input type="checkbox" className="form-check-input pe-none" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="row g-0 h-100 sh-lg-9 position-relative">
                    <a href="Products.Detail.html" className="col-auto position-relative">
                      <img src="img/product/small/product-2.webp" alt="product" className="card-img card-img-horizontal sw-11 h-100" />
                    </a>
                    <div className="col py-4 py-lg-0">
                      <div className="ps-5 pe-4 h-100">
                        <div className="row g-0 h-100 align-content-center">
                          <a
                            href="Products.Detail.html"
                            className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"
                          >
                            Aromatic Green Candle
                            <div className="text-small text-muted text-truncate position">#2567</div>
                          </a>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                            <div className="lh-1 text-alternate">352</div>
                          </div>
                          <div className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                            <div className="lh-1 text-alternate">$ 41.15</div>
                          </div>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                            <span className="badge bg-outline-primary group">SALE</span>
                          </div>
                          <div className="col-1 d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                            <label className="form-check mt-2">
                              <input type="checkbox" className="form-check-input pe-none" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="row g-0 h-100 sh-lg-9 position-relative">
                    <a href="Products.Detail.html" className="col-auto position-relative">
                      <img src="img/product/small/product-3.webp" alt="product" className="card-img card-img-horizontal sw-11 h-100" />
                    </a>
                    <div className="col py-4 py-lg-0">
                      <div className="ps-5 pe-4 h-100">
                        <div className="row g-0 h-100 align-content-center">
                          <a
                            href="Products.Detail.html"
                            className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"
                          >
                            Good Glass Teapot
                            <div className="text-small text-muted text-truncate position">#1831</div>
                          </a>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                            <div className="lh-1 text-alternate">1.531</div>
                          </div>
                          <div className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                            <div className="lh-1 text-alternate">$ 7.50</div>
                          </div>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5"></div>
                          <div className="col-1 d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                            <label className="form-check mt-2">
                              <input type="checkbox" className="form-check-input pe-none" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="row g-0 h-100 sh-lg-9 position-relative">
                    <a href="Products.Detail.html" className="col-auto position-relative">
                      <img src="img/product/small/product-4.webp" alt="product" className="card-img card-img-horizontal sw-11 h-100" />
                    </a>
                    <div className="col py-4 py-lg-0">
                      <div className="ps-5 pe-4 h-100">
                        <div className="row g-0 h-100 align-content-center">
                          <a
                            href="Products.Detail.html"
                            className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"
                          >
                            Modern Dark Pot
                            <div className="text-small text-muted text-truncate position">#1558</div>
                          </a>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                            <div className="lh-1 text-alternate">729</div>
                          </div>
                          <div className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                            <div className="lh-1 text-alternate">$ 18.00</div>
                          </div>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5"></div>
                          <div className="col-1 d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                            <label className="form-check mt-2">
                              <input type="checkbox" className="form-check-input pe-none" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="row g-0 h-100 sh-lg-9 position-relative">
                    <a href="Products.Detail.html" className="col-auto position-relative">
                      <img src="img/product/small/product-5.webp" alt="product" className="card-img card-img-horizontal sw-11 h-100" />
                    </a>
                    <div className="col py-4 py-lg-0">
                      <div className="ps-5 pe-4 h-100">
                        <div className="row g-0 h-100 align-content-center">
                          <a
                            href="Products.Detail.html"
                            className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"
                          >
                            Wood Handle Hunter Knife
                            <div className="text-small text-muted text-truncate position">917</div>
                          </a>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                            <div className="lh-1 text-alternate">16</div>
                          </div>
                          <div className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                            <div className="lh-1 text-alternate">$ 21.75</div>
                          </div>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                            <span className="badge bg-outline-quaternary group">LOW STOCK</span>
                          </div>
                          <div className="col-1 d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                            <label className="form-check mt-2">
                              <input type="checkbox" className="form-check-input pe-none" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="row g-0 h-100 sh-lg-9 position-relative">
                    <a href="Products.Detail.html" className="col-auto position-relative">
                      <img src="img/product/small/product-6.webp" alt="product" className="card-img card-img-horizontal sw-11 h-100" />
                    </a>
                    <div className="col py-4 py-lg-0">
                      <div className="ps-5 pe-4 h-100">
                        <div className="row g-0 h-100 align-content-center">
                          <a
                            href="Products.Detail.html"
                            className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"
                          >
                            Wireless On-Ear Headphones
                            <div className="text-small text-muted text-truncate position">#5622</div>
                          </a>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                            <div className="lh-1 text-alternate">592</div>
                          </div>
                          <div className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                            <div className="lh-1 text-alternate">$ 52.50</div>
                          </div>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5"></div>
                          <div className="col-1 d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                            <label className="form-check mt-2">
                              <input type="checkbox" className="form-check-input pe-none" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="row g-0 h-100 sh-lg-9 position-relative">
                    <a href="Products.Detail.html" className="col-auto position-relative">
                      <img src="img/product/small/product-7.webp" alt="product" className="card-img card-img-horizontal sw-11 h-100" />
                    </a>
                    <div className="col py-4 py-lg-0">
                      <div className="ps-5 pe-4 h-100">
                        <div className="row g-0 h-100 align-content-center">
                          <a
                            href="Products.Detail.html"
                            className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"
                          >
                            White Coffee Mug
                            <div className="text-small text-muted text-truncate position">#3457</div>
                          </a>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                            <div className="lh-1 text-alternate">2.849</div>
                          </div>
                          <div className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                            <div className="lh-1 text-alternate">$ 14.10</div>
                          </div>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5"></div>
                          <div className="col-1 d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                            <label className="form-check mt-2">
                              <input type="checkbox" className="form-check-input pe-none" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="row g-0 h-100 sh-lg-9 position-relative">
                    <a href="Products.Detail.html" className="col-auto position-relative">
                      <img src="img/product/small/product-8.webp" alt="product" className="card-img card-img-horizontal sw-11 h-100" />
                    </a>
                    <div className="col py-4 py-lg-0">
                      <div className="ps-5 pe-4 h-100">
                        <div className="row g-0 h-100 align-content-center">
                          <a
                            href="Products.Detail.html"
                            className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"
                          >
                            Geometric Chandelier
                            <div className="text-small text-muted text-truncate position">#4832</div>
                          </a>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                            <div className="lh-1 text-alternate">902</div>
                          </div>
                          <div className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                            <div className="lh-1 text-alternate">$ 32.60</div>
                          </div>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                            <span className="badge bg-outline-secondary group">NEW</span>
                          </div>
                          <div className="col-1 d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                            <label className="form-check mt-2">
                              <input type="checkbox" className="form-check-input pe-none" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="row g-0 h-100 sh-lg-9 position-relative">
                    <a href="Products.Detail.html" className="col-auto position-relative">
                      <img src="img/product/small/product-9.webp" alt="product" className="card-img card-img-horizontal sw-11 h-100" />
                    </a>
                    <div className="col py-4 py-lg-0">
                      <div className="ps-5 pe-4 h-100">
                        <div className="row g-0 h-100 align-content-center">
                          <a
                            href="Products.Detail.html"
                            className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"
                          >
                            XBox Controller
                            <div className="text-small text-muted text-truncate position">#2611</div>
                          </a>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                            <div className="lh-1 text-alternate">614</div>
                          </div>
                          <div className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                            <div className="lh-1 text-alternate">$ 19.15</div>
                          </div>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                            <span className="badge bg-outline-secondary group">NEW</span>
                          </div>
                          <div className="col-1 d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                            <label className="form-check mt-2">
                              <input type="checkbox" className="form-check-input pe-none" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="row g-0 h-100 sh-lg-9 position-relative">
                    <a href="Products.Detail.html" className="col-auto position-relative">
                      <img src="img/product/small/product-10.webp" alt="product" className="card-img card-img-horizontal sw-11 h-100" />
                    </a>
                    <div className="col py-4 py-lg-0">
                      <div className="ps-5 pe-4 h-100">
                        <div className="row g-0 h-100 align-content-center">
                          <a
                            href="Products.Detail.html"
                            className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"
                          >
                            Health and Fitness Smartwatch
                            <div className="text-small text-muted text-truncate position">#3470</div>
                          </a>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                            <div className="lh-1 text-alternate">1.852</div>
                          </div>
                          <div className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                            <div className="lh-1 text-alternate">$ 68.00</div>
                          </div>
                          <div className="col-12 col-lg-2 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5"></div>
                          <div className="col-1 d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                            <label className="form-check mt-2">
                              <input type="checkbox" className="form-check-input pe-none" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Items Container Start --> */}

                {/* <!-- List Items End --> */}
              </div>
            </div>
            {/* <!-- Items Pagination Start --> */}
            <div className="w-100 d-flex justify-content-center">
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
                    <a className="page-link shadow" href="#">
                      <i data-acorn-icon="chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* <!-- Items Pagination End --> */}
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductList
