import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ChevronDown } from 'react-feather';

const AccordianContext = createContext();

export default function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

export function AccordianItem({ children, value, trigger, method, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext);

  const open = selected === value;
  const ref = useRef(null);

  let color =
    method === 'get'
      ? '#4d4dff'
      : method === 'post'
      ? '#228b22'
      : method === 'put'
      ? '#e1e11e'
      : method === 'delete'
      ? '#df202f'
      : '#cc9900';

  return (
    <li className='border-b bg-deep' {...props}>
      <header
        role='button'
        onClick={() => setSelected(open ? null : value)}
        className='flex justify-between items-center flex-wrap flex-grow p-4 font-medium'
        style={{ flexShrink: 0, overflow: 'hidden', whiteSpace: 'nowrap' }}
      >
        <div className='flex items-center'>
          <span
            style={{ backgroundColor: color }}
            className={`text-sm font-bold uppercase px-2 py-1 rounded-md mr-2`}
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
        className='overflow-y-hidden transition-all'
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className='pt-2 p-4' ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
