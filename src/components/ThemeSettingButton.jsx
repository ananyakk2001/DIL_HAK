import React from 'react'

function ThemeSettingButton() {
  return (
    <div>
       {/* <!-- Theme Settings & Niches Buttons Start --> */}
    <div className="settings-buttons-container">
      <button type="button" className="btn settings-button btn-primary p-0" data-bs-toggle="modal" data-bs-target="#settings" id="settingsButton">
        <span className="d-inline-block no-delay" data-bs-delay="0" data-bs-offset="0,3" data-bs-toggle="tooltip" data-bs-placement="left" title="Settings">
          <i data-acorn-icon="paint-roller" className="position-relative"></i>
        </span>
      </button>
      {/* <button type="button" className="btn settings-button btn-primary p-0" data-bs-toggle="modal" data-bs-target="#niches" id="nichesButton">
        <span className="d-inline-block no-delay" data-bs-delay="0" data-bs-offset="0,3" data-bs-toggle="tooltip" data-bs-placement="left" title="Niches">
          <i data-acorn-icon="toy" className="position-relative"></i>
        </span>
      </button> */}
    </div>
    {/* <!-- Theme Settings & Niches Buttons End --> */}
    </div>
  )
}

export default ThemeSettingButton
