export function isLInk(link: string) {
  const checkHttp = ['h', 't', 't', 'p', ':']
  const checkHttps = ['h', 't', 't', 'p', 's', ':']
  const linkArr = link.split('')
  const http = []
  const https = []
  for (let i = 0; i < 5; i++) {
    if (linkArr[i] === checkHttp[i]) {
      http.push(linkArr[i])
    }
  }
  for (let i = 0; i < 6; i++) {
    if (linkArr[i] === checkHttps[i]) {
      https.push(linkArr[i])
    }
  }
  return http.length === 5 || https.length === 6

}