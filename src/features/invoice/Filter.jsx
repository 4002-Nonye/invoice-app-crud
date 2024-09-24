import { createContext, useContext, useState } from 'react';

import Button from '../../ui/Button';

const FilterContext = createContext();

const Filter = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>  {
    setIsOpen((open) => !open)
    console.log(isOpen)
  
  };

  return (
    <FilterContext.Provider value={{ toggle,isOpen }}>
      {children}
    </FilterContext.Provider>
  );
};

const Toggle = ({ icon }) => {
  const { toggle } = useContext(FilterContext);
  return (
    <Button onClick={()=>toggle()}>
      <img src={icon} alt="" />
    </Button>
  );
};

const Open = ({options}) => {
  const { isOpen } = useContext(FilterContext);
  console.log(isOpen)
  return isOpen ? <div>{options}</div> : null;
 
};
Filter.Toggle = Toggle;
Filter.Open = Open;
export default Filter;
