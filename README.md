# Next.js 15 Environment Variable Access Bug

This repository demonstrates a common issue encountered when working with environment variables in Next.js 15 applications.

## Problem

Accessing environment variables directly using `process.env` within pages or API routes doesn't always work as expected in Next.js 15 due to changes in how environment variables are handled.

## Solution

The provided solution shows how to correctly access environment variables by defining them in the `next.config.js` file and then using the `process.env` object in a safe way.

## Setup

1. Clone this repository.
2. Install dependencies: `npm install`
3. Add environment variables (e.g., `MY_VAR=myValue` in your `.env.local` file).
4. Run the development server: `npm run dev`
5. Visit `http://localhost:3000` and `http://localhost:3000/api/hello` to observe the results.