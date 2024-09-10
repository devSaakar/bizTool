import { useScript } from "@/hooks/useScript";
import { useRef } from "react";

const GoogleLogin = ({ onSuccess, onError }) => {
  /**
   * https://github.com/anthonyjgrove/react-google-login/issues/502#issuecomment-1113081909
   */
  const googleSignInButton = useRef(null);
  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: onSuccess,
      onError: onError,
    });
    window.google.accounts.id.renderButton(
      googleSignInButton.current,
      { theme: "outline", size: "large" } // customization attributes
    );
  });

  return (
    <div style={{ width: "200px", height: "44px" }} ref={googleSignInButton} />
  );
};

export default GoogleLogin;
