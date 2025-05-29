import React from 'react';
import CardForm from './CardForm';

export default {
  title: 'Components/CardForm',
  component: CardForm,
};

const Template = (args) => <CardForm {...args} />;

export const EmptyForm = Template.bind({});
EmptyForm.args = {
  addCard: (card) => console.log('Added card:', card),
};

export const PreFilledForm = Template.bind({});
PreFilledForm.args = {
  addCard: (card) => console.log('Added card:', card),
};
