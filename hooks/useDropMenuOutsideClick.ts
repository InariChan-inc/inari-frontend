import { RefObject, useState } from "react";


type IOutsideClickHook = (rootRef: RefObject<HTMLElement>, menuRootRef: RefObject<HTMLElement>) => [(event: MouseEvent) => void, boolean];

const useDropMenuOutsideClick: IOutsideClickHook = (rootRef, menuRootRef) => {
  const [open, setOpen] = useState(false);

  return [
    (event: MouseEvent) => {
      const targetNode = event.target as Node;

      if (rootRef && rootRef.current && !rootRef.current.contains(targetNode)) {
        setOpen(false)
        return;
      }

      if (menuRootRef && menuRootRef.current && !targetNode.isEqualNode(menuRootRef.current) && !menuRootRef.current.contains(targetNode)) {
        setOpen(prev => !prev);
      }
    },
    open
  ];
};


export default useDropMenuOutsideClick;