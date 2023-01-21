import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filter/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <label className={css.filterLabel}>Find contacts by Name </label>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        placeholder="Enter Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={e => dispatch(setFilterValue(e.target.value))}
      />
    </div>
  );
};
