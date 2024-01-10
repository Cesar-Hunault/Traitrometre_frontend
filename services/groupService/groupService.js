import backendBaseUrl from "../../ApiConfig";

async function createGroup(token, object) {
  const response = await fetch(`${backendBaseUrl}/groups`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(object),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  if (data.success) {
  } else {
    throw new Error(data.error);
  }
}

async function getUserGroups(token, userId) {
  const response = await fetch(`${backendBaseUrl}/get_user_groups_admis?user_id=${userId}`, {
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

async function getUserGroupsDemands(token, userId) {
  const response = await fetch(`${backendBaseUrl}/get_user_groups_waiting?user_id=${userId}`, {
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

export { createGroup, getUserGroups, getUserGroupsDemands };
