import {
  FunctionComponent,
  useState,
  useEffect,
  useRef
} from "react";

import { ArrowUp } from "../../../atoms/icons";

const ScrollUpButton: FunctionComponent = () => {
  const [isVisible, setIsVisible] = useState(false)

  const mainElRef = useRef(process.browser ? document.getElementById('main') : null);

  const onScroll = () => {
    if (process.browser && mainElRef.current) {
      setIsVisible(mainElRef.current.scrollTop > 200);
    }
  };

  const onClick = () => {
    if (process.browser && isVisible && mainElRef.current) {
      mainElRef.current.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  useEffect(() => {
    if (mainElRef.current) {
      mainElRef.current.addEventListener('scroll', onScroll);
    }

    return () => {
      if (mainElRef.current) {
        mainElRef.current.removeEventListener('scroll', onScroll);
      }
    }
  }, [mainElRef.current]);

  return (
    <div
      onClick={onClick}
      className={`rounded-full w-[50px] h-[50px] bg-brown-2 flex justify-center items-center mt-16 mb-8 transition-opacity ${isVisible ? 'opacity-100 cursor-pointer' : 'opacity-0 cursor-default'}`}
    >
      <ArrowUp className="text-yellow-1 fill-current" />
    </div>
  );
};


export default ScrollUpButton;