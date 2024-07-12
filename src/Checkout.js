
import { useProductContext } from "./context/productcontex";

const Checkout = () => {
  const { myName } = useProductContext();

  const data = { name:"ABC store"};

  return (
    <p style={{marginTop:"10%", marginLeft:"10%", marginBottom:"10%"}} >
        <h2 style={{color:"rgb(98 84 243)"}}>Order Submitted. </h2>
        <h3 style={{color:"rgb(98 84 243)"}}>Your Order number is S700124563. </h3>
        <h3 style={{color:"rgb(98 84 243)"}}>Your shopping cart number is :  3987645. </h3>
    </p>
  );
};

export default Checkout;
