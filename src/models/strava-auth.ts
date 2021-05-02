import URLUtils from "utilities/url-utils";

export interface StravaAuthInterface {
    code: string;
    scope: string;
    state: string;
}

class StravaAuth implements StravaAuthInterface {
    code: string;
    scope: string;
    state: string;

    constructor(code: string, scope?: string, state?: string) {
        this.code = code;
        this.scope = scope ?? "";
        this.state = state ?? "";
    }

    static fromUrlParams(urlParams: URLSearchParams): StravaAuth {
        return new StravaAuth(
            URLUtils.getQueryParameter(urlParams, "code"),
            URLUtils.getQueryParameter(urlParams, "scope"),
            URLUtils.getQueryParameter(urlParams, "state")
        );
    }
}

export default StravaAuth;
