import { AuthorsForm } from 'components/AuthorsForm/AuthorsForm';
import { Button } from 'components/Button/Button';
import Filter from 'components/Filter';
import { Modal } from 'components/Modal/Modal';
import { Container } from 'components/ListStyles/ListStyles.styled';
import { createAuthor, deleteAuthor, getAllAuthors } from 'helpers/fetchApi';
import { useEffect, useState } from 'react';
import { AuthorsList } from 'components/AuthorsList/AuthorsList';

const Authors = ({ title }) => {
  const [authors, setAuthors] = useState([]);
  const [page, setPage] = useState(1);
  const [filterOption, setFilterOption] = useState('firstName');
  const [filterValue, setFilterValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const listKeys = [
    'Username',
    'Email',
    'Phone',
    'Total events',
    'Next event date',
    'Delete',
  ];
  const AUTHORS_OPTIONS = [
    'firstName',
    'lastName',
    'email',
    'phoneNumber',
    'totalEvents',
    'nextEventStartDate',
  ];
  useEffect(() => {
    (async () => {
      try {
        const resp = await getAllAuthors(page);
        if (page > 1 && !resp.data.data.length) {
          alert('Sorry, there are no more authors');
          return;
        }
        page > 1
          ? setAuthors(prev => [...prev, ...resp.data.data])
          : setAuthors(resp.data.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [page]);
  // modal options
  const handleToggleModal = () => setIsModalOpen(prev => !prev);
  // pagination
  const loadMore = async () => {
    setPage(prev => (prev += 1));
  };
  // ---------------------

  // authors ADD / DELETE
  const handleCreate = async body => {
    const resp = await createAuthor(body);
    console.log(resp);
    setAuthors(prev => [...prev, resp.data.data]);
  };

  const handleDelete = async id => {
    const resp = await deleteAuthor(id);
    if (resp.data.status !== 'success') {
      alert('failed to delete, pls try again');
      return;
    }
    const updatedCollection = authors.filter(({ _id }) => id !== _id);
    setAuthors(updatedCollection);
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
      return authors;
    }
    return authors.filter(key =>
      String(key[filterOption]).toLowerCase().includes(normalizedValue)
    );
  };

  return (
    <>
      <Container>
        <h2>{title}</h2>
        <Button title="Add" onClick={handleToggleModal} />
        <Filter
          currentOptions={AUTHORS_OPTIONS}
          handleChangeFilterOption={handleChangeFilterOption}
          handleChangeFilterValue={handleChangeFilterValue}
        />
        <Button title="Load More" onClick={loadMore} />
      </Container>
      {isModalOpen && (
        <Modal onClose={handleToggleModal}>
          {<AuthorsForm handleCreate={handleCreate} />}
        </Modal>
      )}
      <AuthorsList
        keys={listKeys}
        loadMore={loadMore}
        authors={getFilteredItems()}
        handleDelete={handleDelete}
      />
    </>
  );
};
export { Authors };
