export const ThElement = ({ children, onSort, filter }) => (
  <th onClick={() => onSort(filter)}>{children}</th>
);
