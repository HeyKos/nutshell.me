import React from "react";

export type Route = {
    path: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: React.FC<any>;
    routes?: Route[];
};
