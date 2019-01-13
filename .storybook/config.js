import { configure, setAddon, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

addDecorator(
  withOptions({
    name: 'React Library Starter',
    url: 'https://uikit.commercetools.com',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: true,
    sortStoriesByKind: false,
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/,

    resolveStoryHierarchy: storyName => storyName.split('/'),
  })
);

const srcStories = require.context('../src', true, /\.story\.js$/);

function loadStories() {
  srcStories.keys().forEach(filename => srcStories(filename));
}

configure(loadStories, module);
