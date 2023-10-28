// const nftElements = document.querySelectorAll(".nft");

// for (const nftElement of nftElements) {
//   nftElement.addEventListener("mouseover", () => {
//    
//     const cardElement = document.createElement("div");
//     cardElement.classList.add("nft-card");

//   
//     const nftTextElement = document.createElement("div");
//     nftTextElement.classList.add("nft-text");
//     nftTextElement.textContent = "NFT";

//     const stackNftTextElement = document.createElement("div");
//     stackNftTextElement.classList.add("stack-nft-text");
//     stackNftTextElement.textContent = "Stack NFT";

//     // Add the two text elements to the card element
//     cardElement.appendChild(nftTextElement);
//     cardElement.appendChild(stackNftTextElement);

//     // Position the card element below the NFT element
//     cardElement.style.position = "absolute";
//     cardElement.style.left = nftElement.getBoundingClientRect().left + "px";
//     cardElement.style.top = nftElement.getBoundingClientRect().bottom + "px";

//     // Append the card element to the body
//     document.body.appendChild(cardElement);
//   });

//   nftElement.addEventListener("mouseout", () => {
//     // Remove the card element from the body
//     document.querySelector(".nft-card").remove();
//   });
// }


// const nftElements = document.querySelectorAll('.nft');

// for (const nftElement of nftElements) {
//   nftElement.addEventListener('mouseover', () => {
   
//     const cardElement = document.createElement('div');
//     cardElement.classList.add('nft-card');
//     cardElement.innerHTML = `
//       <div class="nft-text">NFT</div>
//       <div class="stack-nft-text">Stack NFT</div>
//     `;

   
//     cardElement.style.position = 'absolute';
//     cardElement.style.left = nftElement.getBoundingClientRect().left + 'px';
//     cardElement.style.top = nftElement.getBoundingClientRect().bottom + 'px';

//     // Append the card element to the body
//     document.body.appendChild(cardElement);
//   });

//   nftElement.addEventListener('mouseout', () => {
//     // Remove the card element from the body
//     document.querySelector('.nft-card').remove();
//   });
// }
