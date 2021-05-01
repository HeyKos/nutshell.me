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

    // #endregion getQueryParameter
});
