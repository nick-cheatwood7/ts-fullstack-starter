import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputGroup, { IInputGroup } from './InputGroup';
import { mockInputGroupProps } from './InputGroup.mocks';

export default {
  title: 'inputs/InputGroup',
  component: InputGroup,
  // More on argType: https://storybook.js.org/docs/react/api/argTypes
  argTypes: {},
} as ComponentMeta<typeof InputGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stores/introduction#using-args
const Template: ComponentStory<typeof InputGroup> = (args) => (
  <InputGroup {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockInputGroupProps.base,
} as IInputGroup;
