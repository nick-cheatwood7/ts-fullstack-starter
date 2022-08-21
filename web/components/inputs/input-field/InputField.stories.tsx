import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputField, { IInputField } from './InputField';
import { mockInputFieldProps } from './InputField.mocks';

export default {
  title: 'inputs/InputField',
  component: InputField,
  // More on argType: https://storybook.js.org/docs/react/api/argTypes
  argTypes: {},
} as ComponentMeta<typeof InputField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stores/introduction#using-args
const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockInputFieldProps.base,
} as IInputField;
