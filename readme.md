## 📦 Installing on command line (requires nodejs)

`yarn add mongoose connect-to-mongoose`

or

`npm i mongoose connect-to-mongoose`

## 👷 Usage

> Used for connecting to a mongoose application (boilerplate), if you have a .env file just add a MONGO_URI="<connectionString>" line it's not that necessary, i just hate doing the same over and over again.

> .env

```env
MONGO_URI="dsajndsajndjsa:dsajhudsajd@mongoosebkasdsakdsak.net"
```

> index.mjs (NODEJS)

```js
import dotenv from "dotenv";
dotenv.config();

import connect from "connect-to-mongoose";

const mongoose = await connect();
```

> index.mjs (bun)

```js
import connect from "connect-to-mongoose";

const mongoose = await connect();
```

> without .env variables

```js
import connect from "connect-to-mongoose";

const connectionString = "dsajndsajndjsa:dsajhudsajd@mongoosebkasdsakdsak.net";

const mongoose = await connect(connectionString);
```