const baseUrl = process.env.API_URL

async function fetchQuery(path: string, params = null) {
  let url
  if (params !== null) {
    url = `${baseUrl}/${path}/${params}`
  } else {
    url = `${baseUrl}/${path}`
  }
  const response = await fetch(`${url}`, {cache: "no-store"})
  return await response.json()
}

export { baseUrl, fetchQuery }