export const performRequest = async ({
    query,
    variables = {},
    includeDrafts = false,
}) => {
    const response = await fetch("https://graphql.datocms.com/", {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_DATO_CMS}`,
            ...(includeDrafts ? { "X-Include-Drafts": "true" } : {}),
        },
        method: "POST",
        body: JSON.stringify({ query, variables }),
    });

    const responseBody = await response.json();

    if (!response.ok) {
        console.log(
            `${response.status} ${response.statusText}: ${JSON.stringify(
                responseBody
            )}`
        );
        throw new Error(
            `${response.status} ${response.statusText}: ${JSON.stringify(
                responseBody
            )}`
        );
    }

    return responseBody;
};
