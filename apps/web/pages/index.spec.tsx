import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as stories from './index.stories';

describe('Index', () => {
  const { Default } = composeStories(stories);

  it('should render', async () => {
    const { asFragment } = render(<Default />);

    expect(asFragment()).toMatchSnapshot();
  });
});
