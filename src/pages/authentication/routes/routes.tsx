import { lazy, ReactElement } from "react";
import { Route } from "react-router-dom";

import { AuthenticationRoutePaths } from "@app/pages/authentication/routes/paths";

const SignIn = lazy(() =>
    import(/* webpackChunkName: "page-sign-in" */ "@app/pages/authentication/sign-in").then(({ SignIn }) => ({
        default: SignIn,
    }))
);

const SignUp = lazy(() =>
    import(/* webpackChunkName: "page-sign-up" */ "@app/pages/authentication/sign-up").then(({ SignUp }) => ({
        default: SignUp,
    }))
);

const authenticationRoutes: ReactElement = (
    <>
        <Route path={AuthenticationRoutePaths.LOGIN} element={<SignIn />} />
        <Route path={AuthenticationRoutePaths.SIGN_IN} element={<SignIn />} />

        <Route path={AuthenticationRoutePaths.SIGN_UP} element={<SignUp />} />
        <Route path={AuthenticationRoutePaths.REGISTER} element={<SignUp />} />
    </>
);

export { authenticationRoutes };
