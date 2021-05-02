import StravaAuth from "./strava-auth";

describe("StravaAuth", () => {
    // -----------------------------------------------------------------------------------------
    // #region Constructor
    // -----------------------------------------------------------------------------------------

    describe("constuctor", () => {
        test("when optional parameters are supplied, sets values.", () => {
            // Arrange & Act
            const code = "test code";
            const scope = "test scope";
            const state = "test state";
            const result = new StravaAuth(code, scope, state);
            // Assert
            expect(result.code).toBe(code);
            expect(result.scope).toBe(scope);
            expect(result.state).toBe(state);
        });
        test("when optional parameters not are not supplied, sets default values.", () => {
            // Arrange & Act
            const code = "test code";
            const result = new StravaAuth(code);
            // Assert
            expect(result.code).toBe(code);
            expect(result.scope).toBe("");
            expect(result.state).toBe("");
        });
    });

    // #endregion Constructor

    // -----------------------------------------------------------------------------------------
    // #region fromUrlParams
    // -----------------------------------------------------------------------------------------

    describe("fromUrlParams", () => {
        test("When params are supplied, returns new instance with properties set.", () => {
            // Arrange
            const expected = new StravaAuth(
                "test code",
                "test scope",
                "test state"
            );
            const url = new URL(
                `https://test.com?code=${expected.code}&scope=${expected.scope}&state=${expected.state}`
            );
            const searchParams: URLSearchParams = new URLSearchParams(
                url.search
            );

            // Act
            const result = StravaAuth.fromUrlParams(searchParams);

            // Assert
            expect(result).toStrictEqual(expected);
        });
    });

    describe("fromUrlParams", () => {
        test("When url has no params, returns new instance with default values.", () => {
            // Arrange
            const expected = new StravaAuth("", "", "");
            const url = new URL("https://test.com");
            const searchParams: URLSearchParams = new URLSearchParams(
                url.search
            );

            // Act
            const result = StravaAuth.fromUrlParams(searchParams);

            // Assert
            expect(result).toStrictEqual(expected);
        });
    });

    describe("fromUrlParams", () => {
        test("When partial params are supplied, returns new instance with partial properties set.", () => {
            // Arrange
            const expected = new StravaAuth("test code", "", "");
            const url = new URL(`https://test.com?code=${expected.code}`);
            const searchParams: URLSearchParams = new URLSearchParams(
                url.search
            );

            // Act
            const result = StravaAuth.fromUrlParams(searchParams);

            // Assert
            expect(result).toStrictEqual(expected);
        });
    });

    describe("fromUrlParams", () => {
        test("When invalid params are supplied, returns new instance with default values.", () => {
            // Arrange
            const expected = new StravaAuth("", "", "");
            const url = new URL("https://test.com?notRealProperty=badValue");
            const searchParams: URLSearchParams = new URLSearchParams(
                url.search
            );

            // Act
            const result = StravaAuth.fromUrlParams(searchParams);

            // Assert
            expect(result).toStrictEqual(expected);
        });
    });

    describe("fromUrlParams", () => {
        test("When both valid and invalid params are supplied, returns new instance with partial properties set.", () => {
            // Arrange
            const expected = new StravaAuth("test code", "", "");
            const url = new URL(
                `https://test.com?notRealProperty=badValue&code=${expected.code}`
            );
            const searchParams: URLSearchParams = new URLSearchParams(
                url.search
            );

            // Act
            const result = StravaAuth.fromUrlParams(searchParams);

            // Assert
            expect(result).toStrictEqual(expected);
        });
    });

    // #endregion fromUrlParams
});
