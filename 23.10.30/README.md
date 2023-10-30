# Upload

파일 전송

이미지 -> 정적 라우터

`파일`도 마찬가지

요청 단계 -> Body 형식이 다르다 -> Multer middleware -> content type: `multipart/form-data`

요청 바디를 읽어서 back_end가 메모리에 담아서 디렉토리에 옮긴다. -> 디렉토리에 옮긴 뒤 정적 라우팅
DB에는 url만 저장한다.

```js
router.get(
    "/upload",
    `multer`,
    (req, res, next) => {
        req.aa = "10";
        next();
    },
    (req, res, next) => {
        res.send(req.aa);
    }
);
```

## multer

```sh
npm install multer
```

```js
const multer = require("multer");

const upload = multer(); // object is returned, in which there are functions {single: () => {}, array: () => {}}
upload.single(); // handler function is returned (middleware)
```

```
------WebKitFormBoundaryajoQNXxETG3fpfz8
Content-Disposition: form-data; name="title"

asdf
------WebKitFormBoundaryajoQNXxETG3fpfz8
Content-Disposition: form-data; name="upload1"; filename="KakaoTalk_20231016_190355986.png"
Content-Type: image/png


------WebKitFormBoundaryajoQNXxETG3fpfz8--
```

id
pw
name
provider
image
original_filename
