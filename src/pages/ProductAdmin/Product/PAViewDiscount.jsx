import React from 'react'

function PAViewDiscount() {
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
                        <input type="text" className="form-control" value="221" readOnly/>
                      </div>
                      <div className="mb-3 w-100">
                        <label className="form-label">TYPE</label>
                        <select className="form-select select-single-no-search">
                          <option label="--Category--" disabled></option>
                          <option value="Breadstick" disabled>Fixed Amount</option>
                          <option value="Biscotti" selected>Free Shipping</option>
                          <option value="Fougasse" disabled>Percentage</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">START DATE</label>
                        <input type="text" className="form-control" value="01-01-2001" readOnly/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">END text</label>
                        <input type="text" className="form-control" value="14-01-2001" readOnly/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">LIMIT</label>
                        <input type="text" className="form-control" value="5" readOnly/>
                      </div>
                      <div className="mb-3 w-100">
                        <label className="form-label">STATUS</label>
                        <select className="form-select select-single-no-search">
                          <option label="--Category--" disabled></option>
                          <option value="Breadstick" selected>Active</option>
                          <option value="Biscotti" disabled>Inactive</option>
                          <option value="Fougasse" disabled>Expired</option>
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

export default PAViewDiscount
