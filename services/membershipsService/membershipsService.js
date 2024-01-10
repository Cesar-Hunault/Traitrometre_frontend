import backendBaseUrl from "../../ApiConfig";

async function createMemberships(token, object) {
  const response = await fetch(`${backendBaseUrl}/memberships`, {
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
    return data;
  } else {
    throw new Error(data.error);
  }
}

export { createMemberships };
