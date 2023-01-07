import React from "react";

import editIcon from '../images/edit.png';
import deleteIcon from'../images/delete.png';
import { Link } from "react-router-dom";

const Singleblog = () => {
  return (
    <div className="singleblog">
      <div className="content">
        <img src="https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=600" alt="dummy data"/>
        <div className="user">
          <img src="https://images.pexels.com/photos/5474032/pexels-photo-5474032.jpeg?auto=compress&cs=tinysrgb&w=1600"alt="user photo"/>
          <div className="userInfo">
            <span> Username</span>
            <p>posted x days ago.</p>
          </div>
          <div className="modify">
            <Link to={`/write?edit=2`}>
              <img src={editIcon} alt="edit icon"/>
              </Link>
            
            <img src={deleteIcon} alt="delete icon"/>
          </div>
        </div>
      </div>
      <div className="menu">m</div>
    </div>
    
  );
};

export default Singleblog;
