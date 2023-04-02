import React from "react";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchIcon from '@mui/icons-material/Search';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Icon = ({ name, color, ...props }) => {
    return (
    <div className="icon">
        {name === "ArrowBackIos" && <ArrowBackIosNew htmlColor={color ? color : "#fff"} {...props} />}
        {name === "ArrowForwardIos" && <ArrowForwardIos htmlColor={color ? color : "#fff"} {...props} />}
        {name === "HomeRoundedIcon" && <HomeRoundedIcon htmlColor={color ? color : "#fff"} {...props} />}
        {name === "SearchIcon" && <SearchIcon htmlColor={color ? color : "#fff"} {...props} />}
        {name === "VideoLibraryIcon" && <VideoLibraryIcon htmlColor={color ? color : "#fff"} {...props} />}
        {name === "AddBoxIcon" && <AddBoxIcon htmlColor={color ? color : "#fff"} {...props} />}
        {name === "FavoriteIcon" && <FavoriteIcon htmlColor={color ? color : "#fff"} {...props} />}
    </div >
    )
}
export default Icon;