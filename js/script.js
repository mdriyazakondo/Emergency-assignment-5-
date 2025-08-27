const heart = document.getElementById("heart");
const coine = document.getElementById("coine");
const copy = document.getElementById("copy");
const copyBtnnumbers = document.getElementsByClassName("copyBtn");
const callBtn = document.getElementsByClassName("callBtn");
const heartBtn = document.getElementsByClassName("fa-heart");
const clearBtn = document.getElementById("clear-btn");

let copyCount = 1;
let heartCount = 1;

// Heart button
for (const hearts of heartBtn) {
  hearts.addEventListener("click", function () {
    heart.innerText = heartCount++;
  });
}

// Copy Button
for (const copyBtnNumber of copyBtnnumbers) {
  copyBtnNumber.addEventListener("click", function () {
    copyNumber.innerText = copyCount++;

    const copyNumber = copyNumber.parentNode.parentNode.children[2].children[0];
    const copye = copyNumber.innerText;

    navigator.clipboard.writeText(copye);
    alert(`The number has been copied : ${copye}`);
  });
}

// History and Call section
const history = document.getElementById("history");

for (const call of callBtn) {
  call.addEventListener("click", function () {
    const callName = call.parentNode.parentNode.children[1].children[0];
    const callNumber = call.parentNode.parentNode.children[2].children[0];

    const callNameUniq = callName.innerText;
    const callNumberUniq = callNumber.innerText;

    if (coine.innerText <= 0) {
      alert("❌ কল করার জন্য তোমার কাছে পর্যাপ্ত কয়েন নেই!");
      return;
    }

    coine.innerText = Number(coine.innerText) - 20;
    const div = document.createElement("div");
    const date = new Date();
    div.innerHTML = `
      <div class="flex items-center justify-between p-3 bg-[#fafafa] mb-4">
          <div>
               <h4 class='text-[18px] font-medium'>${callNameUniq}</h4>
               <p class='text-[18px] font-medium text-gray-500'>${callNumberUniq}</p>
          </div>
         <div>
         <h4>${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</h4>
         </div>
      </div>
    
    `;
    history.appendChild(div);
    alert(`📞 ${callNameUniq} - ${callNumberUniq} এ কল দেওয়া হচ্ছে`);
  });
}

clearBtn.addEventListener("click", function () {
  history.innerHTML = "";
});
