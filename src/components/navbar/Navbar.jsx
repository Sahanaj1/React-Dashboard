import * as React from 'react';
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Calendar from '../calendar/Calendar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DrawerComponent from '../drawerComp/DrawerComponent';
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [units, setUnits] = React.useState('');
  const [projects, setProjects] = React.useState('');
  const handleChangeUnits = (event) => {
    setUnits(event.target.value);
  };
 

  const handleChangeProject = (event) => {
    setProjects(event.target.value);
  };
  return (
    <div className="navbar">
      <div className="wrapper">
      <div className='HamBurgerDiv'>
      <DrawerComponent/>
      </div>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className='CenterDivs'>
        <div className='unit'>
        <FormControl sx={{ m: 1, minWidth: 130,height:30 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Units Name</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={units}
          onChange={handleChangeUnits}
          autoWidth
          label="Units"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={21}>21</MenuItem>
          <MenuItem value={22}>22</MenuItem>
        </Select>
      </FormControl>
        </div>
        <div className='projectSite'>
        <FormControl sx={{ m: 1, minWidth: 130,height:30 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Project Site</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={projects}
          onChange={handleChangeProject}
          autoWidth
          label="Project"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'UK'}>UK</MenuItem>
          <MenuItem value={'Canada'}>Canada</MenuItem>
          <MenuItem value={'Dubai'}>Dubai</MenuItem>
        </Select>
      </FormControl>
        </div>
       <div className='calendar'>
       <Calendar/>
       </div>
       </div>
        <div className="items">
          <div className="item">
          <NotificationsIcon/>
          </div>
          <div className="item2">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
            <span className='profileName'>Hello Nihar</span>
            <KeyboardArrowDownIcon/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
