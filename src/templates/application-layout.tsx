import React from "react";
import MainNavigation from "../molecules/main-navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ApplicationLayout: React.FC<any> = (props: any) => {
    // -----------------------------------------------------------------------------------------
    // #region Render
    // -----------------------------------------------------------------------------------------

    return (
        <div>
            <MainNavigation />
            <div>{props.children}</div>
        </div>
    );

    // #endregion Render
};

export default ApplicationLayout;
