import React, { useState } from 'react'

function AddProduct() {
  const [attributes, setAttributes] = useState([
    {
      id: 1,
      size: "",
      price: "",
      actualPrice: "",
      discountPrice: ""
    }
  ]);

  const addAttribute = () => {
    const newAttribute = {
      id: attributes.length + 1,
      size: "",
      price: "",
      actualPrice: "",
      discountPrice: ""
    };
    setAttributes([...attributes, newAttribute]);
  };

  const deleteAttribute = (id) => {
    setAttributes(attributes.filter(attribute => attribute.id !== id));
  };

  const handleInputChange = (id, field, value) => {
    const updatedAttributes = attributes.map(attribute => {
      if (attribute.id === id) {
        return { ...attribute, [field]: value };
      }
      return attribute;
    });
    setAttributes(updatedAttributes);
  };

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
                  <a href="/products" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-small align-middle">Back</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">Add New Product</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}

              {/* <!-- Top Buttons Start --> */}
             <div className="w-100 d-md-none"></div>
              <div className="col-12 col-sm-6 d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
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
              {/* <!-- Product Info Start --> */}
              <div className="mb-5">
                <h2 className="small-title">Description</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Product Name</label>
                        <input type="text" className="form-control"/>
                      </div>
                      {/* <div className="mb-3 w-100">
                        <label className="form-label">Category</label>
                        <select className="form-select select-single-no-search">
                          <option label="--Category--"></option>
                          <option value="Breadstick">SALWAR</option>
                          <option value="Biscotti">SAREE</option>
                          <option value="Fougasse">TOP</option>
                        </select>
                      </div> */}
                      <div className="mb-3">
                        <label className="form-label">Product Description</label>
                        <textarea className="form-control html-editor-bubble html-editor sh-13" id="quillEditorBubble" style={{overflowY: 'scroll',padding:'10px 10px' }}>
                        </textarea>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- Product Info End --> */}

              {/* <!-- Product Info Start --> */}
              <div className="mb-5">
                <h2 className="small-title">Category</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="mb-3 w-100">
                        <label className="form-label">Product Category</label>
                        <select className="form-select select-single-no-search">
                          <option label="--Category--"></option>
                          <option value="Tops">Tops</option>
                          <option value="Bottoms">Bottoms</option>
                          <option value="Accessories">Accessories</option>
                        </select>
                      </div>
                      <div className="mb-3 w-100">
                        <label className="form-label">Product Subcategory </label>
                        <select className="form-select select-single-no-search">
                          <option label="--Category--"></option>
                          <option value="Casual Dresses">Casual Dresses</option>
                          <option value="Formal Dresses">Formal Dresses</option>
                          {/* <option value="TOP">TOP</option> */}
                        </select>
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
                      <div className='row'>
                        <div className="mb-3 col-sm">
                          <label className="form-label">Quantity</label>
                          <input type="text" className="form-control"/>
                        </div>
                        <div className="mb-3 col-sm">
                          <label className="form-label">SKU(Optional)</label>
                          <input type="text" className="form-control"/>
                        </div>
                      </div>
                      {/* <div className="mb-3">
                        <label className="form-label">Barcode</label>
                        <input type="text" className="form-control"/>
                      </div> */}
                      {/* <div className="mb-0">
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
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- Inventory End --> */}

              {/* <!-- Selling Start --> */}
              <div className="mb-5">
                <div className="d-flex justify-content-between">
                  <h2 className="small-title">Selling Type</h2>
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
                          <span className="mb-1 lh-1-25">In-store selling only</span>
                        </span>
                      </label>
                      <label className="form-check w-100 mb-1">
                        <input type="checkbox" className="form-check-input"/>
                        <span className="form-check-label d-block">
                          <span className="mb-1 lh-1-25">Online selling only</span>
                        </span>
                      </label>
                      <label className="form-check w-100 mb-1">
                        <input type="checkbox" className="form-check-input"/>
                        <span className="form-check-label d-block">
                          <span className="mb-1 lh-1-25">Available both in-store and online</span>
                        </span>
                      </label>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- Selling End --> */}

              {/* <!-- Attributes Start --> */}
              <div className="mb-5">
                <h2 className="small-title">Attributes</h2>
                <div className="card">
                  <div className="card-body">
                    {attributes.map(attribute => (
                      <div key={attribute.id} className="mb-3 pb-3 border-bottom border-separator-light">
                        <div className="row gx-2">
                          <div className="col order-1">
                            <div className="mb-3">
                              <label className="form-label">Size</label>
                              <select className="form-select select-single-no-search" value={attribute.size} onChange={(e) => handleInputChange(attribute.id, "size", e.target.value)}>
                                <option label="--size--"></option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                                <option value="XXXL">XXXL</option>
                              </select>
                            </div>
                          </div>
                          <div className=" order-3">
                            <div className="mb-3">
                              <label className="form-label">Colour</label>
                              <div>
                                <input type="color" className="check"/>
                              </div>
                            </div>
                          </div>
                          <div className=" order-3">
                            <div className="mb-3">
                              <label className="form-label">Actual Price</label>
                              <input className="form-control" value={attribute.actualPrice} onChange={(e) => handleInputChange(attribute.id, "actualPrice", e.target.value)} />
                            </div>
                          </div>
                          <div className=" order-3">
                            <div className="mb-3">
                              <label className="form-label">Discount Price</label>
                              <input className="form-control" value={attribute.discountPrice} onChange={(e) => handleInputChange(attribute.id, "discountPrice", e.target.value)} />
                            </div>
                          </div>
                          <div className="col-auto order-2 order-md-4">
                            <label className="d-block form-label">&nbsp;</label>
                            <button className="btn btn-icon btn-icon-only btn-outline-primary" type="button" onClick={() => deleteAttribute(attribute.id)}>
                              <i className='fa-solid fa-trash'></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="mb-3 pb-3 border-bottom text-center">
                      <button type="button" className="btn btn-foreground hover-outline btn-icon btn-icon-start mt-2" onClick={addAttribute}>
                        <i data-acorn-icon="plus"></i>
                        <span>Add New</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Attributes End --> */}
            </div>

            <div className="col-xl-4 mb-n5">
              {/* <!-- Price Start --> */}
              {/* <div className="mb-5">
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
              </div> */}
              {/* <!-- Price End --> */}

              {/* <!-- Gallery Start --> */}
              <div className="mb-5">
                <h2 className="small-title">Product Images</h2>
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

              {/* <!-- Image Start --> */}
              {/* <div className="mb-5">
                <h2 className="small-title">Image</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="dropzone dropzone-columns row g-2 row-cols-1 row-cols-md-1 border-0 p-0" id="dropzoneProductImage"></div>
                    </form>
                  </div>
                </div>
              </div> */}
              {/* <!-- Image End --> */}

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

              
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AddProduct