import React from 'react'

function PAAddDiscount() {
  return (
    <div>
      <main>
        <div className="container">
          {/* <!-- Title and Top Buttons Start --> */}
          <div className="page-title-container">
            <div className="row g-0">
              {/* <!-- Title Start --> */}
              <div className="col-auto mb-3 mb-md-0 me-auto">
                <div className="w-auto sw-md-40">
                  <a href="/productadmin-discount" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-small align-middle">Back</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">Discount Details</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}
            {/* <!-- Top Buttons Start --> */}
            <div className="w-100 d-md-none"></div>
              <div className="col-12 col-sm-6 col-md-auto d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
                <a href="#" className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto">
                  <span>Submit</span>
                </a>
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
                </div>
              </div>
              {/* <!-- Top Buttons End --> */}
            </div>
          </div>
          {/* <!-- Title and Top Buttons End --> */}

          <div className="row">
            <div className="col-xl-8">
              {/* <!-- Discount Info Start --> */}
              <div className="mb-5">
                <h2 className="small-title">Discount info</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">CODE</label>
                        <input type="text" className="form-control"/>
                      </div>
                      <div className="mb-3 w-100">
                        <label className="form-label">TYPE</label>
                        <select className="form-select select-single-no-search">
                          <option label="--Category--" disabled selected></option>
                          <option value="Breadstick">Fixed Amount</option>
                          <option value="Biscotti">Free Shipping</option>
                          <option value="Fougasse">Percentage</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">START DATE</label>
                        <input type="date" className="form-control"/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">END DATE</label>
                        <input type="date" className="form-control"/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">LIMIT</label>
                        <input type="text" className="form-control"/>
                      </div>
                      <div className="mb-3 w-100">
                        <label className="form-label">STATUS</label>
                        <select className="form-select select-single-no-search">
                          <option label="--status--" disabled selected></option>
                          <option value="Breadstick">Active</option>
                          <option value="Biscotti">Inactive</option>
                          <option value="Fougasse">Expired</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- Disocunt Info End --> */}
            </div>

            <div className="col-xl-4 mb-n5">

              {/* <!-- History Start --> */}
              {/* <div className="mb-5">
                <h2 className="small-title">History</h2>
                <div className="card">
                  <div className="card-body mb-n3">
                    <div className="mb-3">
                      <div className="text-small text-muted">STATUS</div>
                      <div>Published</div>
                    </div>
                    <div className="mb-3">
                      <div className="text-small text-muted">CREATED BY</div>
                      <div>Vyshnav Venu</div>
                    </div>
                    <div className="mb-3">
                      <div className="text-small text-muted">CREATE DATE</div>
                      <div>12.05.2021 - 13:42</div>
                    </div>
                    <div className="mb-3">
                      <div className="text-small text-muted">URL</div>
                      <div>dilhak.com</div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <!-- History End --> */}

              {/* <!-- Image Start --> */}
              <div className="mb-5">
                <h2 className="small-title">Image</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="dropzone dropzone-columns row g-2 row-cols-1 row-cols-md-1 border-0 p-0" id="dropzoneProductImage"></div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- Image End --> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PAAddDiscount
