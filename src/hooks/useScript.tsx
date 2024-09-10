import { useEffect } from "react";

export const useScript = (url: string, onload: () => void) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.onload = onload;

    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    url,
    //  onload  /*Commented this code. It is not doing anything in terms of functionality.*/
  ]);
};
