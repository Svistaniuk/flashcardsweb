import React from 'react';
import FlipCard from './FlipCard';

export default {
  title: 'Components/FlipCard',
  component: FlipCard,
};

const Template = (args) => <FlipCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  question: 'What is the capital of France?',
  answer: 'Paris',
};

export const LongText = Template.bind({});
LongText.args = {
  question: 'Explain the theory of relativity in simple terms.',
  answer: 'It’s about how time and space are linked for objects moving at a consistent speed in a straight line.',
};

export const ShortText = Template.bind({});
ShortText.args = {
  question: '2+2?',
  answer: '4',
};
