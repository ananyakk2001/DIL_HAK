import React from 'react'

function PAUpdateProduct() {
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
                  <a href="/productadmin-products" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-small align-middle">Back</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">Update Product Details</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}

             {/* <!-- Top Buttons Start --> */}
             <div className="w-100 d-md-none"></div>
              <div className="col-12 col-sm-6 col-md-auto d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
                <a href="#" className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto">
                  <span>Update</span>
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
              {/* <!-- Product Info Start --> */}
              <div className="mb-5">
                <h2 className="small-title">Update product info</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control"/>
                      </div>
                      <div className="mb-3 w-100">
                        <label className="form-label">Category</label>
                        <select className="form-select select-single-no-search">
                          <option label="--Category--"></option>
                          <option value="Breadstick">SALWAR</option>
                          <option value="Biscotti">SAREE</option>
                          <option value="Fougasse">TOP</option>
                          <option value="Fougasse">MAXI</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea className="form-control html-editor-bubble html-editor sh-13" id="quillEditorBubble" style={{overflowY: 'scroll',padding:'10px 10px' }}>
                          
                        </textarea>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- Product Info End --> */}

              {/* <!-- Inventory Start --> */}
              <div className="mb-5">
                <h2 className="small-title">Inventory</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">SKU</label>
                        <input type="text" className="form-control"/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Barcode</label>
                        <input type="text" className="form-control"/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input type="text" className="form-control"/>
                      </div>
                      <div className="mb-0">
                        <label className="form-label">Settings</label>
                        <div className="form-check form-switch mb-1">
                          <input type="checkbox" className="form-check-input" id="quantitySwitch1" />
                          <label className="form-check-label" for="quantitySwitch1">Allow out of stock purchase</label>
                        </div>
                        <div className="form-check form-switch mb-1">
                          <input type="checkbox" className="form-check-input" id="quantitySwitch2"/>
                          <label className="form-check-label" for="quantitySwitch2">Notify low stock</label>
                        </div>
                        <div className="form-check form-switch">
                          <input type="checkbox" className="form-check-input" id="quantitySwitch3" />
                          <label className="form-check-label" for="quantitySwitch3">Display quantity at storefront</label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- Inventory End --> */}

              {/* <!-- Shipping Start --> */}
              <div className="mb-5">
                <div className="d-flex justify-content-between">
                  <h2 className="small-title">Shipping</h2>
                  <button className="btn btn-icon btn-icon-end btn-xs btn-background-alternate p-0 text-small" type="button">
                    <span className="align-bottom">Edit Shipping Methods</span>
                    <i data-acorn-icon="chevron-right" className="align-middle" data-acorn-size="12"></i>
                  </button>
                </div>
                <div className="card">
                  <div className="card-body">
                    <form className="mb-n1">
                      <label className="form-check w-100 mb-1">
                        <input type="checkbox" className="form-check-input"/>
                        <span className="form-check-label d-block">
                          <span className="mb-1 lh-1-25">Standard Shipping</span>
                          <span className="text-muted d-block text-small mt-0">(Price Based Rate)</span>
                        </span>
                      </label>
                      <label className="form-check w-100 mb-1">
                        <input type="checkbox" className="form-check-input"/>
                        <span className="form-check-label d-block">
                          <span className="mb-1 lh-1-25">Express Shipping</span>
                          <span className="text-muted d-block text-small mt-0">(Price Based Rate)</span>
                        </span>
                      </label>
                      <label className="form-check w-100 mb-1">
                        <input type="checkbox" className="form-check-input"/>
                        <span className="form-check-label d-block">
                          <span className="mb-1 lh-1-25">Priority Shipping</span>
                          <span className="text-muted d-block text-small mt-0">(Price Based Rate)</span>
                        </span>
                      </label>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- Shipping End --> */}

              {/* <!-- Attributes Start --> */}
              <div className="mb-5">
                <h2 className="small-title">Attributes</h2>
                <div className="card">
                  <div className="card-body">
                    <div className="mb-n6 border-last-none">
                      <div className="mb-3 pb-3 border-bottom border-separator-light">
                        <div className="row gx-2">
                          <div className="col col-md-auto order-1">
                            <div className="mb-3">
                                <label className="form-label">Size</label>
                                <select className="form-select select-single-no-search">
                                    <option label="--Size--"></option>
                                    <option value="small">S</option>
                                    <option value="medium">M</option>
                                    <option value="large">L</option>
                                    <option value="xlarge">XL</option>
                                    <option value="xxlarge">XXL</option>
                                    <option value="xxxlarge">XXL</option>
                                </select>
                            </div>
                          </div>
                          <div className="col-md order-3">
                            <div className="mb-0">
                              <label className="form-label">Color</label>
                              <input className="form-control" name="tagsBasic"/>
                            </div>
                          </div>
                          <div className="col-md order-3">
                            <div className="mb-0">
                              <label className="form-label">Price</label>
                              <input className="form-control" name="tagsBasic"/>
                            </div>
                          </div>
                          <div className="col-auto order-2 order-md-4">
                            <label className="d-block form-label">&nbsp;</label>
                            <button className="btn btn-icon btn-icon-only btn-outline-primary" type="button">
                              <i data-acorn-icon="bin"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 pb-3 border-bottom text-center">
                        <button type="button" className="btn btn-foreground hover-outline btn-icon btn-icon-start mt-2">
                          <i data-acorn-icon="plus"></i>
                          <span>Add New</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Attributes End --> */}
            </div>

            <div className="col-xl-4 mb-n5">
              {/* <!-- Price Start --> */}
              <div className="mb-5">
                <h2 className="small-title">Price</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Market Price</label>
                        <input type="text" className="form-control mask-currency"/>
                      </div>
                      <div className="mb-0">
                        <label className="form-label">Discount Price</label>
                        <input type="text" className="form-control mask-currency"/>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- Price End --> */}

              {/* <!-- History Start --> */}
              <div className="mb-5">
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
              </div>
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

              {/* <!-- Gallery Start --> */}
              <div className="mb-5">
                <h2 className="small-title">Gallery</h2>
                <div className="card">
                  <div className="card-body">
                    <form className="mb-3">
                      <div className="dropzone dropzone-columns row g-2 row-cols-1 row-cols-md-4 row-cols-xl-2 border-0 p-0" id="dropzoneProductGallery"></div>
                    </form>
                    <div className="text-center">
                      <button type="button" className="btn btn-foreground hover-outline btn-icon btn-icon-start mt-2" id="dropzoneProductGalleryButton">
                        <i data-acorn-icon="plus"></i>
                        <span>Add Files</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Gallery End --> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PAUpdateProduct
