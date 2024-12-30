interface FooterPropType {
  children: React.ReactNode;
}

function Footer({ children }: FooterPropType) {
  return <footer>{children}</footer>;
}

export default Footer;
