import {
  FunctionComponent,
  useState,
  useEffect,
  useRef
} from "react";

import { ArrowUp } from "@atoms/icons";
import { CircleButton } from "./styles";

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
    <CircleButton
      onClick={onClick}
      isVisible={isVisible}
    >
      <ArrowUp color="yellow-1" />
    </CircleButton>
  );
};


export default ScrollUpButton;