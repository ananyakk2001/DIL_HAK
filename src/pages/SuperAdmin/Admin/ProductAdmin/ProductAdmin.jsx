import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductAdmin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8000/auth/product-admins/')
          .then(response => {
            console.log(response.data)
              setUsers(response.data);
          })
          .catch(error => {
              console.error('Error fetching admins:', error);
          });
  }, []);
const deleteUser = (userId) =>{
  axios.delete(`http://localhost:8000/auth/product-admins-edit/${userId}`)
  .then(response =>{ 
    setUsers(users.filter(user => user.id !== userId));

  } )
  .catch(error => {
    console.error('Error deleting user:',error);
  });
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
                <div className="w-auto sw-md-30">
                  <a href="/" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-medium align-middle">Home</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">Product Admin</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}

              {/* <!-- Top Buttons Start --> */}
              <div className="w-100 d-md-none"></div>
              <div className="col-12 col-sm-6 col-md-auto d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
                <a href="/productadmin-add" className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto">
                    <i data-acorn-icon="plus"></i>
                    <span>Add</span>
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

          {/* <!-- Controls Start --> */}
          <div className="row mb-2">
            {/* <!-- Search Start --> */}
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
            {/* <!-- Search End --> */}

            <div className="col-sm-12 col-md-7 col-lg-9 col-xxl-10 text-end mb-1">
              <div className="d-inline-block">
                {/* <!-- Length Start --> */}
                {/* <div className="dropdown-as-select d-inline-block" data-childSelector="span">
                  <button className="btn p-0 shadow" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,3">
                    <span
                      className="btn btn-foreground-alternate dropdown-toggle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-delay="0"
                      title="Item Count"
                    >
                      10 Items
                    </span>
                  </button>
                  <div className="dropdown-menu shadow dropdown-menu-end">
                    <a className="dropdown-item" href="#">5 Items</a>
                    <a className="dropdown-item active" href="#">10 Items</a>
                    <a className="dropdown-item" href="#">20 Items</a>
                  </div>
                </div> */}
                {/* <!-- Length End --> */}
              </div>
            </div>
          </div>
          {/* <!-- Controls End --> */}

          <div className="row g-0">
            <div className="col-12 mb-5">
              {/* <!-- List Items Start --> */}
              <div id="checkboxTable">
                <div className="mb-4 mb-lg-3 bg-transparent no-shadow d-none d-lg-block">
                  <div className="row g-0">
                    <div className="col-auto sw-11 d-none d-lg-flex"></div>
                    <div className="col">
                      <div className="ps-5 pe-4 h-100">
                        <div className="row g-0 h-100 align-content-center custom-sort">
                          {/* <div className="col-lg-4 d-flex flex-column mb-lg-0 pe-3 d-flex">
                            <div className="text-muted text-medium cursor-pointer" data-sort="name">USERNAME</div>
                          </div> */}
                          <div className="col-lg-3 d-flex flex-column pe-1 justify-content-center">
                            <div className="text-muted text-medium cursor-pointer" data-sort="email">NAME</div>
                          </div>
                          <div className="col-lg-3 d-flex flex-column pe-1 justify-content-center">
                            <div className="text-muted text-medium cursor-pointer" data-sort="email">EMAIL</div>
                          </div>
                          <div className="col-lg-3 d-flex flex-column pe-1 justify-content-center">
                            <div className="text-muted text-medium cursor-pointer" data-sort="group">PHONE</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Items Container Start --> */}
              {users.map(user => (
                <div key={user.id} className="card mb-3">
                  <div className="row g-0 h-100 sh-lg-9 position-relative">
                    <a href={`/productadmin-view/${user.id}`}  className="col-auto position-relative">
                      <img src={`http://localhost:8000${user.image}`} alt="image" className="card-img card-img-horizontal sw-11 h-100 sh-lg-9" />
                    </a>
                    <div className="col py-4 py-lg-0">
                      <div className="ps-5 pe-4 h-100">
                        <div className="row g-0 h-100 align-content-center">
                          <a href={`/productadmin-view/${user.id}`} className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center">
                          {user.first_name}
                          </a>
                          {/* <div className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center">
                            <div className="lh-1 text-alternate">{user.username}</div>
                          </div> */}
                          <div className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center">
                            <div className="lh-1 text-alternate">{user.email}</div>
                          </div>
                          <div className="col-12 col-lg-3 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center">
                            <div className="lh-1 text-alternate">{user.phone_number}</div>
                          </div>
                          <div className="form-check form-switch col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center">
                            <input type="checkbox" class="form-check-input" id="StatusSwitch"/>
                          </div>
                          <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center">
                            <a href={`/productadmin-update/${user.id}`} className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center"><i className='fa-solid fa-pen'/></a>
                          </div>
                         
                          <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center ">
                            <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex  h-lg-100 justify-content-center" onClick={() => deleteUser(user.id)}><i className='fa-solid fa-trash'/></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                ))}         
                
                {/* <!-- Items Container Start --> */}

                {/* <!-- List Items End --> */}
              </div>
            </div>
            {/* <!-- Items Pagination Start --> */}
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
            {/* <!-- Items Pagination End --> */}
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductAdmin
