function createSurprise(){

  const momName =
    document.getElementById("momName").value;

  const letter =
    document.getElementById("letter").value;

  if(momName === "" || letter === ""){

    alert("Please fill all information");

    return;
  }

  const surpriseLink =
    "surprise.html?mom=" +
    encodeURIComponent(momName) +
    "&letter=" +
    encodeURIComponent(letter);

  const result =
    document.getElementById("result");

  result.style.display = "block";

  result.innerHTML = `
    <h2 style="color:#ee6578;">
      Surprise Created 🎉
    </h2>

    <br>

    <a href="${surpriseLink}" target="_blank">
      Open Surprise 💖
    </a>
  `;
}