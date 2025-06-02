import classNames from "classnames";

type Props = React.ComponentProps<"div">;

export default function FlexBox({ className, children, ...props }: Props) {
  return (
    <div className={classNames("flexBox", className)} {...props}>
      {children}
    </div>
  );
}
