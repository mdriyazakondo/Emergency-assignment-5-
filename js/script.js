const heart = document.getElementById("heart");
const coine = document.getElementById("coine");
const copy = document.getElementById("copy");
const copyBtn = document.getElementsByClassName("copyBtn");
const callBtn = document.getElementsByClassName("callBtn");
const heartBtn = document.getElementsByClassName("fa-heart");
const clearBtn = document.getElementById("clear-btn");

let copyes = 1;
let heard = 1;

for (const hearts of heartBtn) {
  hearts.addEventListener("click", function () {
    heart.innerText = heard++;
  });
}

for (const copye of copyBtn) {
  copye.addEventListener("click", function () {
    copy.innerText = copyes++;

    const parents = copye.parentNode.parentNode.children[2].children[0];
    const copy1 = parents.innerText;

    navigator.clipboard.writeText(copy1);
    alert(`The number has been copied : ${copy1}`);
  });
}

const history = document.getElementById("history");

for (const call of callBtn) {
  call.addEventListener("click", function () {
    const calls = call.parentNode.parentNode.children[1].children[0];
    const number = call.parentNode.parentNode.children[2].children[0];

    const call1 = calls.innerText;
    const number1 = number.innerText;

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
               <h4 class='text-[18px] font-medium'>${call1}</h4>
               <p class='text-[18px] font-medium text-gray-500'>${number1}</p>
          </div>
         <div>
         <h4>${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</h4>
         </div>
      </div>
    
    `;
    history.appendChild(div);
    alert(`📞 ${call1} - ${number1} এ কল দেওয়া হচ্ছে`);
  });
}

clearBtn.addEventListener("click", function () {
  history.innerHTML = "";
});
