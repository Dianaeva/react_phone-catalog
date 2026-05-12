import { useScreen } from 'usehooks-ts';

import { BREAKPOINTS } from '../config/breakpoints';

const useBreakpoints = () => {
  const screen = useScreen();

  return {
    isMobile: screen.width < BREAKPOINTS.tablet,
    isTablet: screen.width >= BREAKPOINTS.tablet,
    isDesktop: screen.width >= BREAKPOINTS.desktop,
  };
};

export default useBreakpoints;
