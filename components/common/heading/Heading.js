const Heading = ({ title, label, description, variant }) => {
  const classNames = `heading--${variant}`;
  return (
    <div className={`heading ${classNames}`}>
      {label && <p className="heading__label">{label}</p>}
      <h2 className="heading__title">{title}</h2>
      {description && <p className="heading__description">{description}</p>}
    </div>
  );
};

export default Heading;
