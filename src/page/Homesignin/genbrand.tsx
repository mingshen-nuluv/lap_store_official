import data from "./genbrand.json";
import "./home.scss";
function gen__head_home() {
  return (
    <>
      {data.map((item) => (
        <div className="product_noform">
          <a href={item.href}>
            <img className="product_brand1" src={item.img} alt=""></img>
          </a>
        </div>
        
      ))}
    </>
  );
}
export default gen__head_home;
