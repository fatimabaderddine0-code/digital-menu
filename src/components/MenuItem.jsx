function MenuItem({name,image,description,price}) {
  return (
    <div className="card h-100">
      <img
        src={image}
        className="card-img-top"
        alt={name}
      />

      <div className="card-body">
        <h5 className="card-title">
          {name}
        </h5>

        <p className="card-text">
          {description}
        </p>

        <p className="fw-bold">
          {price}$
        </p>
      </div>
    </div>
  );
}

export default MenuItem;