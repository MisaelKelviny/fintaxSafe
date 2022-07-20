import { createContext } from "react";

interface ScrollProp {
  scrollTo: (id: string) => void
}

const ScrollContext = createContext<ScrollProp>({ scrollTo: () => {} })

export function ScrollProvider(props: any) {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView();
  }

  return (
    <ScrollContext.Provider value={{ scrollTo }}>
      {props.children}
    </ScrollContext.Provider>
  )
}

export default ScrollContext