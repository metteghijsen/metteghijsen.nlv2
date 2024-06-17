export default defineEventHandler((event) => {
  event.node.res.setHeader('Strict-Transport-Security', 'max-age=31536000')
  event.node.res.setHeader('X-XSS-Protection', '1; mode=block')
  event.node.res.setHeader('X-Content-Type-Options', 'nosniff')
  event.node.res.setHeader('Referrer-Policy', 'same-origin')
})
