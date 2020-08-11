import React from "react";
import { API } from "../config";
import $ from "jquery";

const ShowImage = ({ item, url }) => (
    <div className="carousel-img">
        <img
            src={`${API}/${url}/photo/${item._id}`}
            alt={item.name}
             
        />
    </div>
);

export default ShowImage;
 