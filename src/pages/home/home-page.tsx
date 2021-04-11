import React from "react";
import Typography from "@material-ui/core/Typography";
import BusinessIcon from "@material-ui/icons/Business";

const HomePage: React.FC = () => {
    // ---------------------------------------------------x--------------------------------------
    // #region Render
    // -----------------------------------------------------------------------------------------

    return (
        <Typography variant="h1">
            <BusinessIcon color="primary" />
            Nutshell
        </Typography>
    );

    // #endregion Render
};

export default HomePage;
