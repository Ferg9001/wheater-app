import { useEffect, useRef } from 'react';

interface clickOutside {
    children: React.ReactNode,
    onClickOutside: ()=> void,
    classes?: string
}

const ClickOutside: React.FC<clickOutside> = ({children, onClickOutside, classes}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target )) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ onClickOutside ]);

  return (
    <div ref={ref} className={classes}>
        {children}
    </div> );
}

export default ClickOutside;