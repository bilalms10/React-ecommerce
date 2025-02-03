import { useContext, useState } from "react";
import { myContext } from "./contextpage";

function EditProducts() {
  const { productData, setProductData } = useContext(myContext);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    Brand: "",
    Type: "",
    Name: "",
    Description: "",
    Colour: "",
    Price: "",
    count: "",
    Image: "",
  });
  const [isAdding, setIsAdding] = useState(false);

 
  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedProduct(productData[index]);
  };

  
  const handleSave = () => {
    if (editingIndex !== null) {
     
      const updatedProducts = [...productData];
      updatedProducts[editingIndex] = editedProduct;
      setProductData(updatedProducts);
    } else {
     
      setProductData((prev) => [...prev, editedProduct]);
    }
    setEditingIndex(null);
    setIsAdding(false);
    setEditedProduct({
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

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const handleRemove = (index) => {
    const updatedProducts = productData.filter((_, i) => i !== index);
    setProductData(updatedProducts);
  };

  
  const handleAdd = () => {
    setIsAdding(true);
    setEditingIndex(null);
    setEditedProduct({
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
    <div>
      <h2>Edit Products</h2>
      <button onClick={handleAdd}>Add New Product</button>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Type</th>
            <th>Name</th>
            <th>Description</th>
            <th>Colour</th>
            <th>Price</th>
            <th>Count</th>
            <th>Image URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((product, index) => (
            <tr key={index}>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="Brand"
                    value={editedProduct.Brand}
                    onChange={handleChange}
                  />
                ) : (
                  product.Brand
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="Type"
                    value={editedProduct.Type}
                    onChange={handleChange}
                  />
                ) : (
                  product.Type
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="Name"
                    value={editedProduct.Name}
                    onChange={handleChange}
                  />
                ) : (
                  product.Name
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="Description"
                    value={editedProduct.Description}
                    onChange={handleChange}
                  />
                ) : (
                  product.Description
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="Colour"
                    value={editedProduct.Colour}
                    onChange={handleChange}
                  />
                ) : (
                  product.Colour
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="Price"
                    value={editedProduct.Price}
                    onChange={handleChange}
                  />
                ) : (
                  product.Price
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="count"
                    value={editedProduct.count}
                    onChange={handleChange}
                  />
                ) : (
                  product.count
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="Image"
                    value={editedProduct.Image}
                    onChange={handleChange}
                  />
                ) : (
                  <img src={product.Image} alt={product.Name} width="50" />
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <button onClick={handleSave}>Save</button>
                ) : (
                  <>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleRemove(index)}>Remove</button>
                  </>
                )}
              </td>
            </tr>
          ))}
          {isAdding && (
            <tr>
              <td>
                <input
                  type="text"
                  name="Brand"
                  value={editedProduct.Brand}
                  onChange={handleChange}
                  placeholder="Brand"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="Type"
                  value={editedProduct.Type}
                  onChange={handleChange}
                  placeholder="Type"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="Name"
                  value={editedProduct.Name}
                  onChange={handleChange}
                  placeholder="Name"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="Description"
                  value={editedProduct.Description}
                  onChange={handleChange}
                  placeholder="Description"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="Colour"
                  value={editedProduct.Colour}
                  onChange={handleChange}
                  placeholder="Colour"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="Price"
                  value={editedProduct.Price}
                  onChange={handleChange}
                  placeholder="Price"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="count"
                  value={editedProduct.count}
                  onChange={handleChange}
                  placeholder="Count"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="Image"
                  value={editedProduct.Image}
                  onChange={handleChange}
                  placeholder="Image URL"
                />
              </td>
              <td>
                <button onClick={handleSave}>Save</button>
                <button onClick={() => setIsAdding(false)}>Cancel</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EditProducts;