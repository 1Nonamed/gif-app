export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <video autoPlay loop muted src={url} />
      <p>{title}</p>
    </div>
  );
};
