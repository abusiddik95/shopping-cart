  // Plus One Phone Quantity;
  const addOne = document.getElementById("addOne");
  addOne.addEventListener("click", function(){
     const phoneQuantity = document.getElementById("quantity").value;
     const phonePrice = document.getElementById("phonePrice").innerText;
     const phoneQuantityNumber = parseFloat(phoneQuantity);
     const phonePriceNumber = parseFloat(phonePrice);
     const totalPhoneQuantity = phoneQuantityNumber + 1;
     document.getElementById("quantity").value = totalPhoneQuantity;
     const totalPhonePrice = phonePriceNumber + 1219;
     document.getElementById("phonePrice").innerText = totalPhonePrice;
  })

  // Minus One Phone Quantity;
  const minusOne = document.getElementById("minusOne")
  minusOne.addEventListener("click", function(){
     const phoneQuantity = document.getElementById("quantity").value;
     const phonePrice = document.getElementById("phonePrice").innerText;
     const phoneQuantityNumber = parseFloat(phoneQuantity);
     const phonePriceNumber = parseFloat(phonePrice);
     const totalPhoneQuantity = phoneQuantityNumber - 1;
     document.getElementById("quantity").value = totalPhoneQuantity;
     const totalPhonePrice = phonePriceNumber - 1219;
     document.getElementById("phonePrice").innerText = totalPhonePrice;
  })