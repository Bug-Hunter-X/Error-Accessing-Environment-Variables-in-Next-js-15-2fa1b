```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a simple example.</p>
    </div>
  );
}
```
This code will throw an error if you try to use `process.env` inside a Next.js 15 app.  Next.js 15 uses a different way to handle environment variables.

```javascript
// pages/api/hello.js

export default function handler(req, res) {
  res.status(200).json({ text: process.env.MY_VAR });
}
```
This API route would also fail to read `process.env.MY_VAR` correctly unless it's set up appropriately in the `next.config.js` or the environment.