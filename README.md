This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Integration Process: React with Firestore

## Setting Up Firebase Configuration
- Created a `firebaseConfig.js` file to initialize and export the Firebase app instance.
- This configuration is essential for establishing a connection with the Firestore database.

## Fetching Data
- Utilized the `useEffect` hook in the `DataDisplay` component to fetch data from the Firestore collection named "message".
- Used the `getDocs` function from Firestore to retrieve documents from the collection asynchronously.
- Iterated over the `querySnapshot` using `forEach` and built an array of objects containing document IDs and data.
- Set the state variable `data` using `setData` to trigger a re-render with the fetched data.

## Displaying Data
- Mapped over the `data` array in JSX and rendered each item as a list item (`<li>`).
- Within each list item, displayed the `name` and `message` properties of the data.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
