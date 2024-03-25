import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

function ExitClearance() {
  const location = useLocation();
  console.log(location);

  const FirstName = location.state ? location.state.FirstName : '';
  const LastName = location.state ? location.state.LastName : '';

 

  return (
    <div id="wrapper">
        <style>
        {`
          .sidebar-brand {
              display: flex;
              align-items: center;
              justify-content: center;
              text-decoration: none;
          }

          .sidebar-brand-icon {
              display: flex;
              align-items: center;
          }

          .logo1 {
              width: 38px;
              height: auto;
              display: block;
          }

          .logo2 {
              width: 150px;
              height: auto;
              display: block;
          }
        `}
      </style>
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/index">
          <div className="sidebar-brand-icon">
            <img src="./img/hris1.png" alt="companyLogo" className="logo1" />
          </div>
          <div className="sidebar-brand-text">
            <img src="./img/hris2.png" alt="companyLogo" className="logo2" />
          </div>
        </Link>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <Link className="nav-link" to="/landingpage">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">
          Interface
        </div>
        <li className="nav-item">
          <Link className="nav-link" to="/newHireUpload">
            <i className="fas fa-fw fa-upload"></i>
            <span>New Hire Upload</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/movement">
            <i className="fas fa-fw fa-handshake"></i>
            <span>Self Service Movement</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/exitclearance">
            <i className="fas fa-fw fa-sign-out-alt"></i>
            <span>Exit Clearance Processing</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/adminModule">
            <i className="fas fa-fw fa-user-tie"></i>
            <span>HR/Admin Module</span>
          </Link>
        </li>
        <hr className="sidebar-divider d-none d-md-block" />
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
      </ul>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* Sidebar Toggle (Topbar) */}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>
            
            {/* Topbar Search */}
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>
  
            {/* Topbar Navbar */}
            <ul className="navbar-nav ml-auto">
                {/* Nav Item - Search Dropdown (Visible Only XS) */}
                <li className="nav-item dropdown no-arrow d-sm-none">
                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-search fa-fw"></i>
                    </a>
                </li>
                <div className="topbar-divider d-none d-sm-block"></div>
  
                {/* Nav Item - User Information */}
                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{FirstName} {LastName}</span>
                        <img className="img-profile rounded-circle" src="img/undraw_profile.svg" alt="User Profile" />
                    </a>
                    {/* Dropdown - User Information */}
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Profile
                        </a>
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            Settings
                        </a>
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                            Activity Log
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Logout
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
        {/* page content begin here */}

        {/* card starts here */}
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-7">
              <div className="card shadow mb-4">
                {/* Card Header - New Hire Upload */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Exit Clearance Form</h6>
                </div>
                <p className='paragraph' >
                  To Employee: Kindly return the company issued items and obtain clearance from your respective manager or PM/PIC/DM and other clearing officers, as required in sections A, B, C and Accounting. Please forward the signed and accomplished Exit Clearance Form to HR Department within 24 hours from your last day of work to process your final pay. Please note that approved payments will be processed and released once this form and other requirements are completed and received by HR Ops. Please read the exit clearance processing guide sent to you for more details.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* card ends here */}

        
        {/* card starts here */}
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-7">
              <div className="card shadow mb-4">
                {/* Card Header - New Hire Upload */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Employee Details</h6>
                </div>
                
                <div className="exit-container">
                  <div className="exit-content-holder">
                    <h6 className="exit-item">Date Filed</h6>
                    <h6 className="exit-inputbox">00/00/0000</h6>
                  </div>
                  <div className="exit-content-holder">
                    <h6 className="exit-item">User ID</h6>
                    <h6 className="exit-inputbox">000001</h6>
                  </div>
                  <div className="exit-content-holder">
                    <h6 className="exit-item">Name</h6>
                    <h6 className="exit-inputbox">Rujie Jopista</h6>
                  </div>
                  <div className="exit-content-holder">
                    <h6 className="exit-item">Last Position Held</h6>
                    <h6 className="exit-inputbox">IT</h6>
                  </div>
                  <div className="exit-content-holder">
                    <h6 className="exit-item">Department</h6>
                    <h6 className="exit-inputbox">HR</h6>
                  </div>
                  <div className="exit-content-holder">
                    <h6 className="exit-item">Project Code</h6>
                    <h6 className="exit-inputbox">123456</h6>
                  </div>
                  <div className="exit-content-holder">
                    <h6 className="exit-item">Employee Status</h6>
                    <h6 className="exit-inputbox">Active</h6>
                  </div>
                  <div className="exit-content-holder">
                    <h6 className="exit-item">Date Hired</h6>
                    <h6 className="exit-inputbox">00/00/0000</h6>
                  </div>
                  <div className="exit-content-holder">
                    <h6 className="exit-item">Effective Data of Separation</h6>
                    <h6 className="exit-inputbox">00/00/0000</h6>
                  </div>
                  <div className="exit-content-holder">
                    <h6 className="exit-item">Last Working Date</h6>
                    <h6 className="exit-inputbox">00/00/0000</h6>
                  </div>
                  <div className="exit-content-holder">
                    <h6 className="exit-item">Email</h6>
                    <h6 className="exit-inputbox">rujiejopista@gmail.com</h6>
                  </div>
                     
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card ends here */}

        {/* card starts here */}
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-7">
              <div className="card shadow mb-4">
                {/* Card Header - New Hire Upload */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">A. Project Manager/PIC/Department Manager</h6>
                </div>
                <div className="exit-container-A">
                  <div style={{display: 'flex', justifyContent: 'flex-end', marginLeft: '25px' }}>
                    <h6 className="exit-item" >Yes/ No/ Not applicable(N/A)</h6>
                  </div>

                  <div className="exit-content-holder-A">
                    <h6 className="exit-item">Knowledge Transfer Done</h6>
                    <h6 className="exit-inputbox-A">N/A</h6>
                  </div>
                  
                  <div className="exit-content-holder-A">
                    <h6 className="exit-item">Files taken over</h6>
                    <h6 className="exit-inputbox-A">N/A</h6>
                  </div>

                  <div className="exit-content-holder-A">
                    <h6 className="exit-item">Office Items returned (attach inventory of items returned)</h6>
                    <h6 className="exit-inputbox-A">N/A</h6>
                  </div>

                  <div className="exit-content-holder-A">
                    <h6 className="exit-item">Keys / Passwords</h6>
                    <h6 className="exit-inputbox-A">N/A</h6>
                  </div>

                  <div className="exit-content-holder-A">
                    <h6 className="exit-item">Others:</h6>
                    <h6 className="exit-inputbox-A">N/A</h6>
                  </div>
                  
                  {/* <div>
                    <h6 className="exit-item" >Signature here</h6>
                    <h6 className="exit-item" style={{ }}>Name and Signature of PM/PIC/Manager / Date</h6>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card ends here */}

        {/* card starts here */}
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-7">
              <div className="card shadow mb-4">
                {/* Card Header - New Hire Upload */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">B. Administration Clearance: The following items were returned by the employee:</h6>
                </div>
                <div className="exit-container-B">
                  <h6 className="exit-inputbox-B" style={{ gridColumn: '2 / span 1' }}>Yes/ No/ Not applicable(N/A)</h6>
                  <h6 className="exit-inputbox-B" style={{ gridColumn: '3 / span 1' }}>Item(s) received by / Date:</h6>

                  <h6 className="exit-item-B" >Company ID</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>N/A</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>"Name - 00/00/0000"</h6>
                  
                  <h6 className="exit-item-B" >Exit Interview</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>N/A</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>"Name and signature of receiving officer"</h6>
                  
                  <h6 className="exit-item-B" >Deletion of AD Account</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>N/A</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>Name and signature of receiving officer"</h6>
                  
                  <h6 className="exit-item-B" >Health card (HMO)</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>N/A</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>Name and signature of receiving officer"</h6>
                  
                  <h6 className="exit-item-B" >Store/Canteen Clearance</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>N/A</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>Name and signature of receiving officer"</h6>
                  
                  <h6 className="exit-item-B" >Statutory Benefit Clearance</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>N/A</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>Name and signature of receiving officer"</h6>
                  
                  <h6 className="exit-item-B" >Laptops and accessories</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>N/A</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>Name and signature of receiving officer"</h6>
                
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card ends here */}

        {/* card starts here */}
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-7">
              <div className="card shadow mb-4">
                {/* Card Header - New Hire Upload */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">C. Global Technology Clearance</h6>
                </div>
                <div className="exit-container-C">
                  <h6 className="exit-inputbox-C" style={{ gridColumn: '2 / span 1' }}>Yes / No / Not applicable</h6>
                  <h6 className="exit-inputbox-C" style={{ gridColumn: '3 / span 1' }}>Checked by / Date:</h6>

                  <h6 className="exit-item-C" >Deactivate email account</h6>
                  <h6 className="exit-inputbox-C" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>N/A</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>"Name - 00/00/0000"</h6>
                  
                  <h6 className="exit-item-C" >Remove user rights from servers, GAMS, etc.</h6>
                  <h6 className="exit-inputbox-C" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>N/A</h6>
                  <h6 className="exit-inputbox-B" style={{border: '1px solid', padding: '5px', borderRadius: '5px'}}>Name and signature of receiving officer"</h6>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card ends here */}
        
        {/* card starts here */}
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-7">
              <div className="card shadow mb-4">
                {/* Card Header - New Hire Upload */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">D. Authority To Deduct</h6>
                </div>
                <p className='paragraph' >
                  I hereby authorize Innodata Knowledge Services, Inc. to deduct from my salary and other remunerations any or all money/ accountabilities due to the company or its officers for my final pay computation and/or check preparation, including but not limited to the following: XEMCO deductions, Loans, EMAP, Dental, Optical, Government/statutory contributions and loan payments and other deductions due to the company.
                </p>
                <br />
                <br />
                <h6 className="exit-item-D" >Name/Signature of Employee/Date</h6>
              </div>
            </div>
          </div>
        </div>
        {/* card ends here */}

        {/* card starts here */}
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-7">
              <div className="card shadow mb-4">
                {/* Card Header - New Hire Upload */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Clearance and Release Confirmed by:</h6>
                </div>
                <p className='paragraph' >
                  Remarks/Notes:
                </p>
                <br />
                <br />
                <h6 className="exit-item-D" >Name/Signature of HR HEAD/HR Representative/Date</h6>
              </div>
            </div>
          </div>
        </div>
        {/* card ends here */}

        {/* card starts here */}
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-7">
              <div className="card shadow mb-4">
                {/* Card Header - New Hire Upload */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">FINANCE CLEARANCE</h6>
                </div>
                <p className='paragraph' >
                  Any outstanding loan/advances? Yes No
                </p>
                <br />
                <br />
                <h6 className="exit-item-D" >Name/Signature of Finance (Accounting)/Date</h6>
                <p className='paragraph' >
                Other details/computations/etc.:
                </p>
                <br />
                <br />
                <h6 className="exit-item-D" >Name/Signature of Finance (Payroll)/Date</h6>
              </div>
            </div>
          </div>
        </div>
        {/* card ends here */}

        {/* card starts here */}
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-7">
              <div className="card shadow mb-4">
                {/* Card Header - New Hire Upload */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">ACKNOWLEDGEMENT</h6>
                </div>
                <p className='paragraph' >
                I hereby acknowledge the accuracy and completeness of this clearance. I will not disclose any or all company's confidential information upon separation from company.
                </p>
                <br />
                <h6 className="exit-item-D" >Name and Signature of Employee/Date</h6>
              </div>
            </div>
          </div>
        </div>
        {/* card ends here */}
        
        {/* card starts here */}
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-7">
              <div className="card shadow mb-4">
                {/* Card Header - New Hire Upload */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Received by HR/Date:</h6>
                </div>
                <br />
                <br />
                <br />
                <h6 className="exit-item-D" >Name and Signature of Employee/Date</h6>
              </div>
            </div>
          </div>
        </div>
        {/* card ends here */}

        <p style={{ textAlign: 'center' }}>      
          NOTE:
          Please affix your signature after you have completed the items from section A, B, C & Accounting Clearance.
        </p>
        {/* Page content ends here */}

        </div>
        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <p>Innodata Knowledge Services, Inc.</p>
              <span>Copyright &copy;2024</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ExitClearance;
