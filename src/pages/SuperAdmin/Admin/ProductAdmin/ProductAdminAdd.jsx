import React, { useState } from 'react';
import axios from 'axios';

function ProductAdminAdd() {
  const[userData, setuserData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    address: "",
    password: "",
    email: "",
    phone_number: "",
    username: "",
    image: ""
  })

  const handleOnchange = (x) => {
    const { name, value } = x.target
    setuserData({
      ...userData,
      [name]: value
    })
  };

  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      for (let key in userData) {
        formData.append(key, userData[key]);
      }
      if (image) {
        formData.append('image', image.file); // Append file directly
      }
      let product_admin = await axios.post('http://127.0.0.1:8000/auth/product-admins/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log("Response:", product_admin);
      alert('Form Submitted Successfully');
    } catch (err) {
      console.error(err);
      alert('Failed!!!')
    }
  };
  

  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        setImage({
          file: file, // Store the file object itself
          url: e.target.result,
          name: file.name,
          size: file.size
        });
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };
  

  const handleDelete = () => {
    setImage(null);
  };

  const formatSize = (bytes) => {
    const megabytes = bytes / (1024 * 1024);
    return megabytes.toFixed(2) + " MB";
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
                  <a href="/productadmin" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-medium align-middle">Back</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">Product Admin Add</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}

               {/* <!-- Top Buttons Start --> */}
             <div className="w-100 d-md-none"></div>
              <div className="col-12 col-sm-6 col-md-auto d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
                <button type="button" className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto" onClick={handleSubmit}>
                  Submit
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
              {/* <!-- Top Buttons End --> */}
            </div>
          </div>
          {/* <!-- Title and Top Buttons End --> */}

          <div className="row">
            <div className="col-xl-8">
              {/* <!-- Product Info Start --> */}
              <div className="mb-5">
                <h2 className="small-title">Product Admin Add</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                    <div className="mb-3">
                        <label className="form-label">First name</label>
                        <input type="text" name='first_name' className="form-control" onChange={handleOnchange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Last name</label>
                        <input type="text" name='last_name' className="form-control" onChange={handleOnchange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <input type="text" name='gender' className="form-control" onChange={handleOnchange} />
                      </div>
                      {/* <div className="mb-3 w-100">
                        <label className="form-label">Gender</label>
                        <select name="gender" className="form-select select-single-no-search" onChange={handleOnchange}>
                          <option label="&nbsp;"></option>
                          <option value="Breadstick">Male</option>
                          <option value="Biscotti">Female</option>
                          <option value="Fougasse">Others</option>
                        </select>
                      </div> */}
                      {/* <div className="mb-3">
                        <label className="form-label">Address</label>
                        <textarea name="address" className="form-control html-editor-bubble html-editor sh-13" id="quillEditorBubble" style={{overflowY: 'scroll',padding:'10px 10px' }} onChange={handleOnchange}>
                          Kannur, Kerala, 670014, India
                        </textarea>
                      </div> */}
                      <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input type="text" name='address' className="form-control" onChange={handleOnchange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Mobile</label>
                        <input type="tel" name='phone_number' className="form-control" onChange={handleOnchange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name='email' className="form-control" onChange={handleOnchange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">User name</label>
                        <input type="text" name='username' className="form-control" onChange={handleOnchange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="text" name='password' className="form-control" onChange={handleOnchange} />
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
                    <form>
                      {!image && <input type="file" name="image" className="form-control" onChange={handleFileChange} />}
                      {image && (
                        <div className="mt-3">
                          <img src={image.url} className="mb-3" alt={image.name} style={{ maxWidth: '100%', maxHeight: '200px', justifyContent: 'center' }} />
                          <p>Name: {image.name}</p>
                          <p>Size: {formatSize(image.size)}</p>
                          <center><button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button></center>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- Image End --> */}

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


export default ProductAdminAdd;
