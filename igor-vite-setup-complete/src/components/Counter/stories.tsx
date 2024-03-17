// https://storybook.js.org/docs/get-started/whats-a-story
import { Meta, StoryFn, StoryObj } from '@storybook/react'

import { Counter } from '.'

const meta: Meta<typeof Counter> = {
  title: 'Counter',
  component: Counter
}

export default meta

type Story = StoryObj<typeof Counter>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button'
  }
}

// O StoryFn é uma função que retorna um componente
export const Default: StoryFn = () => <Counter />

/*

import { Story, Meta } from '@storybook/react'

import { Counter } from '.'

export default {
  title: 'Counter',
  component: Counter
} as Meta

export const Defult: Story = (args) => <Counter {...args} />

*/
