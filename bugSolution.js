```javascript
// next.config.js

module.exports = {
  env: {
    MY_VAR: process.env.MY_VAR,
  },
};
```

```javascript
// pages/index.js

export default function Home({env}) {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>Environment Variable: {env.MY_VAR}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      env: context.req.headers
    },
  };
}
```

```javascript
// pages/api/hello.js

export default function handler(req, res) {
  res.status(200).json({ text: process.env.MY_VAR });
}
```