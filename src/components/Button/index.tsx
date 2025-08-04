import * as S from "./styles";

type Props = {
  type: "button" | "product-link" | "submit" | "link";
  title: string;
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === "submit" || type === "button") {
    return (
      <S.ButtonContainer type={type} title={title} onClick={onClick}>
        {children}
      </S.ButtonContainer>
    );
  }

  if (type === "product-link") {
    return (
      <S.ButtonProductLink as="button" title={title} onClick={onClick}>
        {children}
      </S.ButtonProductLink>
    );
  }

  return (
    <S.ButtonLink to={to as string} title={title}>
      {children}
    </S.ButtonLink>
  );
};

export default Button;
