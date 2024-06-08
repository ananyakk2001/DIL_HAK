import React from 'react'
import { Link } from 'react-router-dom'

function OrderSideNav() {
  return (
    <div>
      <div id="nav" className="nav-container d-flex">
        <div className="nav-content d-flex">
          {/* <!-- Logo Start --> */}
          <div className="logo position-relative">
            <Link to="/orderadmin-dashboard">
              {/* <!-- Logo can be added directly --> */}
              <img  src="img/logo/logo1.png" alt="logo" style={{marginLeft:'-30px'}}/>
              {/* <!-- Or added via css to provide different ones for different color themes --> */}
              {/* <div className="img"></div> */}
            </Link>
          </div>
          {/* <!-- Logo End --> */}

          {/* <!-- User Menu Start --> */}
          <div className="user-container d-flex">
            <Link to="#" className="d-flex user position-relative" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img className="profile" alt="profile" src="img/profile/profile-1.webp" />
              <div className="name">Zayn Hartley</div>
            </Link>
            <div className="dropdown-menu dropdown-menu-end user-menu wide">
              <div className="row mb-3 ms-0 me-0">
                <div className="col-12 ps-1 mb-2">
                  <div className="text-extra-small text-primary">ACCOUNT</div>
                </div>
                <div className="col-6 ps-1 pe-1">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/orderadmin-view">User Info</Link>
                    </li>
                    <li>
                      <Link to="#">Preferences</Link>
                    </li>
                    <li>
                      <Link to="#">Calendar</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6 pe-1 ps-1">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="#">Security</Link>
                    </li>
                    <li>
                      <Link to="#">Billing</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mb-1 ms-0 me-0">
                <div className="col-12 p-1 mb-2 pt-2">
                  <div className="text-extra-small text-primary">APPLICATION</div>
                </div>
                <div className="col-6 ps-1 pe-1">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="#">Themes</Link>
                    </li>
                    <li>
                      <Link to="#">Language</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6 pe-1 ps-1">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="#">Devices</Link>
                    </li>
                    <li>
                      <Link to="#">Storage</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mb-1 ms-0 me-0">
                <div className="col-12 p-1 mb-3 pt-3">
                  <div className="separator-light"></div>
                </div>
                <div className="col-6 ps-1 pe-1">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="#">
                        <i data-acorn-icon="help" className="me-2" data-acorn-size="17"></i>
                        <span className="align-middle">Help</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i data-acorn-icon="file-text" className="me-2" data-acorn-size="17"></i>
                        <span className="align-middle">Docs</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6 pe-1 ps-1">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="#">
                        <i data-acorn-icon="gear" className="me-2" data-acorn-size="17"></i>
                        <span className="align-middle">Settings</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i data-acorn-icon="logout" className="me-2" data-acorn-size="17"></i>
                        <span className="align-middle">Logout</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- User Menu End --> */}

          {/* <!-- Icons Menu Start --> */}
          <ul className="list-unstyled list-inline text-center menu-icons">
            <li className="list-inline-item">
              <Link to="#" data-bs-toggle="modal" data-bs-target="#searchPagesModal">
                <i data-acorn-icon="search" data-acorn-size="18"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" id="pinButton" className="pin-button">
                <i data-acorn-icon="lock-on" className="unpin" data-acorn-size="18"></i>
                <i data-acorn-icon="lock-off" className="pin" data-acorn-size="18"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" id="colorButton">
                <i data-acorn-icon="light-on" className="light" data-acorn-size="18"></i>
                <i data-acorn-icon="light-off" className="dark" data-acorn-size="18"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" data-bs-toggle="dropdown" data-bs-target="#notifications" aria-haspopup="true" aria-expanded="false" className="notification-button">
                <div className="position-relative d-inline-flex">
                  <i data-acorn-icon="bell" data-acorn-size="18"></i>
                  <span className="position-absolute notification-dot rounded-xl"></span>
                </div>
              </Link>
              <div className="dropdown-menu dropdown-menu-end wide notification-dropdown scroll-out" id="notifications">
                <div className="scroll">
                  <ul className="list-unstyled border-last-none">
                    <li className="mb-3 pb-3 border-bottom border-separator-light d-flex">
                      <img src="img/profile/profile-1.webp" className="me-3 sw-4 sh-4 rounded-xl align-self-center" alt="..." />
                      <div className="align-self-center">
                        <Link to="#">Joisse Kaycee just sent a new comment!</Link>
                      </div>
                    </li>
                    <li className="mb-3 pb-3 border-bottom border-separator-light d-flex">
                      <img src="img/profile/profile-2.webp" className="me-3 sw-4 sh-4 rounded-xl align-self-center" alt="..." />
                      <div className="align-self-center">
                        <Link to="#">New order received! It is total $147,20.</Link>
                      </div>
                    </li>
                    <li className="mb-3 pb-3 border-bottom border-separator-light d-flex">
                      <img src="img/profile/profile-3.webp" className="me-3 sw-4 sh-4 rounded-xl align-self-center" alt="..." />
                      <div className="align-self-center">
                        <Link to="#">3 items just added to wish list by a user!</Link>
                      </div>
                    </li>
                    <li className="pb-3 pb-3 border-bottom border-separator-light d-flex">
                      <img src="img/profile/profile-6.webp" className="me-3 sw-4 sh-4 rounded-xl align-self-center" alt="..." />
                      <div className="align-self-center">
                        <Link to="#">Kirby Peters just sent a new message!</Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          {/* <!-- Icons Menu End --> */}

          {/* <!-- Menu Start --> */}
          <div className="menu-container flex-grow-1">
            <ul id="menu" className="menu">
              <li>
                <Link to="/orderadmin-dashboard">
                  <i className="fa-solid fa-home icon" data-acorn-size="18"></i>
                  <span className="label">Dashboard</span>
                </Link>
              </li>

              <li>
                    <Link to="/orderadmin-order">
                    <i className="fa-solid fa-shopping-bag icon" data-acorn-size="18"/>
                      <span className="label">Order</span>
                    </Link>
              </li>

              <li>
                <Link to="/orderadmin-shipping">
                <i className="fa-solid fa-shopping-cart icon" data-acorn-size="18"/>
                  <span className="label">Shipping</span>
                </Link>
              </li>

                {/* <li>
                  <Link to="/orderadmin-customer">
                  <i className="fa-solid fa-user icon" data-acorn-size="18"/>
                    <span className="label">Customer</span>
                  </Link>
                </li> */}
               
              <li>
                <Link to="/orderadmin-settings">
                  <i className="fa-solid fa-gear icon" data-acorn-size="18"></i>
                  <span className="label">Settings</span>
                </Link>
              </li>


            </ul>
          </div>
          {/* <!-- Menu End --> */}

          {/* <!-- Mobile Buttons Start --> */}
          <div className="mobile-buttons-container">
            {/* <!-- Menu Button Start --> */}
            <Link to="#" id="mobileMenuButton" className="menu-button">
              <i data-acorn-icon="menu"></i>
            </Link>
            {/* <!-- Menu Button End --> */}
          </div>
          {/* <!-- Mobile Buttons End --> */}
        </div>
        <div className="nav-shadow"></div>
      </div>
    </div>
  )
}

export default OrderSideNav
