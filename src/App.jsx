
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPalPayment from "./components/PayPalPayment";

function App() {

  // const createOrder = (data, actions) => {
  //   return actions.order.create({
  //     purchase_units: [
  //       {
  //         amount: {
  //           value: "0.01",
  //           currency:"BRL"
  //         },
  //       },
  //     ],
  //   });
  // }

  // const onApprove = (data, actions) => {
  //   console.log(data)
  //   return actions.order.capture();
  // }
  const initialOptions = {
    clientId: "AUvlGvOeFmqLiwnGmHWxwz6Be-Q8_nKizuEXU7a01miTo1_3AruxP45BHI90YLAPUzaTKsvh87kKRRpv",
    currency: "USD",
    intent: "Capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="app">
        <div className="wrapper">
          <PayPalPayment/>
        </div>
      </div> 
    </PayPalScriptProvider>
  )
}

export default App
