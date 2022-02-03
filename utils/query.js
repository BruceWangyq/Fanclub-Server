const endPoint = "https://api.cybertino.io/connect/";

exports.followListInfo = ({ address }) => {
  return {
    operationName: "followListInfo",
    query: `query followListInfo($address: String!) {
      allFollowing(address: $address) {
          address
        }      
    }`,
    variables: {
      address,
    },
  };
};

exports.request = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
};

exports.followListInfoQuery = async ({ address }) => {
  const schema = querySchemas["followListInfo"]({
    address,
  });
  const resp = await request(endPoint, schema);
  return resp;
};
