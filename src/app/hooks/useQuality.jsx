import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import qualityService from "../services/qualities.service";
import { toast } from "react-toastify";

const QualityContext = React.createContext();

export const useQuality = () => {
    return useContext(QualityContext);
};

export const QualityProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(true);
    const [quality, setQuality] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        getQualities();
    }, []);

    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }

    async function getQualities() {
        try {
            const { content } = await qualityService.get();
            setQuality(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }

    return (
        <QualityContext value={{ isLoading, quality }}>
            {children}
        </QualityContext>
    );
};

QualityProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
