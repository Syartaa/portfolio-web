type SectionTitleProps = {children: React.ReactNode};

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="text-center text-3xl font-medium capitalize mb-8">
      {children}
    </h2>
  );
}

export default SectionTitle;