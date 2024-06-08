import React from 'react'

function Shipping() {
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
                  <a href="/" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-small align-middle">Home</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">Shipping</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}
            </div>
          </div>
          {/* <!-- Title and Top Buttons End --> */}

          {/* <!-- Courier Services Start --> */}
          <div className="mb-5">
            <h2 className="small-title">Courier Services</h2>
            <div className="card mb-2">
              <div className="row g-0 card-body">
                <div className="col-auto">
                  <img src="img/brand/dhl.webp" className="card-img rounded-md h-100 sh-6 sw-9" alt="thumb" />
                </div>
                <div className="col">
                  <div className="ps-4">
                    <div className="row mb-1">
                      <div className="col">
                        <div className="heading text-primary mb-1">DHL</div>
                        <div className="mb-3">Lollipop apple pie lollipop toffee danish powder croissant.</div>
                      </div>
                      <div className="col-auto">
                        <button className="btn btn-sm btn-icon btn-icon btn-icon-only btn-outline-primary" type="button">
                          <i data-acorn-icon="gear"></i>
                        </button>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="text-small text-muted">OPTIONS</div>
                      <div className="text-alternate">Standard Shipping</div>
                      <div className="text-alternate">Priority Shipping</div>
                    </div>
                    <div className="mb-3">
                      <div className="text-small text-muted">LOCATION</div>
                      <div className="text-alternate">Domestic</div>
                    </div>
                    <div>
                      <div className="text-small text-muted">STATUS</div>
                      <div className="badge bg-outline-primary">ACTIVE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-2">
              <div className="row g-0 card-body">
                <div className="col-auto">
                  <img src="img/brand/fedex.webp" className="card-img rounded-md h-100 sh-6 sw-9" alt="thumb" />
                </div>
                <div className="col">
                  <div className="ps-4">
                    <div className="row mb-1">
                      <div className="col">
                        <div className="heading text-primary mb-1">FedEx</div>
                        <div className="mb-3">Dessert gummies soufflé toffee cake. Sesame snaps sesame snaps gummies oat cake sesame snaps.</div>
                      </div>
                      <div className="col-auto">
                        <button className="btn btn-sm btn-icon btn-icon btn-icon-only btn-outline-primary" type="button">
                          <i data-acorn-icon="gear"></i>
                        </button>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="text-small text-muted">OPTIONS</div>
                      <div className="text-alternate">Standard Shipping</div>
                      <div className="text-alternate">Priority Shipping</div>
                    </div>
                    <div className="mb-3">
                      <div className="text-small text-muted">LOCATION</div>
                      <div className="text-alternate">International</div>
                    </div>
                    <div>
                      <div className="text-small text-muted">STATUS</div>
                      <div className="badge bg-outline-primary">ACTIVE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-2 opacity-75">
              <div className="row g-0 card-body">
                <div className="col-auto">
                  <img src="img/brand/ups.webp" className="card-img rounded-md h-100 sh-6 sw-9" alt="thumb" />
                </div>
                <div className="col">
                  <div className="ps-4">
                    <div className="row mb-1">
                      <div className="col">
                        <div className="heading text-primary mb-1">UPSP</div>
                        <div className="mb-3">Chocolate bar tootsie roll pastry icing dragée. Tiramisu danish donut tiramisu biscuit.</div>
                      </div>
                      <div className="col-auto">
                        <button className="btn btn-sm btn-icon btn-icon btn-icon-only btn-outline-primary" type="button">
                          <i data-acorn-icon="gear"></i>
                        </button>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="text-small text-muted">OPTIONS</div>
                      <div className="text-alternate">Standard Shipping</div>
                      <div className="text-alternate">Priority Shipping</div>
                    </div>
                    <div className="mb-3">
                      <div className="text-small text-muted">LOCATION</div>
                      <div className="text-alternate">International</div>
                    </div>
                    <div>
                      <div className="text-small text-muted">STATUS</div>
                      <div className="badge bg-outline-muted">INACTIVE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Courier Services End --> */}

          {/* <!-- Box Sizes Start --> */}
          <h2 className="small-title">Box Sizes</h2>
          <div className="row g-2">
            <div className="col-6 col-xl-3 sh-20">
              <div className="card h-100 hover-scale-up">
                <a className="card-body text-center" href="#">
                  <div className="sw-5 sh-5 mb-3 d-inline-block bg-primary d-flex justify-content-center align-items-center rounded-xl mx-auto">
                    <div className="text-white">S</div>
                  </div>
                  <p className="heading mt-3">Small</p>
                  <div className="text-extra-small fw-medium text-muted">15x20x5 cm</div>
                </a>
              </div>
            </div>
            <div className="col-6 col-xl-3 sh-20">
              <div className="card h-100 hover-scale-up">
                <a className="card-body text-center" href="#">
                  <div className="sw-5 sh-5 mb-3 d-inline-block bg-primary d-flex justify-content-center align-items-center rounded-xl mx-auto">
                    <div className="text-white">M</div>
                  </div>
                  <p className="heading mt-3">Medium</p>
                  <div className="text-extra-small fw-medium text-muted">25x30x5 cm</div>
                </a>
              </div>
            </div>
            <div className="col-6 col-xl-3 sh-20">
              <div className="card h-100 hover-scale-up">
                <a className="card-body text-center" href="#">
                  <div className="sw-5 sh-5 mb-3 d-inline-block bg-primary d-flex justify-content-center align-items-center rounded-xl mx-auto">
                    <div className="text-white">L</div>
                  </div>
                  <p className="heading mt-3">Large</p>
                  <div className="text-extra-small fw-medium text-muted">40x50x15 cm</div>
                </a>
              </div>
            </div>
            <div className="col-6 col-xl-3 sh-20">
              <div className="card h-100 hover-scale-up">
                <a className="card-body text-center" href="#">
                  <div className="sw-6 sh-6 p-1 border border-dashed rounded-xl mx-auto">
                    <div className="text-white bg-separator w-100 h-100 d-flex justify-content-center align-items-center mx-auto rounded-xl">
                      <i data-acorn-icon="plus"></i>
                    </div>
                  </div>
                  <p className="heading mt-3 text-muted">Add New</p>
                  <div className="text-extra-small fw-medium text-muted">4 OPTIONS</div>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Box Sizes End --> */}
        </div>
      </main>
    </div>
  )
}

export default Shipping
