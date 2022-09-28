import PropTypes from "prop-types";
import React from "react";
import { useQuality } from "../../../hooks/useQuality";

const Quality = ({ id }) => {
    const { isLoading, getQuality } = useQuality();
    const { color, name } = getQuality(id);
    if (!isLoading) {
        return <span className={"badge m-1 bg-" + color}>{name}</span>;
    } else return "Loading...";
};
Quality.propTypes = {
    id: PropTypes.string.isRequired
};

export default Quality;
