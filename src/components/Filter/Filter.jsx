import { Input } from './Filter.styled';

const Filter = ({ filterOptions }) => {
  return (
    <div>
      <Input
        // onChange={e => (e)}
        // value={value}
        type="text"
        name="filter"
        placeholder="Enter a name to search"
      />
      <select name="" id="">
        filterOptions
        {filterOptions.map(({ _id }) => (
          <option key={_id}></option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
