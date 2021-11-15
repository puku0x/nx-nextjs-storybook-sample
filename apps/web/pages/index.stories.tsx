import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Index } from './index';

export default {
  component: Index,
  title: 'Index',
  decorators: [
    (Story) => (
      <div className="app">
        <header className="flex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/nx-logo-white.svg" alt="Nx logo" width="75" height="50" />
          <h1>Welcome to web!</h1>
        </header>
        <main>
          <Story />
        </main>
      </div>
    ),
  ],
} as ComponentMeta<typeof Index>;

export const Default: ComponentStory<typeof Index> = () => {
  return <Index />;
};
