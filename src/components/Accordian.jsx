/* eslint-disable react/forbid-prop-types */
import React, {
  createContext,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ChevronDown } from 'react-feather';
import PropTypes from 'prop-types';

const AccordianContext = createContext();

const Accordian = ({
  children, props,
}) => {
  const [selected, setSelected] = useState(null);

  const contextValue = useMemo(() => ({ selected, setSelected }), [selected, setSelected]);

  return (
    <ul className={props}>
      <AccordianContext.Provider value={contextValue}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
};
export default Accordian;

Accordian.propTypes = {
  children: PropTypes.node.isRequired,
  props: PropTypes.object.isRequired,
};

export const AccordianItem = ({
  children, value, trigger, method,
}) => {
  const { selected, setSelected } = useContext(AccordianContext);

  const open = selected === value;
  const ref = useRef(null);

  let color;
  switch (method) {
    case 'get':
      color = '#4d4dff';
      break;
    case 'post':
      color = '#228b22';
      break;
    case 'put':
      color = '#e1e11e';
      break;
    case 'delete':
      color = '#df202f';
      break;
    default:
      color = '#cc9900';
  }

  const handleHeaderClick = () => {
    setSelected(open ? null : value);
  };

  const handleHeaderKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setSelected(open ? null : value);
    }
  };

  return (
    <li className="border-b bg-deep">
      <header
        role="button"
        onClick={handleHeaderClick}
        onKeyDown={handleHeaderKeyDown}
        className="flex justify-between items-center flex-wrap flex-grow p-4 font-medium"
        style={{ flexShrink: 0, overflow: 'hidden', whiteSpace: 'nowrap' }}
        tabIndex={0}
      >
        <div className="flex items-center">
          <span
            style={{ backgroundColor: color }}
            className="text-sm font-bold uppercase px-2 py-1 rounded-md mr-2"
          >
            {method}
          </span>

          {trigger}
        </div>
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-2 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
};

AccordianItem.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  trigger: PropTypes.node.isRequired,
  method: PropTypes.string.isRequired,
};
