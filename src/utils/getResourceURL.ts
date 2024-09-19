export default function getResourceURL(path: string) {
  if (path) {
    return `${process.env.API_URL}/assets/${path}`
  } else {
    return '/no-path.jpg'
  }
}