import React from "react";
import NodeDetails from "../nodes/NodeDetails";
import "../styles/Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar-inside">
      <nav className="sidebar-nav">
        <div className="sidebar__header">
          <button className="btn-header">
            <span className="header-icon">
              <span className="header-icon-fst-ltr">C</span>
            </span>
            <div className="header-title">
              <div className="header-title-text">CM Lab</div>
              <svg
                height="14px"
                width="14px"
                className="down-arrow"
                color="#EEEFF1">
                <use
                  href="https://app.attio.com/web-assets/assets/icon-defs/8f0dcf0351a8cba1ac364bce6e82cad3.svg#icon"
                  height="14px"
                  width="14px"></use>
              </svg>
            </div>
          </button>
          <div className="slider-btn">
            <button className="collapse-btn">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.27218 1.90039L11.7247 1.90039C12.5425 1.90039 13.1929 1.90038 13.7177 1.94326C14.2551 1.98716 14.7133 2.079 15.1328 2.29277C15.8102 2.63791 16.3609 3.18864 16.7061 3.86602C16.9198 4.28557 17.0117 4.74378 17.0556 5.28114C17.0984 5.80589 17.0984 6.45632 17.0984 7.27415V10.7266C17.0984 11.5445 17.0984 12.1949 17.0556 12.7196C17.0117 13.257 16.9198 13.7152 16.7061 14.1348C16.3609 14.8121 15.8102 15.3629 15.1328 15.708C14.7133 15.9218 14.2551 16.0136 13.7177 16.0575C13.1929 16.1004 12.5425 16.1004 11.7247 16.1004H6.2722C5.45436 16.1004 4.80394 16.1004 4.27918 16.0575C3.74182 16.0136 3.28362 15.9218 2.86407 15.708C2.18669 15.3629 1.63596 14.8121 1.29081 14.1348C1.07704 13.7152 0.985207 13.257 0.941303 12.7196C0.898429 12.1949 0.898433 11.5445 0.898438 10.7266L0.898438 7.27414C0.898433 6.45631 0.898429 5.80589 0.941303 5.28114C0.985207 4.74378 1.07704 4.28557 1.29081 3.86602C1.63596 3.18864 2.18669 2.63791 2.86407 2.29277C3.28362 2.079 3.74182 1.98716 4.27918 1.94326C4.80394 1.90038 5.45436 1.90039 6.27218 1.90039ZM4.3769 3.13927C3.91375 3.17711 3.63105 3.24877 3.40886 3.36198C2.95727 3.59207 2.59012 3.95922 2.36002 4.41081C2.24681 4.633 2.17516 4.9157 2.13732 5.37886C2.0989 5.84901 2.09844 6.45041 2.09844 7.30039L2.09844 10.7004C2.09844 11.5504 2.0989 12.1518 2.13732 12.6219C2.17516 13.0851 2.24681 13.3678 2.36002 13.59C2.59012 14.0416 2.95727 14.4087 3.40886 14.6388C3.63105 14.752 3.91375 14.8237 4.3769 14.8615C4.84706 14.8999 5.44846 14.9004 6.29844 14.9004L11.6984 14.9004C12.5484 14.9004 13.1498 14.8999 13.62 14.8615C14.0831 14.8237 14.3658 14.752 14.588 14.6388C15.0396 14.4087 15.4068 14.0416 15.6369 13.59C15.7501 13.3678 15.8217 13.0851 15.8596 12.6219C15.898 12.1518 15.8984 11.5504 15.8984 10.7004L15.8984 7.30039C15.8984 6.45041 15.898 5.84901 15.8596 5.37886C15.8217 4.9157 15.7501 4.633 15.6369 4.41081C15.4068 3.95922 15.0396 3.59207 14.588 3.36198C14.3658 3.24877 14.0831 3.17711 13.62 3.13927C13.1498 3.10086 12.5484 3.10039 11.6984 3.10039L6.29844 3.10039C5.44846 3.10039 4.84706 3.10086 4.3769 3.13927Z"
                  fill="#86888D"
                  data-hovering="false"></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.19531 15.2246L7.19531 2.72461H8.39531L8.39531 15.2246H7.19531Z"
                  fill="#86888D"
                  data-hovering="false"
                  className="slider__icon"></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.375 5.42617C3.375 5.0948 3.64363 4.82617 3.975 4.82617H5.325C5.65637 4.82617 5.925 5.0948 5.925 5.42617C5.925 5.75754 5.65637 6.02617 5.325 6.02617H3.975C3.64363 6.02617 3.375 5.75754 3.375 5.42617Z"
                  fill="#86888D"
                  data-hovering="false"
                  className="slider__back_icon"></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.375 7.67422C3.375 7.34285 3.64363 7.07422 3.975 7.07422H5.325C5.65637 7.07422 5.925 7.34285 5.925 7.67422C5.925 8.00559 5.65637 8.27422 5.325 8.27422H3.975C3.64363 8.27422 3.375 8.00559 3.375 7.67422Z"
                  fill="#86888D"
                  data-hovering="false"
                  className="sc-kHoYCX kZavVa"></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.82739 11.2247C5.59308 11.459 5.21318 11.459 4.97886 11.2247L3.17886 9.42466C2.94455 9.19034 2.94455 8.81044 3.17886 8.57613L4.97886 6.77613C5.21317 6.54181 5.59307 6.54181 5.82739 6.77613C6.0617 7.01044 6.0617 7.39034 5.82739 7.62465L5.05165 8.40039H8.10312C8.4345 8.40039 8.70312 8.66902 8.70312 9.00039C8.70312 9.33176 8.4345 9.60039 8.10312 9.60039H5.05166L5.82739 10.3761C6.0617 10.6104 6.0617 10.9903 5.82739 11.2247Z"
                  fill="#86888D"
                  data-hovering="false"
                  className="slider_back_icon_i"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="sidebar__search">
          <button className="search-action-btn">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sc-galXqy gCzTER">
              <rect
                x="2"
                y="1"
                width="10"
                height="9"
                rx="2.5"
                stroke="#EEEFF1"
                stroke-width="1.1"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="sc-fZhijA cCzxAH"></rect>
              <rect
                x="2"
                y="1"
                width="10"
                height="9"
                rx="2.5"
                stroke="#EEEFF1"
                stroke-width="1.1"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#232529"
                data-active="false"
                className="sc-laRRCm lhiiKd"></rect>
              <path
                d="M5.33333 3.1665V7.83317M5.33333 6.1665L6.38596 5.1665M6.38596 5.1665L8.49123 3.1665M6.38596 5.1665L8.66667 7.83317"
                stroke="#EEEFF1"
                stroke-width="1.1"
                stroke-linecap="round"
                stroke-linejoin="round"
                data-active="false"
                className="sc-idzFOD dVtldE"></path>
            </svg>
            <div className="quick-action-text">Ouick actions</div>
            <div className="kbd-action">
              <kbd className="kbd-class ctrlk">Ctrlk</kbd>
            </div>
          </button>
          <button className="search-icon-btn">
            <svg height="14px" width="14px" className="sc-jTQCzO jFpUCO">
              <use
                href="https://app.attio.com/web-assets/assets/icon-defs/858a5de2c8ddc4fb09b9f69cc7351a52.svg#icon"
                height="14px"
                width="14px"></use>
            </svg>
            <kbd className="frd-slash">/</kbd>
          </button>
        </div>
        <div className="sidebar__panel">
          <div className="panel-container">
            <div className="menu-container">
              <div className="menu-item">
                <svg height="14px" width="14px" className="sc-jTQCzO cMjOef">
                  <use
                    href="https://app.attio.com/web-assets/assets/icon-defs/953851fa8f7e1a030203bdeae3ee23e2.svg#icon"
                    height="14px"
                    width="14px"></use>
                </svg>
                <span>Notifications</span>
              </div>
              <div className="menu-item active">
                <i className="icon tasks"></i>
                <span>Tasks</span>
              </div>
              <div className="menu-item">
                <i className="icon notes"></i>
                <span>Notes</span>
              </div>
              <div className="menu-item">
                <i className="icon emails"></i>
                <span>Emails</span>
              </div>
              <div className="menu-item">
                <i className="icon reports"></i>
                <span>Reports</span>
              </div>
              <div className="menu-item">
                <i className="icon automations"></i>
                <span>Automations</span>
              </div>
            </div>
            <div className="menu-favorites-section">
              <div className="fav-dropdown">
                <div className="sub-fav">
                  <svg
                    height="14px"
                    width="14px"
                    data-state="open"
                    className="sc-jTQCzO llkbFI sc-hWefFZ gJByXy">
                    <use
                      href="https://app.attio.com/web-assets/assets/icon-defs/8f0dcf0351a8cba1ac364bce6e82cad3.svg#icon"
                      height="14px"
                      width="14px"></use>
                  </svg>
                  <div className="fav-text">Favorites</div>
                  <div className="create-fav-icon">
                    <button className="fav-btn">
                      <svg
                        height="14px"
                        width="14px"
                        className="sc-jTQCzO bHGgSR">
                        <use
                          href="https://app.attio.com/web-assets/assets/icon-defs/2e14c489269de17ef825f009d37d4104.svg#icon"
                          height="14px"
                          width="14px"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="fav-list">No favorites</div>
            </div>

            <div className="menu-section">
              <span className="section-title">Records</span>
              <div className="menu-item">
                <i className="icon companies"></i>
                <span>Companies</span>
              </div>
              <div className="menu-item">
                <i className="icon people"></i>
                <span>People</span>
              </div>
            </div>

            <div className="menu-section">
              <span className="section-title">Lists</span>
            </div>
          </div>
        </div>
        <div className="sidebar__footer">
          <div className="trial-info">
            <div className="help-steps">
              <i className="icon help-icon">?</i>
              <span>Help and first steps</span>
              <div className="progress">
                <span>1/5</span>
              </div>
            </div>
            <div className="trial-days">
              <div className="days-left">
                <span>11</span>
              </div>
              <span>days left on trial</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
