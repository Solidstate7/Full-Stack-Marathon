const Crypto = require('crypto')

class JMT {
  constructor() {}

  encode(obj) {
    return Buffer.from(JSON.stringify(obj)).toString('base64url')
  }

  decode(str_base64) {
    return JSON.parse(Buffer.from(str_base64, 'base64url').toString('utf-8'))
  }

  createSignature(base64url, salt) {
    return Crypto.createHmac('sha256', salt).update(base64url).digest('base64url')
  }

  sign(obj, salt) {
    const header = this.encode({typ: 'JWT', alg: 'HS256'})
    const payload = this.encode(obj)
    const base64url = [header, payload].join('.')
    const signature = this.createSignature(base64url, salt)
    const jwt = [base64url, signature].join('.')
    return jwt
  }

  verify(token, salt) {
    const [header, payload, signature] = token.split('.')
    const base64url = [header, payload].join('.')
    const verifiable = this.createSignature(base64url, salt)

    if(signature !== verifiable) return null

    const result = this.decode(payload)
    return result
  }
}

module.exports = JMT