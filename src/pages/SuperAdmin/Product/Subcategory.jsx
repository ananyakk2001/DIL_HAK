
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SubCategory() {

  const [selectedCategory, setSelectedCategory] = useState();

  // --------------------Sub-Category-list-view----------------
  const [subcategorys, setSubCategorys] = useState([]);
  useEffect(() => {
      axios.get('http://localhost:8000/auth/subcategory/')
          .then(response => {
              console.log(response.data);
              setSubCategorys(response.data);
          })
          .catch(error => {
              console.error('Error fetching subcategories:', error);
          });
  }, []);

  // ---------------------Sub-Category-view-by-id---------------
  const [viewSubCategory, setViewSubCategory] = useState(null);
  const handleViewSubCategory = (subcategoryId) => {
    axios.get(`http://localhost:8000/auth/subcategory-edit/${subcategoryId}`)
      .then(response => {
        console.log(response.data);
        axios.get(`http://localhost:8000/auth/category-edit/${response.data.category}`)
          .then(categoryResponse => {
            console.log(categoryResponse.data);
            setViewSubCategory({
              ...response.data,
              categoryName: categoryResponse.data.name 
            });
          })
          .catch(categoryError => {
            console.error('Error fetching category:', categoryError);
          });
      })
      .catch(error => {
        console.error('Error fetching subcategory:', error);
      });
  };

  // ---------------------Sub-Category-Add---------------------
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/auth/category/')
        .then(response => {
          console.log(response.data)
            setCategories(response.data);
        })
        .catch(error => {
            console.error('Error fetching subcategories:', error);
        });
  }, []);

  const[NewSubCategoryData, setNewSubCategoryData] = useState({
    name: "",
    image: "",
    category: "",
  })
  const handleOnChange = (event) => {
    const { name, value } = event.target;
      setNewSubCategoryData({
        ...NewSubCategoryData,
        [name]: value
      });
  };
  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      for (let key in NewSubCategoryData) {
        formData.append(key, NewSubCategoryData[key]);
      }
      if (image) {
        formData.append('image', image.file); // Append file directly
      }
      let subcategory = await axios.post('http://127.0.0.1:8000/auth/subcategory/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log("Response:", subcategory);
      // alert('Sub Category added')
      window.location.reload();

    } catch (err) {
      console.error(err);
      alert('Failed!!!')
    }
  };

  // -----------------------SubCategory-delete-------------------
  const deleteSubCategory = (subcategoryId) => {
    axios.delete(`http://localhost:8000/auth/subcategory-edit/${subcategoryId}`)
      .then(response => {
        // Filter out the deleted category from the state
        setSubCategorys(subcategorys.filter(subcategory => subcategory.id !== subcategoryId));
        alert('SubCategory deleted success');
      })
      .catch(error => {
        console.error('Error deleting category:', error);
      });
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

  // -----------------------Category-edit---------------------
  const [editSubCategory, setEditSubCategory] = useState({
    id: "",
    name: "",
    image: "",
    category: ""
  });

  const handleEditOnchange = (x) => {
    const { name, value } = x.target;
    setEditSubCategory({
      ...editSubCategory,
      [name]: value
    });
  };

  const handleEditSubCategory = (subcategoryId) => {
    axios.get(`http://localhost:8000/auth/subcategory-edit/${subcategoryId}`)
      .then(response => {
        setEditSubCategory({
          id: response.data.id,
          name: response.data.name,
          image: response.data.image,
          category: response.data.category
        });
        setEditImage({
          url: `http://localhost:8000${response.data.image}`,
          file: null
        });
      })
      .catch(error => {
        console.error('Error fetching subcategory:', error);
      });
  };

  const handleEditSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append('id', editSubCategory.id);
      formData.append('name', editSubCategory.name);
      formData.append('category', editSubCategory.category);
      if (editImage.file) {
        formData.append('image', editImage.file); // Append file directly
      }
      let subcategory = await axios.patch(`http://127.0.0.1:8000/auth/subcategory-edit/${editSubCategory.id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log("Response:", subcategory);
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert('Failed!!!')
    }
  };

  // ------------------------Edit-image------------------------
  const [editImage, setEditImage] = useState(null);
  const handleEditFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
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
          {/* Title and Top Buttons Start */}
          <div className="page-title-container">
            <div className="row g-0">
              {/* Title Start */}
              <div className="col-auto mb-3 mb-md-0 me-auto">
                <div className="w-auto sw-md-30">
                  <a href="/admin-dashboard" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-medium align-middle">Home</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">Sub Category List</h1>
                </div>
              </div>
              {/* Title End */}

              {/* Top Buttons Start */}
              <div className="w-100 d-md-none"></div>
              <div className="col-12 col-sm-6 col-md-auto d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#subcategoryAddModal"
                >
                  <i data-acorn-icon="plus"></i>
                  <span>Add Sub Category</span>
                </button>
              </div>
              {/* Top Buttons End */}
            </div>
          </div>
          {/* Title and Top Buttons End */}

          {/* Controls Start */}
          <div className="row mb-2">
            {/* Search Start */}
            <div className="col-sm-12 col-md-5 col-lg-3 col-xxl-2 mb-1">
              <div className="d-inline-block float-md-start me-1 mb-1 search-input-container w-100 shadow bg-foreground">
                <input className="form-control" placeholder="Search" />
                <span className="search-magnifier-icon">
                  <i data-acorn-icon="search"></i>
                </span>
                <span className="search-delete-icon d-none">
                  <i data-acorn-icon="close"></i>
                </span>
              </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-9 col-xxl-10 text-end mb-1">
              <div className="d-inline-block">
                {/* Status Button Start */}
                <div className="dropdown-as-select w-100 w-md-auto">
                    <button
                      className="btn btn btn-outline-primary w-100 w-md-auto dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {selectedCategory ? categories.find(cat => cat.id === selectedCategory).name : 'All Categories'}
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className={`dropdown-item ${!selectedCategory ? 'active' : ''}`} onClick={() => setSelectedCategory()}>All Categories</a>
                      {categories.map(category => (
                        <a key={category.id} className={`dropdown-item ${selectedCategory === category.id ? 'active' : ''}`} onClick={() => setSelectedCategory(category.id)}>{category.name}</a>
                      ))}
                    </div>
                  </div>
                {/* Status Button End */}
              </div>
            </div>
          </div>
          {/* Controls End */}

          <div className="row g-0">
            <div className="col-12 mb-5">
              <div id="checkboxTable">
                {/* List Items Start */}
                {/* Filtered Subcategory Cards */}
                {subcategorys
                  .filter(subcategory => selectedCategory ? subcategory.category === selectedCategory : true)
                  .map(subcategory => (
                    <div key={subcategory.id} className="card mb-2">
                      <div className="row g-0 h-100 sh-lg-9 position-relative">
                        <a href="#" className="col-auto position-relative" data-bs-toggle="modal" data-bs-target="#subcategoryViewModal" onClick={() => handleViewSubCategory(subcategory.id)}>
                          <img src={`http://localhost:8000${subcategory.image}`} alt="product" className="card-img card-img-horizontal sw-11 h-100 sh-lg-9" data-bs-toggle="modal" data-bs-target="#subcategoryViewModal"/>
                        </a>
                        <div className="col py-4 py-lg-0">
                          <div className="ps-5 pe-4 h-100">
                            <div className="row g-0 h-100 align-content-center">
                              <a href="#" className="col-11 col-lg-5 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center" data-bs-toggle="modal" data-bs-target="#subcategoryViewModal"  onClick={() => handleViewSubCategory(subcategory.id)}>
                                {subcategory.name}
                              </a>
                              <div className="col-11 col-lg-5 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center">
                                <div className='lh-1 text-alternate'>{categories.find(cat => cat.id === subcategory.category)?.name || ''}</div>
                              </div>
                              <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                                <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center" data-bs-toggle="modal" data-bs-target="#subcategoryUpdateModal" onClick={() => handleEditSubCategory(subcategory.id)}><i className='fa-solid fa-pen'/></a>
                              </div>
                              <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                                <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center" onClick={() => deleteSubCategory(subcategory.id)}><i className='fa-solid fa-trash'/></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                {/* List Items End */}
              </div>
            </div>
            {/* Items Pagination Start */}
            <div className="w-100 d-flex justify-content-center">
              <nav>
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link shadow" href="#" tabindex="-1" aria-disabled="true">
                      <i data-acorn-icon="chevron-left"></i>
                    </a>
                  </li>
                  <li className="page-item active"><a className="page-link shadow" href="#">1</a></li>
                  <li className="page-item"><a className="page-link shadow" href="#">2</a></li>
                  <li className="page-item"><a className="page-link shadow" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link shadow" href="#">
                      <i data-acorn-icon="chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Items Pagination End */}
          </div>
        </div>
      </main>
      {/* Sub Category view by id Modal Start */}
      <div className="modal modal-right fade" id="subcategoryViewModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-primary">Sub Category Detail</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {viewSubCategory && (
                <form>
                  {/* Image Start */}
                  <div className="mb-5">
                    <h2 className="small-title">Image</h2>
                    <div className="card">
                      <div className="card-body">
                        <div className="dropzone dropzone-columns row g-2 row-cols-1 row-cols-md-1 border-0 p-0" ><img src={`http://localhost:8000${viewSubCategory.image}`} alt="user"/></div>
                      </div>
                    </div>
                  </div>
                  {/* Image End */}
                  <div className="mb-3">
                    <label className="form-label text-primary">Name</label>
                    <input type="text" className="form-control" value={viewSubCategory.name} readOnly/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-primary">Category</label>
                    <input type="text" className="form-control" value={viewSubCategory.categoryName} readOnly/>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Sub Category view by id Modal End */}
      {/* Sub Category Update Modal Start */}
      <div className="modal modal-right fade" id="subcategoryUpdateModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-primary">Sub Category Detail</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <h2 className="small-title">Image</h2>
                  <div className="card">
                        {editImage && (
                        <div className="mt-1 text-center">
                            <img src={editImage.url} className="mb-3" alt={editImage.name} style={{ maxWidth: '100%', maxHeight: '200px' }} />
                            {/* <p>Name: {editImage.name}</p>
                            <p>Size: {formatSize(editImage.size)}</p> */}
                            <div>
                                <button type="button" className="btn btn-danger" onClick={handleEditDelete}><i className='fa-solid fa-trash' /></button>
                            </div>
                        </div>
                        )}
                        {!editImage && (
                          <input type="file" name="image" className="form-control" onChange={handleEditFileChange} />
                        )}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label text-primary">Name</label>
                  <input type="text" className="form-control" name="name" value={editSubCategory.name} onChange={handleEditOnchange} />
                </div>
                <select className="form-select" name="category" onChange={handleEditOnchange} value={editSubCategory.category}>
                    <option value="" disabled>Select a category</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
              </form>
            </div>
            <div className="modal-footer border-0">
              <button type="button" className="btn btn-icon btn-icon-end btn-primary" data-bs-dismiss="modal" onClick={handleEditSubmit}>
                  <span>Update</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Sub Category Update Modal End */}
      {/* Sub Category Add Modal Start */}
      <div className="modal modal-right fade" id="subcategoryAddModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-primary">Add New Sub Category</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  {!image && <input type="file" name="image" className="form-control" onChange={handleFileChange} />}
                  {image && (
                    <div className="mt-3">
                      <center><img src={image.url} className="mb-3" alt={image.name} style={{ maxWidth: '100%', maxHeight: '200px' }} />
                      <p>Name: {image.name}</p>
                      <p>Size: {formatSize(image.size)}</p>
                      <button type="button" className="btn btn-danger" onClick={handleDelete}><i className='fa-solid fa-trash'/></button></center>
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label text-primary">Name</label>
                  <input type="text" className="form-control"  name="name" onChange={handleOnChange} value={NewSubCategoryData.name}/>
                </div>
                <div className="mb-3">
                  <label className="form-label text-primary">Category</label>
                  <select className="form-select" name="category" onChange={handleOnChange} value={NewSubCategoryData.category}>
                    <option value="" disabled>Select a category</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer border-0">
              <a href="#" className="btn btn-icon btn-icon-end btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>
                <span>Add +</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Sub Category Add Modal End */}
    </div>
  )
}

export default SubCategory
