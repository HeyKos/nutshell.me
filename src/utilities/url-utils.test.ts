import URLUtils from "./url-utils";

describe("URLUtils", () => {
    // -----------------------------------------------------------------------------------------
    // #region getQueryParameter
    // -----------------------------------------------------------------------------------------

    describe("getQueryParameter", () => {
        test("When parameter doesn't exist, returns empty string", () => {
            // Arrange
            const searchParams: URLSearchParams = new URLSearchParams();
            const parameterName = "notReal";

            // Act
            const result = URLUtils.getQueryParameter(
                searchParams,
                parameterName
            );

            // Assert
            expect(result).toBe("");
        });

        test("When parameter exists, returns parameter value.", () => {
            // Arrange
            const parameterName = "valid";
            const expected = "expected";
            const url = new URL(
                `https://test.com?${parameterName}=${expected}`
            );
            const searchParams: URLSearchParams = new URLSearchParams(
                url.search
            );

            // Act
            const result = URLUtils.getQueryParameter(
                searchParams,
                parameterName
            );

            // Assert
            expect(result).toBe(expected);
        });
    });

    test("When URLSearchParams doesn't find param, returns empty string.", () => {
        // Arrange
        const parameterName = "someParam";
        const url = new URL(`https://test.com?${parameterName}=someValue`);
        const searchParams: URLSearchParams = new URLSearchParams(url.search);
        const getMock = jest.spyOn(searchParams, "get");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        getMock.mockImplementation((name: string) => null); // <--- This is the important arrangement);

        // Act
        const result = URLUtils.getQueryParameter(searchParams, parameterName);
        // Assert
        expect(getMock).toBeCalled();
        getMock.mockRestore();
        expect(result).toBe("");
    });

    // #endregion getQueryParameter
});
