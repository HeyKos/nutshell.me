import React from "react";
import "./main-navigation.scss";
import Avatar from "@material-ui/core/Avatar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";

export const MainNavigation: React.FC = () => {
    // -----------------------------------------------------------------------------------------
    // #region Render
    // -----------------------------------------------------------------------------------------

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center">
                    <Grid item>
                        <Grid container alignItems="center">
                            <ButtonBase>
                                <Avatar
                                    alt="nutshell.me logo"
                                    src="https://via.placeholder.com/40"
                                />
                            </ButtonBase>
                            <Typography variant="h6">nutshell.me</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );

    // #endregion Render
};

export default MainNavigation;
