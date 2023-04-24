const Filter = ({
  currentOptions,
  handleChangeFilterOption,
  handleChangeFilterValue,
}) => {
  return (
    <div>
      <input
        name="filter"
        placeholder="Enter to search"
        onChange={handleChangeFilterValue}
      />
      <select
        as="select"
        onChange={handleChangeFilterOption}
        defaultValue={currentOptions[0]}
        name="filterOption"
      >
        {currentOptions.map(opt => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {/*       
         <InputonChange={e => (e)}
         value={value}
        type="text"
        name="filter"
      /> */}
    </div>
  );
};

export default Filter;
