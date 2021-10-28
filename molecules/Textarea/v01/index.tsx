import {
  VoidFunctionComponent,
  useState,
  useEffect,
  useRef,
} from "react";
import { Body } from "@typography";
import {
  VisibleDragger,
  StyledTextarea,
  TextareaContainer,
  WordCount,
} from './styles';

interface TextareaProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  limit?: number;
}

const Textarea: VoidFunctionComponent<TextareaProps> = ({
  placeholder,
  value,
  onChange,
  limit,
}) => {
  const [selfValue, setSelfValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);

  const initResize = (event: MouseEvent) => {
      event.preventDefault();
      window.addEventListener('mousemove', resize);
      window.addEventListener('mouseup', stopResize);
    }

  const stopResize = () => {
    document.body.style.cursor = '';
    window.removeEventListener('mousemove', resize, false);
  }

  const resize = (event: MouseEvent) => {
    document.body.style.cursor = 'ns-resize';
    if (textareaRef.current) {
      textareaRef.current.style.height = event.clientY - textareaRef.current.getBoundingClientRect().top + 'px';
    }
  }
  
  useEffect(() => {
    dragRef.current?.addEventListener('mousedown', initResize, false);

    return () => {
      dragRef.current?.removeEventListener('mousedown', initResize, false);
    }
  }, [])

  useEffect(() => {
    setSelfValue(value || '');
  }, [value]);

  const setValue = (v: string) => {
    if (onChange) {
      onChange(v);
    } else {
      setSelfValue(v);
    }
  }

  return (
    <TextareaContainer>
      {
        limit !== undefined ? (
          <WordCount>
            <Body type={4}>{selfValue.length}/{limit}</Body>
            <Body type={3}>&nbsp;символів</Body>
          </WordCount>
        ) : null
      }
      <StyledTextarea
        ref={textareaRef}
        rows={selfValue ? selfValue.split('\n').length : 1}
        placeholder={placeholder}
        value={selfValue}
        onChange={(event) => {
          if (limit !== undefined) {
              setValue(event.target.value.slice(0,limit));
          } else {
            setValue(event.target.value);
          }
        }}
      />
      <VisibleDragger ref={dragRef} />
    </TextareaContainer>
  );
};


export default Textarea;
