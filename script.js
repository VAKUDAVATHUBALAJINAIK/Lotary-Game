const generateBtn = document.getElementById("generateBtn");
const pickBtn = document.getElementById("pickBtn");
const result = document.getElementById("result");
const lotterySheetContainer = document.getElementById("lotterySheetContainer");

const gifts = [
  "₹100 Cash","Toy Car","Chocolate Box","₹500 Cash","Smartphone Cover",
  "Book","Headphones","₹50 Cash","Gift Voucher","Watch","Teddy Bear",
  "Bluetooth Speaker","Movie Ticket","₹200 Cash","Puzzle Game","Perfume",
  "Sunglasses","₹1000 Cash","Board Game","Fitness Band","Digital Clock",
  "Lamp","Shopping Voucher","Laptop Bag","Wireless Mouse","Travel Mug",
  "Notebook Set","Gaming Mousepad","₹250 Cash","Keychain","Water Bottle",
  "Portable Charger","Desk Organizer","Cooking Set","Action Figure",
  "₹300 Cash","Travel Pillow","Mini Backpack","Personalized Mug",
  "Gaming Controller","Camera Strap","Toy Robot","₹750 Cash",
  "Sports Equipment","Pen Set","Bluetooth Earbuds","Digital Photo",
  "Wallet","Backpack","Gift Hamper"
];

// 🎁 Generate lottery boxes
generateBtn.addEventListener("click", () => {
  lotterySheetContainer.innerHTML = "";
  result.innerText = "";

  gifts.forEach((gift, index) => {
    const box = document.createElement("div");
    box.className = "box";
    box.innerText = `${index + 1}. ${gift}`;
    lotterySheetContainer.appendChild(box);
  });
});

// 🎯 Pick random winner
pickBtn.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".box");

  if (boxes.length === 0) {
    alert("Please generate the lottery first!");
    return;
  }

  boxes.forEach(box => box.classList.remove("winner"));

  const randomIndex = Math.floor(Math.random() * boxes.length);
  boxes[randomIndex].classList.add("winner");

  result.innerText = `🎉 Congratulations! You won: ${gifts[randomIndex]}`;
});
