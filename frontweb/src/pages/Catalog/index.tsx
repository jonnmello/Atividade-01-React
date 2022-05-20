import ButtomSearch from 'components/ButtomSearch';
import ProductCard from 'components/ProductCard';
import './styles.css';

const Catalog = () => {
  return (

    <div className="catalog-container">
    <div>
      <div className="base-base2 catalog-content">
        <ButtomSearch/>
        
      </div>

      <div className="container my-4">
        <div className="row">
          <div className="col-sm-6 col-lg-4">
          <ProductCard/>
          </div>
          <div className="col-sm-6 col-lg-4">
          <ProductCard/>
          </div>
          <div className="col-sm-6 col-lg-4">
          <ProductCard/>
          </div>
          <div className="col-sm-6 col-lg-4">
          <ProductCard/>
          </div>
          <div className="col-sm-6 col-lg-4">
          <ProductCard/>
          </div>
          <div className="col-sm-6 col-lg-4">
          <ProductCard/>
          </div>
        </div>
        </div>
      </div>
      </div>
    
  );
};

export default Catalog;
