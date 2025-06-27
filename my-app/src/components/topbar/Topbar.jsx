import React from "react";
import './topbar.css'
import {Search,Person,Chat,Notifications} from '@mui/icons-material'
import {Link} from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
export default function Topbar() {
  const {user}=useContext(AuthContext);
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  return (

    <div className='topbarContainer'>
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className='logo'>Tanishk's Social</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className='searchIcon'></Search>
          <input placeholder='Search for Freinds, Post or Videos'className='searchInput'></input>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLinks">HomePage</span>
          <span className="topbarLinks">TimeLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
        <img src={user.profilePicture ? PF+user.profilePicture : PF+"profile/nopp.jpg"} alt="" className="topbarImg" />
        </Link>
      </div>
      </div>
  )
}
