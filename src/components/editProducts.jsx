import { useContext, useState } from "react";
import { myContext } from "./contextpage";
import { useNavigate } from "react-router-dom";

function EditProducts() {
  const { productData, setProductData } = useContext(myContext);
  const [editingIndex, setEditingIndex] = useState(null);
  const [product, setProduct] = useState({
    Brand: "",
    Type: "",
    Name: "",
    Description: "",
    Colour: "",
    Price: "",
    count: "",
    Image: "",
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };


  const handleSave = () => {
    if (!product.Name || !product.Price || !product.Image) {
      alert("Product Name, Price, and Image URL are required!");
      return;
    }
  
    if (editingIndex !== null) {
      
      setProductData((prevProducts) => {
        const updatedProducts = [...prevProducts];
        updatedProducts[editingIndex] = { ...product };
        return updatedProducts;
      });
    } else {
      setProductData([...productData, { ...product }]);
    }
  
    setEditingIndex(null);
    resetForm();
  }

  const handleEdit = (index) => {
    setEditingIndex(index);
    setProduct(productData[index]);
  };


  const handleRemove = (index) => {
    setProductData(productData.filter((_, i) => i !== index));
  };


  const resetForm = () => {
    setEditingIndex(null);
    setProduct({
      Brand: "",
      Type: "",
      Name: "",
      Description: "",
      Colour: "",
      Price: "",
      count: "",
      Image: "",
    });
  };

  return (
    <div className="edit-products">
      <h2>Manage Products</h2>
      <button className="admin-btn" onClick={() => navigate("/home")}>Home</button>


      <div className="product-form">
        <input type="text" name="Brand" placeholder="Brand" value={product.Brand} onChange={handleChange} />
        <input type="text" name="Type" placeholder="Type" value={product.Type} onChange={handleChange} />
        <input type="text" name="Name" placeholder="Name" value={product.Name} onChange={handleChange} required />
        <input type="text" name="Description" placeholder="Description" value={product.Description} onChange={handleChange} />
        <input type="text" name="Colour" placeholder="Colour" value={product.Colour} onChange={handleChange} />
        <input type="number" name="Price" placeholder="Price" value={product.Price} onChange={handleChange} required />
        <input type="number" name="count" placeholder="Stock Count" value={product.count} onChange={handleChange} />


        {product.Image && <img src={product.Image} alt="Product Preview" width="50" height="50" />}

        <input type="text" name="Image" placeholder="Image URL" value={product.Image} onChange={handleChange} />

        <button onClick={handleSave}>{editingIndex !== null ? "Update" : "Add Product"}</button>
        {editingIndex !== null && <button onClick={resetForm}>Cancel</button>}
      </div>


      <ul className="product-list">
        {productData.map((p, index) => (
          <li key={index} className="product-item">
            <img src={p.Image || "https://via.placeholder.com/50"} alt={p.Name} width="50" height="50" />
            <p><strong>{p.Name}</strong> - {p.Price} USD</p>
            <p>{p.Brand}, {p.Type}, {p.Colour}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EditProducts;



