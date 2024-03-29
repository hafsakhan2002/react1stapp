const Navbar = () => {
    return (
         <nav className="navbar navbar-expand-lg navbar-light bg-warning">
         <div className="container-fluid">
           <a className="navbar-brand" href="#"><img src="https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg" alt="logo"/></a>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item">
                 <a className="nav-link active" aria-current="page" href="#">Home</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#">Link</a>
               </li>
               <li className="nav-item dropdown">
                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Ship to
           </a>
                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                   <li><a className="dropdown-item" href="#">Action</a></li>
                   <li><a className="dropdown-item" href="#">Another action</a></li>
                   <li><hr className="dropdown-divider" /></li>
                   <li><a className="dropdown-item" href="#">Something else here</a></li>
                 </ul>
               </li>
               <li className="nav-item">
                 <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">User</a>
               </li>
             </ul>
             <form className="d-flex w-75">
               <input className="form-control me-2  w-100" type="search" placeholder="What are you looking for" aria-label="Search" />
              
             </form>
             <button className="btn btn-light text-nowrap ">
               <img src="https://z.nooncdn.com/s/app/com/noon/icons/cart.svg"/> Cart
             </button>
           </div>
         </div>
       </nav>
    )
};
export default Navbar;