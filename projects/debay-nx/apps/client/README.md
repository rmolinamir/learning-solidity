
# nft-marketplace-starter-kit

Please run npm install on the terminal to download the appropriate packages already defined to the package.json file.
Make sure you are in the source file.

**Please ensure you have downloaded the following additionally**.

1. Local Ethereum Network
2. Metamask.io (hooked up on the browser)

**To run the development server on a local host scripts:** npm run start

For truffle tests and console please consult the official Truffle documentaion for updates.

## First Time Local Installation

1. Run `npm ci` (or `npm install` if you want to ignore `package-lock.json`).
2. Compile the `contracts` package`.
   - **Make sure that your Ethereum Local Network is running in the background**.
3. [Follow the TailwindCSS installation steps](https://tailwindcss.com/docs/guides/nextjs).

## TODOs

- Rename `web3` references to `ethereum` or `ether` since `web3.js` will be replaced. Or, keep `web3` as a reference to Web 3.0, the third version of the Internet.

---

## Next.js

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
