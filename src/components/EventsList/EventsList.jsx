import { Item } from '../Item/Item';

const EventsList = ({ events }) => {
  console.log(events);
  return (
    <ul>
      {events.map(() => (
        <Item></Item>
      ))}
    </ul>
  );
};
export { EventsList };
