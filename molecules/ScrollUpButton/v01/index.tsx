import {
  FunctionComponent,
  useState,
  useEffect
} from "react";

import { ArrowUp } from "../../../atoms/icons";

const ScrollUpButton: FunctionComponent = () => {
  const [isVisible, setIsVisible] = useState(false)

  const onScroll = () => {
    if (process.browser) {
      setIsVisible(window.scrollY > 200);
    }
  };

  const onClick = () => {
    if (process.browser && isVisible) {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

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