import React from "react";
import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/Default.Layout";

const DefaultHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <DefaultLayout {...props}>
                        <Component {...props} />
                    </DefaultLayout>
                )}
            />
        </>
    );
};

export default DefaultHOC;
