import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function OrderAdminUpdate() {
  const [editData, setEditData] = useState({
    first_name: "",
    password: "",
    email: "",
    phone_number: "",
    username: "",
    image: ""
  });

  const { id } = useParams();
  const [editImage, setEditImage] = useState(null);

  useEffect(() => {
    handleEditData(id);
  }, [id]);

  const handleEditOnchange = (x) => {
    const { name, value } = x.target;
    setEditData({
      ...editData,
      [name]: value
    });
  };

  const handleEditData = (userId) => {
    axios.get(`http://localhost:8000/auth/order-admins-edit/${userId}`)
      .then(response => {
        setEditData({
          id: response.data.id,
          first_name: response.data.first_name,
          password: response.data.password,
          email: response.data.email,
          phone_number: response.data.phone_number,
          username: response.data.username,
          image: response.data.image,
        });
        setEditImage({
          url: `http://localhost:8000${response.data.image}`,
          file: null
        });
      })
      .catch(error => {
        console.error('Error fetching order admin:', error);
      });
  };

  const handleEditSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append('id', editData.id);
      formData.append('first_name', editData.first_name);
      formData.append('email', editData.email);
      formData.append('phone_number', editData.phone_number);
      formData.append('username', editData.username);
      formData.append('password', editData.password);
      if (editImage && editImage.file) {
        formData.append('image', editImage.file); // Append file directly
      }
      let order_admin = await axios.patch(`http://localhost:8000/auth/order-admins-edit/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log("Response:", order_admin);
      alert('Form Submitted Successfully');
    } catch (err) {
      console.error(err);
      alert('Failed!!!')
    }
  };

  const handleEditFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setEditImage({
          file: file, // Store the file object itself
          url: e.target.result,
          name: file.name,
          size: file.size
        });
      };
      reader.readAsDataURL(file);
    } else {
      setEditImage(null);
    }
  };

  const handleEditDelete = () => {
    setEditImage(null);
  };

  return (
    <div>
      <main>
        <div className="container">
          <div className="page-title-container">
            <div className="row g-0">
              <div className="col-auto mb-3 mb-md-0 me-auto">
                <div className="w-auto sw-md-40">
                  <a href="/orderadmin" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-medium align-middle">Back</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">order Admin Update</h1>
                </div>
              </div>
              <div className="w-100 d-md-none"></div>
              <div className="col-12 col-sm-6 col-md-auto d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
                <button type="button" className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto" onClick={handleEditSubmit}>
                  <span>Update</span>
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
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-8">
              <div className="mb-5">
                <h2 className="small-title">order Admin View</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" name='first_name' className="form-control" value={editData.first_name} onChange={handleEditOnchange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Mobile</label>
                        <input type="tel" name='phone_number' className="form-control" value={editData.phone_number} onChange={handleEditOnchange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name='email' className="form-control" value={editData.email} onChange={handleEditOnchange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" name='username' className="form-control" value={editData.username} onChange={handleEditOnchange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="text" name='password' className="form-control" value={editData.password} onChange={handleEditOnchange} />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 mb-n5">
              <div className="mb-5">
                <h2 className="small-title">Image</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      {editImage && (
                        <div className="mt-1 text-center">
                          <img src={editImage.url} className="mb-3" alt={editImage.name} style={{ maxWidth: '100%', maxHeight: '200px' }} />
                          <div>
                            <button type="button" className="btn btn-danger" onClick={handleEditDelete}><i className='fa-solid fa-trash' /></button>
                          </div>
                        </div>
                      )}
                      {!editImage && (
                        <input type="file" name="image" className="form-control" onChange={handleEditFileChange} />
                      )}
                    </form>
                  </div>
                </div>
              </div>
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
                      <div>12.05.2021 - 13:42</div>
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default OrderAdminUpdate;