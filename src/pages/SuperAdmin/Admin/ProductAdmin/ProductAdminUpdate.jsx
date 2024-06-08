import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductAdminUpdate() {
  const [userData, setUserData] = useState({
    first_name: "",
    password: "",
    email: "",
    phone_number: "",
    username: "",
    image: ""
  });
  const [image, setImage] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8000/auth/product-admins-edit/${id}`);
        setUserData(response.data);
        // Set existing image data if available
        if (response.data.image) {
          setImage({
            url: response.data.image,
           
          });
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImage({
          file: file,
          url: e.target.result
        });
      };
      reader.readAsDataURL(file);
    } else {
      setImage(userData.image);
    }
  };

  const handleDelete = () => {
    setImage(null);
  };

  // const formatSize = (bytes) => {
  //   const megabytes = bytes / (1024 * 1024);
  //   return megabytes.toFixed(2) + " MB";
  // };

  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      for (let key in userData) {
        formData.append(key, userData[key]);
      }
      if (image) {
        formData.append('image', image.file);
      }
      let productAdmin = await axios.patch(`http://localhost:8000/auth/product-admins-edit/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log("Response:", productAdmin);
      alert('Form Submitted Successfully');
    } catch (err) {
      console.error(err);
      alert('Failed!!!');
    }
  };

  return (
    <div>
      <main>
        <div className="container">
          <div className="page-title-container">
            <div className="row g-0">
              <div className="col-auto mb-3 mb-md-0 me-auto">
                <div className="w-auto sw-md-40">
                  <a href="/productadmin" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-meduim align-middle">Back</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">Product Admin Update</h1>
                </div>
              </div>
              <div className="w-100 d-md-none"></div>
              <div className="col-12 col-sm-6 col-md-auto d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
                <button className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto" onClick={handleSubmit}>
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
                <h2 className="small-title">Product Admin Update</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" name='first_name' className="form-control" onChange={handleOnChange} value={userData.first_name}/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Mobile</label>
                        <input type="tel" name='phone_number' className="form-control" onChange={handleOnChange} value={userData.phone_number}/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name='email' className="form-control" onChange={handleOnChange} value={userData.email} readOnly/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="tel" name='username' className="form-control" onChange={handleOnChange} value={userData.username} readOnly/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="text" name='password' className="form-control" onChange={handleOnChange} value={userData.password} readOnly/>
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
                  {!image && (
                    <input type="file" name="image" className="form-control mb-3" onChange={handleFileChange} />
                  )}
                  
                  {image && (
                    <div className="">
                      <center>
                      <img
                        src={`http://localhost:8000${image.url}`}
                        className="mb-3"
                        alt=""
                        style={{ maxWidth: '100%', maxHeight: '200px'}}
                      />
                      {/* <p>Name: {image.name}</p> */}
                      {/* You might not have the size information for existing image */}
                      {/* {image.size && <p>Size: {formatSize(image.size)}</p>} */}
                      </center>
                    </div>
                  )}
                  {image && (
                    
                    <div className="">
                      <center>
                      <img
                        src={image.url}
                        className="mb-3"
                        alt=""
                        style={{ maxWidth: '100%', maxHeight: '200px'}}
                      />
                      {/* <p>Name: {image.name}</p> */}
                      {/* You might not have the size information for existing image */}
                      {/* {image.size && <p>Size: {formatSize(image.size)}</p>} */}
                      </center>
                    </div>
                  )}
                  <center>
                        <button type="button" className="btn btn-danger" onClick={handleDelete}>
                        <i className='fa-solid fa-trash'/>
                        </button>
                      </center>
                </form>
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

export default ProductAdminUpdate;
