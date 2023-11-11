import { useState } from "react"
import "./CustomerForm.css"

const CustomerForm = ({addNewCustomer}) => {
  const [customerName,setCustomerName]=useState("")
  const [showWarning, setShowWarning] = useState(false);
const handleSubmit=(event)=>{
  event.preventDefault();
   // Giriş alanının içeriğini kontrol et
   if (customerName.trim() === "") {
    // Giriş alanı boşsa müşteri eklenmez
    setShowWarning(true);
    return;
  }
  const NewCustomer={
    id:Math.random(),
    customerName,
  };
  addNewCustomer(NewCustomer);
  setCustomerName("")
  setShowWarning(false); // Müşteri ekledikten sonra uyarıyı gizle
}
  return (
    <form className="customer-form" onSubmit={handleSubmit}>
      
    <input type="text" className="customer-input" placeholder="Add a new customer"
    
    onChange={(e) => {
      setCustomerName(e.target.value);
      setShowWarning(false); // Kullanıcı yazmaya başladığında uyarıyı gizle
    }}
     value={customerName} />
  <button type="submit">Add</button> 
  {showWarning && (
        <p className="warning">Please enter a customer name</p>
      )}
  </form>
  )
}
export default CustomerForm