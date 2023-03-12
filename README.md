# Vod.io Next.js video on demand App

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)
![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Upstash](https://img.shields.io/badge/upstash-00c087.svg?style=for-the-badge&logo=upstash&logoColor=white)
![Sentry](https://img.shields.io/badge/sentry-blueviolet.svg?style=for-the-badge&logo=sentry&logoColor=white)

Video on demand platform created in Next.js

## Preview

<table align="center">
  <tr>
    <td align="center" width="95%" colspan="2">
      <img src="https://github.com/renatoxm/vod-next/blob/main/public/assets/preview.jpg?raw=true" alt="Preview" title="Preview">
    </td>
  </tr>
</table>

## Features

- Next.js framework
- Typescript
- Redis
- React Speech Recognition
- Github workflows
- Mobx store
- Sentry

## Development

To start the project locally, run:

```bash
pnpm dev
```

## Documentation

### Requirements

- Node.js >= 12.22.0
- pnpm 7

### Directory Structure

- [`.github`](.github) — GitHub configuration including the CI workflow.
- [`.husky`](.husky) — Husky configuration and hooks.
- [`public`](./public) — Static assets such as robots.txt, images, and favicon.
- [`src`](./src) — Application source code, including pages, components, styles.

### Scripts

- `pnpm dev` — Starts the application in development mode at `http://localhost:3000`.
- `pnpm build` — Creates an optimized production build of your application.
- `pnpm start` — Starts the application in production mode.
- `pnpm type-check` — Validate code using TypeScript compiler.
- `pnpm lint` — Runs ESLint for all files in the `src` directory.
- `pnpm format` — Runs Prettier for all files in the `src` directory.

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import { Button } from '@/components/Button';
// To import images or other files from the public folder
import avatar from '@/public/avatar.png';
```

### Switch to Yarn/npm

This starter uses pnpm by default, but this choice is yours. If you'd like to switch to Yarn/npm, delete the `pnpm-lock.yaml` file, install the dependencies with Yarn/npm, change the CI workflow, and Husky Git hooks to use Yarn/npm commands.

Open `http://localhost:3000` with your browser to see the result.

## License & disclaimer

This project is licensed under the MIT license. For more information, see the [LICENSE](LICENSE.md) file.

It was created for feature presentation and case study only, it is not intended for commercial use.

YouTube is a trademark of GOOGLE Inc.

All images and videos displayed were pulled from YouTube's API and [Pexels](https://www.pexels.com/) respecting their licenses.
