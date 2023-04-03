import { useState, useEffect } from 'react';
import { Widths } from 'constants/Widths';

const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const mobileWidthThreshold = +Widths.MOBILE.replace('px', '');
      const isMobileDevice = window.innerWidth <= mobileWidthThreshold;
      setIsMobile(isMobileDevice);
    };

    checkDevice(); // Initial check
    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return { isMobile };
};

export default useDeviceDetect;
