# nx-nextjs-storybook-sample

This project was generated using [Nx](https://nx.dev).

## Development server

```
npm start
```

Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Storybook

```
npx nx run web:storybook
```

Navigate to http://localhost:4400/. The stories will automatically reload if you change any of the source files.

## Build

```
npx nx build web
```

The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

```
npx nx test web
```

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

```
npx nx e2e web-e2e
```

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
