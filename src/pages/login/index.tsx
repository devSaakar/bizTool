import { AuthPage } from "@refinedev/antd";
import { authCredentials } from "../../providers";
import GoogleLogin from "@/components/GoogleLogin";
import { useLogin } from "@refinedev/core";
import { fetchWrapper } from "@/providers/data-nest/fetch-wrapper";

export const Login = () => {
  const { mutate: login } = useLogin();

  const onSuccess = async (response: any) => {
    console.log("response", response);
    const socialReqObj = {
      tokenId: response.credential,
      method: "GOOGLE",
    };

    const socialResponse = await fetchWrapper(
      `${import.meta.env.VITE_PROXY_2}/v1/client/login/social`,
      {
        method: "POST",
        body: JSON.stringify(socialReqObj),
      }
    );

    console.log("socialResponse", socialResponse);
    // You will receive the token ID and use it to authenticate with your backend
    // login({ credential: credentialResponse.credential });
  };

  const onFailure = (res: any) => {
    // Here you will send the form values to your backend
    console.log("Login Falied res", res);
  };

  return (
    <AuthPage
      type="login"
      renderContent={(content) => (
        <>
          {/* <GoogleLogin
            clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          /> */}
          <div style={{ display: "flex" }}>
            <GoogleLogin onSuccess={onSuccess} onError={onFailure} />
          </div>
          {content}
        </>
      )}
      formProps={{
        initialValues: authCredentials,
      }}
    />
  );
};
