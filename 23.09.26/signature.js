// 단방향 암호화(Hashing) -> NodeJS Built-in Module 사용

const Crypto = require('crypto')

const str = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ'

const salt = 'web7722'
// salt는 dotenv와 같은 별도의 파일에 넣어 외부에 공개하지 않는다.

const signature = Crypto.createHmac('sha256', salt).update(str).digest('base64url')
console.log(signature);

const jwt = [str, signature].join('.')
console.log(jwt);

