import {
  FunctionComponent,
  useState,
  useEffect,
  useRef,
  Dispatch
} from "react";
import {
    Button
} from '../../../typography';
import {
  ArrowDown,
  ArrowUp,
} from '../../../atoms/icons';



interface OptionProps {
  id: number | string,
  value: string,
}

interface SelectProps {
  state: [string | number, Dispatch<string | number>],
  label: string,
  options: OptionProps[],
}

const Select: FunctionComponent<SelectProps> = ({
  label,
  state: [value, setValue],
  options = [],
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const optionsRootRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);


  const handleChange = (id: number | string) => () => {
    setValue(id);
    setOpen(false);
  };

  const handleClick = (event: MouseEvent) => {
    const targetNode = event.target as Node;

    if (!rootRef.current.contains(targetNode)) {
      setOpen(false)
      return;
    } 

    if (!targetNode.isEqualNode(optionsRootRef.current) && !optionsRootRef.current.contains(targetNode)) {
      setOpen(prev => !prev);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative cursor-pointer py-4 px-6 rounded-full border border-yellow-1" style={{userSelect: 'none'}}>
      <div className="w-full flex justify-between items-center">
        <Button 
          type={3} 
          color="brown-2"
          className="mr-8"
        >
          {
            options.find(({id}) => id === value)?.value || label
          }
        </Button>
        {
          open ? (
            <ArrowUp className="text-yellow-6 fill-current" />
          ) : (
            <ArrowDown className="text-yellow-6 fill-current" />
          )
        }
      </div>
      <div 
        ref={optionsRootRef} 
        className={`rounded-2xl absolute py-4 px-6 translate-y-full bottom-0 left-0 right-0 border border-yellow-1 bg-white ${open ? 'block' : 'hidden'}`}
      >
        {
          [{id: undefined, value: label}].concat(options).filter(({id}) => id !== value).map(({id, value}) => (
            <div 
              key={id} 
              className="mb-2 border-b border-gray-3 p-1 last-of-type:border-none last-of-type:m-0 flex items-center"
              onClick={handleChange(id)}
            >
              {value}
            </div>
          ))
        }
      </div>
    </div>
  );
};


export default Select;