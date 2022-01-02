import React from 'react';
import AddEvents from './AddEvents';
export const Data = () => {
  let inittodos = [
    {
      id: 1,
      title: 'Visit doctors',
      subTitle: 'Remember to bring your documents',
      time: '2022-01-01',
      completed: false,
    },
    {
      id: 2,
      title: 'Visit doctors lol',
      subTitle: 'Remember to bring your documents',
      time: '2022-01-01',
      completed: false,
    },
    {
      id: 3,
      title: 'Visit doctors lol5',
      subTitle: 'Remember to bring your documents',
      time: '2022-01-01',
      completed: false,
    },
    {
      id: 4,
      title: 'Visit doctors lol6',
      subTitle: 'Remember to bring your documents',
      time: '2022-01-02',
      completed: false,
    },
  ];
  const [todos, setTodos] = React.useState(inittodos);
  return {
    todos,
    setTodos,
    AddEvents,
  };
};
