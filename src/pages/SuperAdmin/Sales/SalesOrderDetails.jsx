import React from 'react'

function SalesOrderDetails() {
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
                  <a href="/sales-orderlist" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-small align-middle">Back</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">Order Detail</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}
            </div>
          </div>
          {/* <!-- Title and Top Buttons End --> */}

          <div className="row gx-4 gy-5">
            <div className="col-12 col-xl-8 col-xxl-9 mb-n5">
              {/* <!-- Status Start --> */}
              <h2 className="small-title">Status</h2>
              <div className="mb-5">
                <div className="row g-2">
                  <div className="col-12 col-sm-6 col-lg-6">
                    <div className="card sh-13 sh-lg-15 sh-xl-14">
                      <div className="h-100 row g-0 card-body align-items-center py-3">
                        <div className="col-auto pe-3">
                          <div className="border border-primary sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center">
                            <i data-acorn-icon="tag" className="text-primary"></i>
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center lh-1-25">Order Id</div>
                          <div className="text-primary">2241</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-6">
                    <div className="card sh-13 sh-lg-15 sh-xl-14" >
                      <div className="h-100 row g-0 card-body align-items-center py-3">
                        <div className="col-auto pe-3">
                          <div className="border border-primary sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center">
                            <i data-acorn-icon="clipboard" className="text-primary"></i>
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center lh-1-25">Order Status</div>
                          <div className="text-primary">Delivered</div>
                        </div>
                        <div class="col-auto ds-flex" data-bs-toggle="modal" data-bs-target="#orderStatusUpdate">
                          <button class="btn btn-sm btn-icon btn-icon btn-icon-only btn-outline-primary" type="button">
                            <i className="fa-solid fa-pen"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-6">
                    <div className="card sh-13 sh-lg-15 sh-xl-14">
                      <div className="h-100 row g-0 card-body align-items-center py-3">
                        <div className="col-auto pe-3">
                          <div className="border border-primary sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center">
                            <i data-acorn-icon="calendar" className="text-primary"></i>
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center lh-1-25">Delivery Date</div>
                          <div className="text-primary">17.11.2020</div>
                        </div>
                        <div class="col-auto ds-flex" data-bs-toggle="modal" data-bs-target="#deliveryDateUpdate">
                          <button class="btn btn-sm btn-icon btn-icon btn-icon-only btn-outline-primary" type="button">
                            <i className="fa-solid fa-pen"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-6">
                    <div className="card sh-13 sh-lg-15 sh-xl-14">
                      <div className="h-100 row g-0 card-body align-items-center py-3">
                        <div className="col-auto pe-3">
                          <div className="border border-primary sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center">
                            <i data-acorn-icon="shipping" className="text-primary"></i>
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center lh-1-25">Tracking Code</div>
                          <div className="text-primary">US4244290109</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Status End --> */}

              {/* <!-- Cart Start --> */}
              <h2 className="small-title">Cart</h2>
              <div className="card mb-5">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-5">
                        <div className="row g-0 sh-9 mb-3">
                          <div className="col-auto">
                            <img src="img/product/small/product-9.webp" className="card-img rounded-md h-100 sw-13" alt="thumb" />
                          </div>
                          <div className="col">
                            <div className="ps-4 pt-0 pb-0 pe-0 h-100">
                              <div className="row g-0 h-100 align-items-start align-content-center">
                                <div className="col-12 d-flex flex-column mb-2">
                                  <div>XBox Controller</div>
                                  <div className="text-muted text-small">Microsoft</div>
                                </div>
                                <div className="col-12 d-flex flex-column mb-md-0 pt-1">
                                  <div className="row g-0">
                                    <div className="col-6 d-flex flex-row pe-2 align-items-end text-alternate">
                                      <span>12</span>
                                      <span className="text-muted ms-1 me-1">x</span>
                                      <span>
                                        <span className="text-small">$</span>
                                        1.10
                                      </span>
                                    </div>
                                    <div className="col-6 d-flex flex-row align-items-end justify-content-end text-alternate">
                                      <span>
                                        <span className="text-small">$</span>
                                        13.20
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 sh-9 mb-3">
                          <div className="col-auto">
                            <img src="img/product/small/product-8.webp" className="card-img rounded-md h-100 sw-13" alt="thumb" />
                          </div>
                          <div className="col">
                            <div className="ps-4 pt-0 pb-0 pe-0 h-100">
                              <div className="row g-0 h-100 align-items-start align-content-center">
                                <div className="col-12 d-flex flex-column mb-2">
                                  <div>Geometric Chandelier</div>
                                  <div className="text-muted text-small">Ikea</div>
                                </div>
                                <div className="col-12 d-flex flex-column mb-md-0 pt-1">
                                  <div className="row g-0">
                                    <div className="col-6 d-flex flex-row pe-2 align-items-end text-alternate">
                                      <span>3</span>
                                      <span className="text-muted ms-1 me-1">x</span>
                                      <span>
                                        <span className="text-small">$</span>
                                        2.75
                                      </span>
                                    </div>
                                    <div className="col-6 d-flex flex-row align-items-end justify-content-end text-alternate">
                                      <span>
                                        <span className="text-small">$</span>
                                        8.25
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 sh-9 mb-3">
                          <div className="col-auto">
                            <img src="img/product/small/product-2.webp" className="card-img rounded-md h-100 sw-13" alt="thumb" />
                          </div>
                          <div className="col">
                            <div className="ps-4 pt-0 pb-0 pe-0 h-100">
                              <div className="row g-0 h-100 align-items-start align-content-center">
                                <div className="col-12 d-flex flex-column mb-2">
                                  <div>Aromatic Green Candle</div>
                                  <div className="text-muted text-small">Oakland</div>
                                </div>
                                <div className="col-12 d-flex flex-column mb-md-0 pt-1">
                                  <div className="row g-0">
                                    <div className="col-6 d-flex flex-row pe-2 align-items-end text-alternate">
                                      <span>2</span>
                                      <span className="text-muted ms-1 me-1">x</span>
                                      <span>
                                        <span className="text-small">$</span>
                                        7.50
                                      </span>
                                    </div>
                                    <div className="col-6 d-flex flex-row align-items-end justify-content-end text-alternate">
                                      <span>
                                        <span className="text-small">$</span>
                                        15.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 sh-9 mb-3">
                          <div className="col-auto">
                            <img src="img/product/small/product-1.webp" className="card-img rounded-md h-100 sw-13" alt="thumb" />
                          </div>
                          <div className="col">
                            <div className="ps-4 pt-0 pb-0 pe-0 h-100">
                              <div className="row g-0 h-100 align-items-start align-content-center">
                                <div className="col-12 d-flex flex-column mb-2">
                                  <div>Wooden Animal Toys</div>
                                  <div className="text-muted text-small">Wood & Toy</div>
                                </div>
                                <div className="col-12 d-flex flex-column mb-md-0 pt-1">
                                  <div className="row g-0">
                                    <div className="col-6 d-flex flex-row pe-2 align-items-end text-alternate">
                                      <span>3</span>
                                      <span className="text-muted ms-1 me-1">x</span>
                                      <span>
                                        <span className="text-small">$</span>
                                        6.25
                                      </span>
                                    </div>
                                    <div className="col-6 d-flex flex-row align-items-end justify-content-end text-alternate">
                                      <span>
                                        <span className="text-small">$</span>
                                        18.75
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 sh-9 mb-3">
                          <div className="col-auto">
                            <img src="img/product/small/product-3.webp" className="card-img rounded-md h-100 sw-13" alt="thumb" />
                          </div>
                          <div className="col">
                            <div className="ps-4 pt-0 pb-0 pe-0 h-100">
                              <div className="row g-0 h-100 align-items-start align-content-center">
                                <div className="col-12 d-flex flex-column mb-2">
                                  <div>Good Glass Teapot</div>
                                  <div className="text-muted text-small">Ikea</div>
                                </div>
                                <div className="col-12 d-flex flex-column mb-md-0 pt-1">
                                  <div className="row g-0">
                                    <div className="col-6 d-flex flex-row pe-2 align-items-end text-alternate">
                                      <span>3</span>
                                      <span className="text-muted ms-1 me-1">x</span>
                                      <span>
                                        <span className="text-small">$</span>
                                        2.50
                                      </span>
                                    </div>
                                    <div className="col-6 d-flex flex-row align-items-end justify-content-end text-alternate">
                                      <span>
                                        <span className="text-small">$</span>
                                        7.50
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row g-0 sh-9 mb-3">
                          <div className="col-auto">
                            <img src="img/product/small/product-6.webp" className="card-img rounded-md h-100 sw-13" alt="thumb" />
                          </div>
                          <div className="col">
                            <div className="ps-4 pt-0 pb-0 pe-0 h-100">
                              <div className="row g-0 h-100 align-items-start align-content-center">
                                <div className="col-12 d-flex flex-column mb-2">
                                  <div>Wireless On-Ear Headphones</div>
                                  <div className="text-muted text-small">Sony</div>
                                </div>
                                <div className="col-12 d-flex flex-column mb-md-0 pt-1">
                                  <div className="row g-0">
                                    <div className="col-6 d-flex flex-row pe-2 align-items-end text-alternate">
                                      <span>1</span>
                                      <span className="text-muted ms-1 me-1">x</span>
                                      <span>
                                        <span className="text-small">$</span>
                                        4.50
                                      </span>
                                    </div>
                                    <div className="col-6 d-flex flex-row align-items-end justify-content-end text-alternate">
                                      <span>
                                        <span className="text-small">$</span>
                                        4.50
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="row g-0 mb-2">
                          <div className="col-auto ms-auto ps-3 text-muted">Total</div>
                          <div className="col-auto sw-13 text-end">
                            <span>
                              <span className="text-small text-muted">$</span>
                              285.25
                            </span>
                          </div>
                        </div>
                        <div className="row g-0 mb-2">
                          <div className="col-auto ms-auto ps-3 text-muted">Shipping</div>
                          <div className="col-auto sw-13 text-end">
                            <span>
                              <span className="text-small text-muted">$</span>
                              12.50
                            </span>
                          </div>
                        </div>
                        <div className="row g-0 mb-2">
                          <div className="col-auto ms-auto ps-3 text-muted">Sale</div>
                          <div className="col-auto sw-13 text-end">
                            <span>
                              <span className="text-small text-muted">$</span>
                              -24.50
                            </span>
                          </div>
                        </div>
                        <div className="row g-0 mb-2">
                          <div className="col-auto ms-auto ps-3 text-muted">Grand Total</div>
                          <div className="col-auto sw-13 text-end">
                            <span>
                              <span className="text-small text-muted">$</span>
                              321.50
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Cart End --> */}

              {/* <!-- Activity Start --> */}
              <h2 className="small-title">Activity</h2>
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
                            <a href="#" className="heading stretched-link">Order Received</a>
                            <div className="text-alternate">21.11.2020</div>
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
                            <a href="#" className="heading stretched-link">Shipped</a>
                            <div className="text-alternate">03.12.2020</div>
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
                      <div className="w-100 d-flex h-100 justify-content-center position-relative"></div>
                    </div>
                    <div className="col">
                      <div className="h-100">
                        <div className="d-flex flex-column justify-content-start">
                          <div className="d-flex flex-column">
                            <a href="#" className="heading stretched-link pt-0">Delivered</a>
                            <div className="text-alternate">09.12.2020</div>
                            <div className="text-muted mt-1">
                              Marzipan muffin cheesecake. Caramels wafer jelly beans. Icing pudding dessert caramels cake topping marzipan.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Activity End --> */}
            </div>

            {/* <!-- Address Start --> */}
            <div className="col-12 col-xl-4 col-xxl-3">
              <h2 className="small-title">Address</h2>
              <div className="card mb-5">
                <div className="card-body mb-n5">
                  <div className="mb-5">
                    <p className="text-small text-muted mb-2">CUSTOMER</p>
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
                          <i data-acorn-icon="email" className="text-primary" data-acorn-size="17"></i>
                        </div>
                      </div>
                      <div className="col text-alternate">blaine@cottrell.com</div>
                    </div>
                  </div>

                  <div className="mb-5">
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
                  </div>

                  <div className="mb-5">
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
                  </div>
                  <div className="mb-5">
                    <div>
                      <p className="text-small text-muted mb-2">PAYMENT (CREDIT CARD)</p>
                      <div className="row g-0 mb-2">
                        <div className="col-auto">
                          <div className="sw-3 me-1">
                            <i data-acorn-icon="credit-card" className="text-primary" data-acorn-size="17"></i>
                          </div>
                        </div>
                        <div className="col text-alternate">3452 42** **** 4251</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Address End --> */}

            {/* <!-- Order Status Update Modal Start --> */}
          <div className="modal modal-right fade" id="orderStatusUpdate" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Order Status Update</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form>
                      <label className='form-label'>Status</label>
                      <div className="form-check form-check-block">
                          <input type="radio" className="form-check-input" name="orderStatus"/>
                          <label className="form-check-label">Pending</label>
                      </div>
                      <div className="form-check form-check-block">
                          <input type="radio" className="form-check-input" name="orderStatus"/>
                          <label className="form-check-label">Shipping</label>
                      </div>
                      <div className="form-check form-check-block">
                          <input type="radio" className="form-check-input" name="orderStatus"/>
                          <label className="form-check-label">Delivered</label>
                      </div>
                      <div className="form-check form-check-block">
                          <input type="radio" className="form-check-input" name="orderStatus"/>
                          <label className="form-check-label">Return</label>
                      </div>
                  </form>
                </div>
                <div className="modal-footer border-0">
                  <a href="#" className="btn btn-icon btn-icon-end btn-primary" data-bs-dismiss="modal">
                    <span>Update</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Order Status Update Modal End --> */}

          {/* <!-- Order Date Update Modal Start --> */}
          <div className="modal modal-right fade" id="deliveryDateUpdate" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Delivery Date Update</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form>
                      <div className="mb3">
                        <label className='form-label'>Date</label>
                        <input type="date" className="form-control"/>
                      </div>
                  </form>
                </div>
                <div className="modal-footer border-0">
                  <a href="#" className="btn btn-icon btn-icon-end btn-primary" data-bs-dismiss="modal">
                    <span>Update</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Order Date Update Modal End --> */}
          </div>
        </div>
      </main>
    </div>
  )
}

export default SalesOrderDetails
