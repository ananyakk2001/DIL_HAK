import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductAdminView() {

  const [user, setUser] = useState([]);
  const {id} = useParams()
  console.log(id)

  useEffect(() => {
      axios.get(`http://localhost:8000/auth/product-admins-edit/${id}`)
          .then(response => {
            console.log(response.data)
              setUser(response.data);
          })
          .catch(error => {
              console.error('Error fetching admins:', error);
          });
  }, []);

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
                  <a href="/productadmin" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-medium align-middle">Back</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">Product Admin View</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}

              {/* <!-- Top Buttons Start --> */}
              <div className="w-100 d-md-none"></div>
              <div className="col-auto d-flex align-items-end justify-content-end">
                <a href={`/productadmin-update/${user.id}`}>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-icon btn-icon-only"
                  data-delay='{"show":"500", "hide":"0"}'
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Update"
                >
                  <i className='fa-solid fa-pen'></i>
                </button>
                </a>
              </div>
              {/* <!-- Top Buttons End --> */}
            </div>
          </div>
          {/* <!-- Title and Top Buttons End --> */}

          <div className="row">
            <div className="col-xl-8">
              {/* <!-- Product Info Start --> */}
              <div className="mb-5">
                <h2 className="small-title">Product Admin View</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={user.first_name} readOnly/>
                      </div>
                      {/* <div className="mb-3 w-100">
                        <label className="form-label">Gender</label>
                        <input type="text" className="form-control" value="Male" readOnly/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Address</label>
                        <textarea className="form-control html-editor-bubble html-editor sh-13" id="quillEditorBubble" readOnly style={{overflowY: 'scroll',padding:'10px 10px' }} value="Kannur, Kerala, 670014">
                          Kannur, Kerala, 670014, India
                        </textarea>
                      </div> */}
                      <div className="mb-3">
                        <label className="form-label">Mobile</label>
                        <input type="tel" className="form-control" value={user.phone_number} readOnly/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" value={user.email} readOnly/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="tel" className="form-control" value={user.username} readOnly/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="text" className="form-control" value={user.password} readOnly/>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- Product Info End --> */}
            </div>

            <div className="col-xl-4 mb-n5">
                {/* <!-- Image Start --> */}
              <div className="mb-5">
                <h2 className="small-title">Image</h2>
                <div className="card">
                  <div className="card-body">
                    {/* <form> */}
                      <div className="dropzone dropzone-columns row g-2 row-cols-1 row-cols-md-1 border-0 p-0" ><img src={`http://localhost:8000${user.image}`} alt="user"/></div>
                    {/* </form> */}
                  </div>
                </div>
              </div>
              {/* <!-- Image End --> */}
              {/* <!-- History Start --> */}
              <div className="mb-5">
                <h2 className="small-title">History</h2>
                <div className="card">
                  <div className="card-body mb-n3">
                    <div className="mb-3">
                      <div className="text-small text-muted">STATUS</div>
                      <div>Active/Inactive</div>
                    </div>
                    <div className="mb-3">
                      <div className="text-small text-muted">CREATED BY</div>
                      <div>Lisa Jackson</div>
                    </div>
                    <div className="mb-3">
                      <div className="text-small text-muted">CREATE DATE</div>
                      <div>{user.user_registered_at}</div>
                    </div>
                    <div className="mb-3">
                      <div className="text-small text-muted">UPDATED BY</div>
                      <div>Username</div>
                    </div>
                    <div className="mb-3">
                      <div className="text-small text-muted">UPDATED DATE</div>
                      <div>13.05.2021 - 13:42</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- History End --> */}

              {/* <!-- Gallery Start --> */}
              {/* <div className="mb-5">
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
              </div> */}
              {/* <!-- Gallery End --> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductAdminView