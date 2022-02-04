const endPoint = "https://api.cybertino.io/connect/";

const followerListInfo = ({ address }) => {
  return {
    operationName: "followerListInfo",
    query: `query followerListInfo($address: String!) {
          identity (address:$address) {
              followers {
              list {
                address
        }      
    }
  }
}`,
    variables: {
      address,
    },
  };
};

const request = async (url = "", data = {}) => {
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
  const schema = followerListInfo({
    address,
  });
  const resp = await request(endPoint, schema);
  return resp;
};
