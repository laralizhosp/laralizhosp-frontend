import { HelperLabel } from "./styles";

export type HelperLabelComponentProps = {
  children: React.ReactNode;
  onclick: () => void;
};
export default function HelperLabelComponent({
  onclick,
  children,
}: HelperLabelComponentProps) {
  return <HelperLabel onClick={onclick}>{children}</HelperLabel>;
}
