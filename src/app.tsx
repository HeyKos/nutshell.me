import React from "react";
import "fontsource-roboto";
import BusinessIcon from "@material-ui/icons/Business";
import Typography from "@material-ui/core/Typography";

const App: React.FC = () => {
  // -----------------------------------------------------------------------------------------
  // #region Render
  // -----------------------------------------------------------------------------------------

  return (
    <>
      <Typography variant="h1">
        <BusinessIcon color="primary" />
        Nutshell
      </Typography>
    </>
  );

  // #endregion Render
};

export default App;
