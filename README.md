# js-response

[![npm version](https://badge.fury.io/js/js-response.svg)](https://badge.fury.io/js/js-response)

## Success Response

```
import {successResponse} from 'js-response';

...
const data = 'Hello, World!';
const meta = {}; // optional

const response = successResponse(data, meta);
console.log(response)
```

### Output

```
{
  success: true,
  data: 'Hello, World!',
  meta: {},
}
```

---

## Error Response

```
import {errorResponse} from 'js-response';

...
const errorCode = 'E100';
const errorMessage = 'Error occur...';

const response = errorResponse(errorCode, errorMessage);
console.log(response)
```

### Output

```
{
  success: false,
  error: {
    code: 'E100',
    message: 'Error occur...'
  },
}
```
