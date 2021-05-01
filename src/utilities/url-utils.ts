const _getQueryParameter = (
    params: URLSearchParams,
    parameterName: string
): string => {
    if (!params.has(parameterName)) {
        return "";
    }
    return params.get(parameterName);
};

const URLUtils = {
    getQueryParameter: _getQueryParameter,
};

export default URLUtils;
