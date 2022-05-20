import './styles.css';
import ProductImg from 'assets/images/product.svg';

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="Nome do Produto" />
      </div>

      <div className="card-mid-container">
        <div>
          <h6>Audi Supra TT</h6>
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
        </div>
      </div>

      <div className="card-bottom-container">
        <button>COMPRAR</button>
      </div>
    </div>
  );
};

export default ProductCard;

