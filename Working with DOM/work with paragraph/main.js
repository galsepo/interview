// ************** Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)


// const paragraph = document.querySelector("p");

// paragraph.innerHTML = paragraph.innerHTML.split(" ").map((word) => {
//     return word.length > 8
//         ? `<span style="background-color: yellow">${word}</span>`
//         : word
// }).join(" ");


// ******** Add a link back to the source of the text after the paragraph tag.(https://forcemipsum.com/)

// const link = document.createElement("a");
// link.href = "https://forcemipsum.com/";
// link.innerText = "Text generated fron Lorem Ipsum";
// document.body.appendChild(link)


// ***************  Split each new sentence to a separate line in the paragraph text. A sentence can be assumed to be a string of text terminated with a period (.)


const paragraph = document.querySelector("p");

paragraph.innerHTML = paragraph.innerHTML.split(/\.[^.|<]/).join(".</p><p>") + "</p>";