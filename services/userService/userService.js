import backendBaseUrl from "../../ApiConfig";

async function login(user) {
  const response = await fetch(`${backendBaseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error(response.status);
  }

  const data = await response.json();
  if (data.success) {
    return data;
  } else {
    throw new Error(data.error);
  }
}

async function createUser(user) {
  const response = fetch(`${backendBaseUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  if (data.success) {
    return data;
  } else {
    throw new Error(data.errors);
  }
}

async function getUserInfo(token, userId) {
  const response = await fetch(`${backendBaseUrl}/users/${userId}`, {
    method: "Get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  if (data.success) {
    return data;
  } else {
    throw new Error(data.error);
  }
}

export { login, createUser, getUserInfo };
