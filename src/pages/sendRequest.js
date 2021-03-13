import { useAuth0 } from "@auth0/auth0-react";
import { useApi } from "../hooks/useApi";

const SendRequest = () => {
  const domain = "https://booklist/api";
  const opts = {
    audience: domain,
    scope: "read:current_user",
  };
  const { login, getAccessTokenWithPopup } = useAuth0();
  const { loading, error, refresh, data: users } = useApi(
    "utahfcc.us.auth0.com",
    opts
  );
  const getTokenAndTryAgain = async () => {
    await getAccessTokenWithPopup(opts);
    refresh();
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    if (error.error === "login_required") {
      return <button onClick={() => login(opts)}>Login</button>;
    }
    if (error.error === "consent_required") {
      return (
        <button onClick={getTokenAndTryAgain}>Consent to creating lists</button>
      );
    }
    return <div>Oops {error.message}</div>;
  }
  return (
    <ul>
      {users.map((user, index) => {
        return <li key={index}>{user}</li>;
      })}
    </ul>
  );
};

export default SendRequest;
