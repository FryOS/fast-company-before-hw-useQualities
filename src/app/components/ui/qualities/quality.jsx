import PropTypes from "prop-types";
import React from "react";
import { useQuality } from "../../../hooks/useQuality";

const Quality = ({ color, name, _id }) => {
    const { isLoading, getQuality } = useQuality();
    const q = getQuality(_id);
    console.log(q); // undefined
    if (!isLoading) {
        return <span className={"badge m-1 bg-" + color}>{name}</span>;
    } else return "Loading...";
};
Quality.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
};

export default Quality;
