import React from 'react'

function ThemeSettings() {
  return (
    <>
    {/* <!-- Theme Settings Modal Start --> */}
    <div
      className="modal fade modal-right scroll-out-negative"
      id="settings"
      data-bs-backdrop="true"
      tabindex="-1"
      role="dialog"
      aria-labelledby="settings"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable full" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Theme Settings</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
            <div className="scroll-track-visible">
              <div className="mb-5" id="color">
                <label className="mb-3 d-inline-block form-label">Color</label>
                <div className="row d-flex g-3 justify-content-between flex-wrap mb-3">
                  <a href="#" className="flex-grow-1 w-50 option col" data-value="light-blue" data-parent="color">
                    <div className="card rounded-md p-3 mb-1 no-shadow color">
                      <div className="blue-light"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">LIGHT BLUE</span>
                    </div>
                  </a>
                  <a href="#" className="flex-grow-1 w-50 option col" data-value="dark-blue" data-parent="color">
                    <div className="card rounded-md p-3 mb-1 no-shadow color">
                      <div className="blue-dark"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">DARK BLUE</span>
                    </div>
                  </a>
                </div>
                <div className="row d-flex g-3 justify-content-between flex-wrap mb-3">
                  <a href="#" className="flex-grow-1 w-50 option col" data-value="light-teal" data-parent="color">
                    <div className="card rounded-md p-3 mb-1 no-shadow color">
                      <div className="teal-light"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">LIGHT TEAL</span>
                    </div>
                  </a>
                  <a href="#" className="flex-grow-1 w-50 option col" data-value="dark-teal" data-parent="color">
                    <div className="card rounded-md p-3 mb-1 no-shadow color">
                      <div className="teal-dark"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">DARK TEAL</span>
                    </div>
                  </a>
                </div>
                <div className="row d-flex g-3 justify-content-between flex-wrap mb-3">
                  <a href="#" className="flex-grow-1 w-50 option col" data-value="light-sky" data-parent="color">
                    <div className="card rounded-md p-3 mb-1 no-shadow color">
                      <div className="sky-light"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">LIGHT SKY</span>
                    </div>
                  </a>
                  <a href="#" className="flex-grow-1 w-50 option col" data-value="dark-sky" data-parent="color">
                    <div className="card rounded-md p-3 mb-1 no-shadow color">
                      <div className="sky-dark"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">DARK SKY</span>
                    </div>
                  </a>
                </div>
                <div className="row d-flex g-3 justify-content-between flex-wrap mb-3">
                  <a href="#" className="flex-grow-1 w-50 option col" data-value="light-red" data-parent="color">
                    <div className="card rounded-md p-3 mb-1 no-shadow color">
                      <div className="red-light"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">LIGHT RED</span>
                    </div>
                  </a>
                  <a href="#" className="flex-grow-1 w-50 option col" data-value="dark-red" data-parent="color">
                    <div className="card rounded-md p-3 mb-1 no-shadow color">
                      <div className="red-dark"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">DARK RED</span>
                    </div>
                  </a>
                </div>
                <div className="row d-flex g-3 justify-content-between flex-wrap mb-3">
                  <a href="#" className="flex-grow-1 w-50 option col" data-value="light-green" data-parent="color">
                    <div className="card rounded-md p-3 mb-1 no-shadow color">
                      <div className="green-light"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">LIGHT GREEN</span>
                    </div>
                  </a>
                  <a href="#" className="flex-grow-1 w-50 option col" data-value="dark-green" data-parent="color">
                    <div className="card rounded-md p-3 mb-1 no-shadow color">
                      <div className="green-dark"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">DARK GREEN</span>
                    </div>
                  </a>
                </div>
                <div className="row d-flex g-3 justify-content-between flex-wrap mb-3">
                  <a href="#" className="flex-grow-1 w-50 option col" data-value="light-lime" data-parent="color">
                    <div className="card rounded-md p-3 mb-1 no-shadow color">
                      <div className="lime-light"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">LIGHT LIME</span>
                    </div>
                  </a>
                  <a href="#" className="flex-grow-1 w-50 option col" data-value="dark-lime" data-parent="color">
                    <div className="card rounded-md p-3 mb-1 no-shadow color">
                      <div className="lime-dark"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">DARK LIME</span>
                    </div>
                  </a>
                </div>
                <div className="row d-flex g-3 justify-content-between flex-wrap mb-3">
                  <a href="#" className="flex-grow-1 w-50 option col" data-value="light-pink" data-parent="color">
                    <div className="card rounded-md p-3 mb-1 no-shadow color">
                      <div className="pink-light"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">LIGHT PINK</span>
                    </div>
                  </a>
                  <a href="#" className="flex-grow-1 w-50 option col" data-value="dark-pink" data-parent="color">
                    <div className="card rounded-md p-3 mb-1 no-shadow color">
                      <div className="pink-dark"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">DARK PINK</span>
                    </div>
                  </a>
                </div>
                <div className="row d-flex g-3 justify-content-between flex-wrap mb-3">
                  <a href="#" className="flex-grow-1 w-50 option col" data-value="light-purple" data-parent="color">
                    <div className="card rounded-md p-3 mb-1 no-shadow color">
                      <div className="purple-light"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">LIGHT PURPLE</span>
                    </div>
                  </a>
                  <a href="#" className="flex-grow-1 w-50 option col" data-value="dark-purple" data-parent="color">
                    <div className="card rounded-md p-3 mb-1 no-shadow color">
                      <div className="purple-dark"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">DARK PURPLE</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mb-5" id="navcolor">
                <label className="mb-3 d-inline-block form-label">Override Nav Palette</label>
                <div className="row d-flex g-3 justify-content-between flex-wrap">
                  <a href="#" className="flex-grow-1 w-33 option col" data-value="default" data-parent="navcolor">
                    <div className="card rounded-md p-3 mb-1 no-shadow">
                      <div className="figure figure-primary top"></div>
                      <div className="figure figure-secondary bottom"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">DEFAULT</span>
                    </div>
                  </a>
                  <a href="#" className="flex-grow-1 w-33 option col" data-value="light" data-parent="navcolor">
                    <div className="card rounded-md p-3 mb-1 no-shadow">
                      <div className="figure figure-secondary figure-light top"></div>
                      <div className="figure figure-secondary bottom"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">LIGHT</span>
                    </div>
                  </a>
                  <a href="#" className="flex-grow-1 w-33 option col" data-value="dark" data-parent="navcolor">
                    <div className="card rounded-md p-3 mb-1 no-shadow">
                      <div className="figure figure-muted figure-dark top"></div>
                      <div className="figure figure-secondary bottom"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">DARK</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mb-5" id="behaviour">
                <label className="mb-3 d-inline-block form-label">Menu Behaviour</label>
                <div className="row d-flex g-3 justify-content-between flex-wrap">
                  <a href="#" className="flex-grow-1 w-50 option col" data-value="pinned" data-parent="behaviour">
                    <div className="card rounded-md p-3 mb-1 no-shadow">
                      <div className="figure figure-primary left large"></div>
                      <div className="figure figure-secondary right small"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">PINNED</span>
                    </div>
                  </a>
                  <a href="#" className="flex-grow-1 w-50 option col" data-value="unpinned" data-parent="behaviour">
                    <div className="card rounded-md p-3 mb-1 no-shadow">
                      <div className="figure figure-primary left"></div>
                      <div className="figure figure-secondary right"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">UNPINNED</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mb-5" id="layout">
                <label className="mb-3 d-inline-block form-label">Layout</label>
                <div className="row d-flex g-3 justify-content-between flex-wrap">
                  <a href="#" className="flex-grow-1 w-50 option col" data-value="fluid" data-parent="layout">
                    <div className="card rounded-md p-3 mb-1 no-shadow">
                      <div className="figure figure-primary top"></div>
                      <div className="figure figure-secondary bottom"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">FLUID</span>
                    </div>
                  </a>
                  <a href="#" className="flex-grow-1 w-50 option col" data-value="boxed" data-parent="layout">
                    <div className="card rounded-md p-3 mb-1 no-shadow">
                      <div className="figure figure-primary top"></div>
                      <div className="figure figure-secondary bottom small"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">BOXED</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mb-5" id="radius">
                <label className="mb-3 d-inline-block form-label">Radius</label>
                <div className="row d-flex g-3 justify-content-between flex-wrap">
                  <a href="#" className="flex-grow-1 w-33 option col" data-value="rounded" data-parent="radius">
                    <div className="card rounded-md radius-rounded p-3 mb-1 no-shadow">
                      <div className="figure figure-primary top"></div>
                      <div className="figure figure-secondary bottom"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">ROUNDED</span>
                    </div>
                  </a>
                  <a href="#" className="flex-grow-1 w-33 option col" data-value="standard" data-parent="radius">
                    <div className="card rounded-md radius-regular p-3 mb-1 no-shadow">
                      <div className="figure figure-primary top"></div>
                      <div className="figure figure-secondary bottom"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">STANDARD</span>
                    </div>
                  </a>
                  <a href="#" className="flex-grow-1 w-33 option col" data-value="flat" data-parent="radius">
                    <div className="card rounded-md radius-flat p-3 mb-1 no-shadow">
                      <div className="figure figure-primary top"></div>
                      <div className="figure figure-secondary bottom"></div>
                    </div>
                    <div className="text-muted text-part">
                      <span className="text-extra-small align-middle">FLAT</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Theme Settings Modal End --> */}
    </>
  )
}

export default ThemeSettings
