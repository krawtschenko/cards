import type { Preview } from '@storybook/react'
import '../src/styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import { MemoryRouter } from 'react-router-dom'
import { themes } from '@storybook/theming'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#000000',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
}

export const decorators = [
  (Story: any) => {
    return (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  },
]

export default preview
