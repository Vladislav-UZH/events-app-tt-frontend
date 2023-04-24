import { Button } from 'components/Button/Button';
import { EventsForm } from 'components/EventsForm/EventsForm';
import { EventsList } from 'components/EventsList/EventsList';
import Filter from 'components/Filter';
import { Container } from 'components/ListStyles/ListStyles.styled';
import { Modal } from 'components/Modal/Modal';
import { createEvent, deleteEvent, getAllEvents } from 'helpers/fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Events = ({ title }) => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [filterOption, setFilterOption] = useState('firstName');
  const [filterValue, setFilterValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const listKeys = ['Title', 'Description', 'Start Date', 'End Date', 'Delete'];
  const EVENTS_OPTIONS = ['title', 'description', 'startDate', 'endDate'];
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const resp = await getAllEvents(id, page);
        if (page > 1 && !resp.data.data.length) {
          setPage(1);
          alert('Sorry, there are no more events');
          return;
        }
        page > 1
          ? setEvents(prev => [...prev, ...resp.data.data])
          : setEvents(resp.data.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [page, id]);
  // modal options
  const handleToggleModal = () => setIsModalOpen(prev => !prev);
  // pagination
  const loadMore = async () => {
    setPage(prev => (prev += 1));
  };
  // Events ADD / DELETE
  const handleCreate = async body => {
    const resp = await createEvent(id, body);

    if (!resp) {
      alert(
        'Failed, maybe you entered wrong dates or the start date is already taken !'
      );
      return;
    }
    setEvents(prev => [...prev, resp.data.data]);
    alert('Created!');
    handleToggleModal();
  };

  const handleDelete = async id => {
    const resp = await deleteEvent(id);
    if (resp.data.status !== 'success') {
      alert('failed to delete, pls try again');
      return;
    }
    const updatedCollection = events.filter(({ _id }) => id !== _id);
    setEvents(updatedCollection);
  };
  // ---------------------
  // filter func
  const handleChangeFilterOption = e => {
    const option = e.target.value;
    setFilterOption(option);
  };
  const handleChangeFilterValue = e => {
    const value = e.target.value;
    setFilterValue(value);
  };
  const getFilteredItems = () => {
    const normalizedValue = filterValue.toLowerCase();
    if (!filterOption) {
      return events;
    }
    return events.filter(key =>
      String(key[filterOption]).toLowerCase().includes(normalizedValue)
    );
  };
  return (
    <>
      <Container>
        <h2>{title}</h2>
        <Button title="Add" onClick={handleToggleModal} />
        <Filter
          currentOptions={EVENTS_OPTIONS}
          handleChangeFilterOption={handleChangeFilterOption}
          handleChangeFilterValue={handleChangeFilterValue}
        />
        <Button title="Load More" onClick={loadMore} />
      </Container>
      {isModalOpen && (
        <Modal onClose={handleToggleModal}>
          {<EventsForm handleCreate={handleCreate} />}
        </Modal>
      )}
      <EventsList
        keys={listKeys}
        loadMore={loadMore}
        events={getFilteredItems()}
        handleDelete={handleDelete}
      />
    </>
  );
};

export { Events };
