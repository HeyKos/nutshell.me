import React, { useContext } from "react";
import MainNavigation from "molecules/main-navigation";
import { AuthenticationContext } from "authentication-provider";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ApplicationLayout: React.FC<any> = (props: any) => {
    const { isAuthenticated } = useContext(AuthenticationContext);

    // -----------------------------------------------------------------------------------------
    // #region Render
    // -----------------------------------------------------------------------------------------

    return (
        <div>
            <MainNavigation isAuthenticated={isAuthenticated ?? false} />
            <div>{props.children}</div>
        </div>
    );

    // #endregion Render
};

export default ApplicationLayout;
