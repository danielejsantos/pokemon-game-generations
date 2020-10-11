# Pokémon Game Generations

All the instructions, architecture and decisions about the project can be found below.

## Language and Framework

Following the challenge recommendation, it was used JavaScript and its framework, React.

## Dependencies

- **TypeScript**: it types the code at runtime
- **Styled Components**: it optimizes the styling experience for React components.
- **Axios**: used to access APIs, it gives you the ability to take advantage of JavaScript's _async_ and _await_ for more readable asynchronous code.

## Architecture

This project architecture was created in order to support its growth and keep it organized.

**Project Tree**

```
├── public
│  ├── favicon.ico
│  ├── index.html
│  ├── manifest.json
│  └── robots.txt
├── src
│  ├── assets
│  │  └── images
│  │  │  ├── generation-eight.jpg
│  │  │  ├── generation-five.jpg
│  │  │  ├── generation-four.jpg
│  │  │  ├── generation-one.jpg
│  │  │  ├── generation-seven.png
│  │  │  ├── generation-six.png
│  │  │  ├── generation-three.jpg
│  │  │  ├── generation-two.png
│  │  │  ├── index.ts
│  │  │  ├── logo.png
│  │  │  ├── pokeball.png
│  │  │  └── pokedex.png
│  ├── components
│  │  ├── BackButton
│  │  │  ├── index.tsx
│  │  │  └── styles.ts
│  │  ├── Footer
│  │  │  ├── index.tsx
│  │  │  └── styles.ts
│  │  ├── Header
│  │  │  ├── index.tsx
│  │  │  └── styles.ts
│  │  ├── Layout
│  │  │  ├── index.tsx
│  │  │  └── styles.ts
│  │  ├── List
│  │  │  ├── index.tsx
│  │  │  └── styles.ts
│  │  ├── Main
│  │  │  ├── index.tsx
│  │  │  └── styles.ts
│  │  └── Pokemon
│  │  │  ├── index.tsx
│  │  │  └── styles.ts
│  ├── helpers
│  │  └── index.ts
│  ├── services
│  │  └── api.ts
│  ├── styles
│  │  └── GlobalStyles.ts
│  ├── App.tsx
│  ├── index.tsx
│  ├── react-app-env.d.ts
│  └── types.d.ts
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── yarn.lock
```

The simplified version of the project tree is described below:

- **components**: react components used inside the pages and that can be reusable
- **helpers**: utility functions
- **services**: API request
- **styles**: global styles to be used in the entire application

The project is visually structured by Layout component state.

The state is controlled by _React Hooks_.

## Settings

You must have Git installed in your machine to download the following GitHub repository:

- https://github.com/danielejsantos/pokemon-game-generations

Or you can download it by following the command:

`git clone https://github.com/danielejsantos/pokemon-game-generations.git`

Then, you must install its dependencies. At the root, run the command:

```
# with yarn:
yarn install
# with npm:
npm install
```

## How to run

Navigate to the root folder and run the following command:

```
# with yarn:
yarn start
# with npm:
npm start
```
