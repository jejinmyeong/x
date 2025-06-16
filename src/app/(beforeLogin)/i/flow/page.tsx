import Main from "../../_component/main/Main";
import ResponsiveView from "../../_component/ResponsiveView";
import SignUpPage from "../../_component/signup/SignUpPage";

export default function page() {
  return (
    <ResponsiveView responsiveChildren={<Main />}>
      <SignUpPage />
    </ResponsiveView>
  );
}
