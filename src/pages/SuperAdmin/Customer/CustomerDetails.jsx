import React from 'react'

function CustomerDetails() {
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
                  <a href="/customerlist" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-small align-middle">Back</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">Customer Detail</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}

              {/* <!-- Top Buttons Start --> */}
              {/* <div className="col-12 col-md-5 d-flex align-items-end justify-content-end">
                <button type="button" className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto">
                  <i data-acorn-icon="save"></i>
                  <span>Update</span>
                </button> */}

                {/* <!-- Dropdown Button Start --> */}
                {/* <div className="ms-1">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-icon btn-icon-only"
                    data-bs-offset="0,3"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-submenu
                  >
                    <i data-acorn-icon="more-horizontal"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <button className="dropdown-item" type="button">Edit</button>
                    <button className="dropdown-item" type="button">View Purchases</button>
                    <button className="dropdown-item" type="button">Check Ip</button>
                  </div>
                </div> */}
                {/* <!-- Dropdown Button End --> */}
              {/* </div> */}
              {/* <!-- Top Buttons End --> */}
            </div>
          </div>
          {/* <!-- Title and Top Buttons End --> */}

          <div className="row gx-4 gy-5">
            {/* <!-- Customer Start --> */}
            <div className="col-12 col-xl-4 col-xxl-3">
              <h2 className="small-title">Info</h2>
              <div className="card">
                <div className="card-body mb-n5">
                  <div className="d-flex align-items-center flex-column">
                    <div className="mb-5 d-flex align-items-center flex-column">
                      <div className="sw-6 sh-6 mb-3 d-inline-block bg-primary d-flex justify-content-center align-items-center rounded-xl">
                        <div className="text-white">BC</div>
                      </div>
                      <div className="h5 mb-1">Blaine Cottrell</div>
                      <div className="text-muted">
                        <i data-acorn-icon="pin" className="text-muted"></i>
                        <span className="align-middle">Montreal, Canada</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mb-5">
                      {/* <button type="button" className="btn btn-primary w-100 me-2">Edit</button> */}
                      <button type="button" className="btn btn-outline-primary w-100 me-2">Block</button>
                      {/* <button className="btn btn-icon btn-icon-only btn-outline-primary" type="button">
                        <i data-acorn-icon="more-horizontal"></i>
                      </button> */}
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="row g-0 align-items-center mb-2">
                      <div className="col-auto">
                        <div className="border border-primary sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                          <i data-acorn-icon="credit-card" className="text-primary"></i>
                        </div>
                      </div>
                      <div className="col ps-3">
                        <div className="row g-0">
                          <div className="col">
                            <div className="sh-5 d-flex align-items-center lh-1-25">Lifetime Spent</div>
                          </div>
                          <div className="col-auto">
                            <div className="sh-5 d-flex align-items-center">$ 5,325.55</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row g-0 align-items-center mb-2">
                      <div className="col-auto">
                        <div className="border border-primary sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                          <i data-acorn-icon="cart" className="text-primary"></i>
                        </div>
                      </div>
                      <div className="col ps-3">
                        <div className="row g-0">
                          <div className="col">
                            <div className="sh-5 d-flex align-items-center lh-1-25">Average Order</div>
                          </div>
                          <div className="col-auto">
                            <div className="sh-5 d-flex align-items-center">$ 590.50</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row g-0 align-items-center mb-2">
                      <div className="col-auto">
                        <div className="border border-primary sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                          <i data-acorn-icon="boxes" className="text-primary"></i>
                        </div>
                      </div>
                      <div className="col ps-3">
                        <div className="row g-0">
                          <div className="col">
                            <div className="sh-5 d-flex align-items-center lh-1-25">Order Count</div>
                          </div>
                          <div className="col-auto">
                            <div className="sh-5 d-flex align-items-center">17</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div>
                      <p className="text-small text-muted mb-2">SHIPPING ADDRESS</p>
                      <div className="row g-0 mb-2">
                        <div className="col-auto">
                          <div className="sw-3 me-1">
                            <i data-acorn-icon="user" className="text-primary" data-acorn-size="17"></i>
                          </div>
                        </div>
                        <div className="col text-alternate align-middle">Blaine Cottrell</div>
                      </div>
                      <div className="row g-0 mb-2">
                        <div className="col-auto">
                          <div className="sw-3 me-1">
                            <i data-acorn-icon="pin" className="text-primary" data-acorn-size="17"></i>
                          </div>
                        </div>
                        <div className="col text-alternate">4 Glamis Avenue, Strathmore Park, Wellington 6022, New Zealand</div>
                      </div>
                      <div className="row g-0 mb-2">
                        <div className="col-auto">
                          <div className="sw-3 me-1">
                            <i data-acorn-icon="phone" className="text-primary" data-acorn-size="17"></i>
                          </div>
                        </div>
                        <div className="col text-alternate">+6443884455</div>
                      </div>
                      <div className="row g-0 mb-2">
                        <div className="col-auto">
                          <div className="sw-3 me-1">
                            <i data-acorn-icon="email" className="text-primary" data-acorn-size="17"></i>
                          </div>
                        </div>
                        <div className="col text-alternate">blaine@cottrell.com</div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div>
                      <p className="text-small text-muted mb-2">BILLING ADDRESS</p>
                      <div className="row g-0 mb-2">
                        <div className="col-auto">
                          <div className="sw-3 me-1">
                            <i data-acorn-icon="user" className="text-primary" data-acorn-size="17"></i>
                          </div>
                        </div>
                        <div className="col text-alternate align-middle">Blaine Cottrell</div>
                      </div>
                      <div className="row g-0 mb-2">
                        <div className="col-auto">
                          <div className="sw-3 me-1">
                            <i data-acorn-icon="pin" className="text-primary" data-acorn-size="17"></i>
                          </div>
                        </div>
                        <div className="col text-alternate">4 Glamis Avenue, Strathmore Park, Wellington 6022, New Zealand</div>
                      </div>
                      <div className="row g-0 mb-2">
                        <div className="col-auto">
                          <div className="sw-3 me-1">
                            <i data-acorn-icon="phone" className="text-primary" data-acorn-size="17"></i>
                          </div>
                        </div>
                        <div className="col text-alternate">+6443884455</div>
                      </div>
                      <div className="row g-0 mb-2">
                        <div className="col-auto">
                          <div className="sw-3 me-1">
                            <i data-acorn-icon="email" className="text-primary" data-acorn-size="17"></i>
                          </div>
                        </div>
                        <div className="col text-alternate">blaine@cottrell.com</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Customer End --> */}

            <div className="col-12 col-xl-8 col-xxl-9">
              {/* <!-- Recent Orders Start --> */}
              <div className="d-flex justify-content-between">
                <h2 className="small-title">Recent Orders</h2>
                <button className="btn btn-icon btn-icon-end btn-xs btn-background-alternate p-0 text-small" type="button">
                  <span className="align-bottom">View All</span>
                  <i data-acorn-icon="chevron-right" className="align-middle" data-acorn-size="12"></i>
                </button>
              </div>
              <div className="mb-5">
                <div className="card mb-2">
                  <div className="row g-0 sh-16 sh-md-8">
                    <div className="col">
                      <div className="card-body pt-0 pb-0 h-100">
                        <div className="row g-0 h-100 align-content-center">
                          <div className="col-6 col-md-3 d-flex flex-column justify-content-center mb-2 mb-md-0 h-md-100">
                            <div className="text-muted text-small d-md-none">Id</div>
                            <a href="Orders.Detail.html" className="text-truncate h-100 d-flex align-items-center">1239</a>
                          </div>
                          <div className="col-6 col-md-4 d-flex flex-column justify-content-center mb-2 mb-md-0">
                            <div className="text-muted text-small d-md-none">Price</div>
                            <div className="text-alternate">
                              <span>
                                <span className="text-small">$</span>
                                321.75
                              </span>
                            </div>
                          </div>
                          <div className="col-6 col-md-2 d-flex flex-column justify-content-center mb-2 mb-md-0">
                            <div className="text-muted text-small d-md-none">Date</div>
                            <div className="text-alternate">13.09.2020</div>
                          </div>
                          <div className="col-6 col-md-3 d-flex flex-column justify-content-center mb-2 mb-md-0 align-items-md-end">
                            <div className="text-muted text-small d-md-none">Status</div>
                            <div className="text-alternate">
                              <span className="badge rounded-pill bg-outline-secondary">PENDING</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="row g-0 sh-16 sh-md-8">
                    <div className="col">
                      <div className="card-body pt-0 pb-0 h-100">
                        <div className="row g-0 h-100 align-content-center">
                          <div className="col-6 col-md-3 d-flex flex-column justify-content-center mb-2 mb-md-0 h-md-100">
                            <div className="text-muted text-small d-md-none">Id</div>
                            <a href="Orders.Detail.html" className="text-truncate h-100 d-flex align-items-center">1251</a>
                          </div>
                          <div className="col-6 col-md-4 d-flex flex-column justify-content-center mb-2 mb-md-0">
                            <div className="text-muted text-small d-md-none">Price</div>
                            <div className="text-alternate">
                              <span>
                                <span className="text-small">$</span>
                                59.00
                              </span>
                            </div>
                          </div>
                          <div className="col-6 col-md-2 d-flex flex-column justify-content-center mb-2 mb-md-0">
                            <div className="text-muted text-small d-md-none">Date</div>
                            <div className="text-alternate">14.09.2020</div>
                          </div>
                          <div className="col-6 col-md-3 d-flex flex-column justify-content-center mb-2 mb-md-0 align-items-md-end">
                            <div className="text-muted text-small d-md-none">Status</div>
                            <div className="text-alternate">
                              <span className="badge rounded-pill bg-outline-primary">DELIVERED</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="row g-0 sh-16 sh-md-8">
                    <div className="col">
                      <div className="card-body pt-0 pb-0 h-100">
                        <div className="row g-0 h-100 align-content-center">
                          <div className="col-6 col-md-3 d-flex flex-column justify-content-center mb-2 mb-md-0 h-md-100">
                            <div className="text-muted text-small d-md-none">Id</div>
                            <a href="Orders.Detail.html" className="text-truncate h-100 d-flex align-items-center">1397</a>
                          </div>
                          <div className="col-6 col-md-4 d-flex flex-column justify-content-center mb-2 mb-md-0">
                            <div className="text-muted text-small d-md-none">Price</div>
                            <div className="text-alternate">
                              <span>
                                <span className="text-small">$</span>
                                128.25
                              </span>
                            </div>
                          </div>
                          <div className="col-6 col-md-2 d-flex flex-column justify-content-center mb-2 mb-md-0">
                            <div className="text-muted text-small d-md-none">Date</div>
                            <div className="text-alternate">17.09.2020</div>
                          </div>
                          <div className="col-6 col-md-3 d-flex flex-column justify-content-center mb-2 mb-md-0 align-items-md-end">
                            <div className="text-muted text-small d-md-none">Status</div>
                            <div className="text-alternate">
                              <span className="badge rounded-pill bg-outline-primary">DELIVERED</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="row g-0 sh-16 sh-md-8">
                    <div className="col">
                      <div className="card-body pt-0 pb-0 h-100">
                        <div className="row g-0 h-100 align-content-center">
                          <div className="col-6 col-md-3 d-flex flex-column justify-content-center mb-2 mb-md-0 h-md-100">
                            <div className="text-muted text-small d-md-none">Id</div>
                            <a href="Orders.Detail.html" className="text-truncate h-100 d-flex align-items-center">1421</a>
                          </div>
                          <div className="col-6 col-md-4 d-flex flex-column justify-content-center mb-2 mb-md-0">
                            <div className="text-muted text-small d-md-none">Price</div>
                            <div className="text-alternate">
                              <span>
                                <span className="text-small">$</span>
                                252.75
                              </span>
                            </div>
                          </div>
                          <div className="col-6 col-md-2 d-flex flex-column justify-content-center mb-2 mb-md-0">
                            <div className="text-muted text-small d-md-none">Date</div>
                            <div className="text-alternate">17.09.2020</div>
                          </div>
                          <div className="col-6 col-md-3 d-flex flex-column justify-content-center mb-2 mb-md-0 align-items-md-end">
                            <div className="text-muted text-small d-md-none">Status</div>
                            <div className="text-alternate">
                              <span className="badge rounded-pill bg-outline-primary">DELIVERED</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="row g-0 sh-16 sh-md-8">
                    <div className="col">
                      <div className="card-body pt-0 pb-0 h-100">
                        <div className="row g-0 h-100 align-content-center">
                          <div className="col-6 col-md-3 d-flex flex-column justify-content-center mb-2 mb-md-0 h-md-100">
                            <div className="text-muted text-small d-md-none">Id</div>
                            <a href="Orders.Detail.html" className="text-truncate h-100 d-flex align-items-center">1438</a>
                          </div>
                          <div className="col-6 col-md-4 d-flex flex-column justify-content-center mb-2 mb-md-0">
                            <div className="text-muted text-small d-md-none">Price</div>
                            <div className="text-alternate">
                              <span>
                                <span className="text-small">$</span>
                                189.50
                              </span>
                            </div>
                          </div>
                          <div className="col-6 col-md-2 d-flex flex-column justify-content-center mb-2 mb-md-0">
                            <div className="text-muted text-small d-md-none">Date</div>
                            <div className="text-alternate">18.09.2020</div>
                          </div>
                          <div className="col-6 col-md-3 d-flex flex-column justify-content-center mb-2 mb-md-0 align-items-md-end">
                            <div className="text-muted text-small d-md-none">Status</div>
                            <div className="text-alternate">
                              <span className="badge rounded-pill bg-outline-primary">DELIVERED</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Recent Orders End --> */}

              {/* <!-- Activity Start --> */}
              <h2 className="small-title">History</h2>
              <div className="card mb-5">
                <div className="card-body">
                  <div className="row g-0">
                    <div className="col-auto sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                      <div className="w-100 d-flex sh-1"></div>
                      <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                        <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative"></div>
                      </div>
                      <div className="w-100 d-flex h-100 justify-content-center position-relative">
                        <div className="line-w-1 bg-separator h-100 position-absolute"></div>
                      </div>
                    </div>
                    <div className="col mb-4">
                      <div className="h-100">
                        <div className="d-flex flex-column justify-content-start">
                          <div className="d-flex flex-column">
                            <a href="#" className="heading stretched-link">New Order</a>
                            <div className="text-alternate">21.02.2021</div>
                            <div className="text-muted mt-1">Biscuit donut powder sugar plum pastry. Chupa chups topping pastry halvah.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row g-0">
                    <div className="col-auto sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                      <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                        <div className="line-w-1 bg-separator h-100 position-absolute"></div>
                      </div>
                      <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                        <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative"></div>
                      </div>
                      <div className="w-100 d-flex h-100 justify-content-center position-relative">
                        <div className="line-w-1 bg-separator h-100 position-absolute"></div>
                      </div>
                    </div>
                    <div className="col mb-4">
                      <div className="h-100">
                        <div className="d-flex flex-column justify-content-start">
                          <div className="d-flex flex-column">
                            <a href="#" className="heading stretched-link">New Order</a>
                            <div className="text-alternate">18.02.2021</div>
                            <div className="text-muted mt-1">Apple pie cotton candy tiramisu biscuit cake muffin tootsie roll bear claw cake.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row g-0">
                    <div className="col-auto sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                      <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                        <div className="line-w-1 bg-separator h-100 position-absolute"></div>
                      </div>
                      <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                        <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative"></div>
                      </div>
                      <div className="w-100 d-flex h-100 justify-content-center position-relative">
                        <div className="line-w-1 bg-separator h-100 position-absolute"></div>
                      </div>
                    </div>
                    <div className="col mb-4">
                      <div className="h-100">
                        <div className="d-flex flex-column justify-content-start">
                          <div className="d-flex flex-column">
                            <a href="#" className="heading stretched-link">New Order</a>
                            <div className="text-alternate">15.02.2021</div>
                            <div className="text-muted mt-1">
                              Marzipan muffin cheesecake. Caramels wafer jelly beans. Icing pudding dessert caramels cake topping marzipan.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row g-0">
                    <div className="col-auto sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                      <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                        <div className="line-w-1 bg-separator h-100 position-absolute"></div>
                      </div>
                      <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                        <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative"></div>
                      </div>
                      <div className="w-100 d-flex h-100 justify-content-center position-relative">
                        <div className="line-w-1 bg-separator h-100 position-absolute"></div>
                      </div>
                    </div>
                    <div className="col mb-4">
                      <div className="h-100">
                        <div className="d-flex flex-column justify-content-start">
                          <div className="d-flex flex-column">
                            <a href="#" className="heading stretched-link">New Order</a>
                            <div className="text-alternate">12.02.2021</div>
                            <div className="text-muted mt-1">Dragée macaroon lemon drops icing cupcake gingerbread. Apple pie caramels tart.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row g-0">
                    <div className="col-auto sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                      <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                        <div className="line-w-1 bg-separator h-100 position-absolute"></div>
                      </div>
                      <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                        <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative"></div>
                      </div>
                      <div className="w-100 d-flex h-100 justify-content-center position-relative"></div>
                    </div>
                    <div className="col">
                      <div className="h-100">
                        <div className="d-flex flex-column justify-content-start">
                          <div className="d-flex flex-column">
                            <a href="#" className="heading stretched-link">Registered</a>
                            <div className="text-alternate">12.02.2021</div>
                            <div className="text-muted mt-1">Marshmallow donut sweet roll. Wafer tootsie roll gingerbread croissant ice cream.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Activity End --> */}

              {/* <!-- Additional Info Start --> */}
              <h2 className="small-title">Additional Info</h2>
              <div className="card mb-5">
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Tags</label>
                      <input name="tagsBasic" className="form-control form-switch" value="Rates, Sales Shopper, Newsletter" />
                    </div>
                    <div className="mb-0">
                      <label className="form-label">Notes</label>
                      <textarea rows="4" className="form-control">Very cool person!Rates the items a lot.</textarea>
                    </div>
                  </form>
                </div>
              </div>
              {/* <!-- Additional Info End --> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CustomerDetails
