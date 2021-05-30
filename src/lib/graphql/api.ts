import { GRAPHCMS_ENDPOINT, GRAPHCMS_API_TOKEN } from '$lib/env';

export async function api(query: string, variables?: {}) {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };
  if (GRAPHCMS_API_TOKEN) headers['Authorization'] = `Bearer ${GRAPHCMS_API_TOKEN}`;
  const res = await fetch(GRAPHCMS_ENDPOINT, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables
    })
  });

  const { status, ok } = res;
  const body = await res.json();

  return {
    status,
    ok,
    body
  };
}
