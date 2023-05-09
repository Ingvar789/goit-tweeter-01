export async function getUsers(page, limit) {
  return fetch(
    `https://645a335e95624ceb21fab7f8.mockapi.io/users?p=${page}&l=${limit}`,
    {
      method: "GET",
      headers: { "content-type": "application/json" },
    }
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Sorry, bad request from the query.`));
  });
}

export async function updateUser(tweetId, modFollowers, modIsfollowing) {
  return fetch(`https://6457a8a30c15cb14820dc3cc.mockapi.io/users/${tweetId}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      followers: modFollowers,
      isfollowing: modIsfollowing,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Sorry, bad request from the query.`));
  });
}
