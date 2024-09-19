import { AuthPage } from "@refinedev/antd";
import { authCredentials } from "../../providers";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      renderContent={(content) => <>{content}</>}
      formProps={{
        initialValues: authCredentials,
      }}
    />
  );
};
