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
    "https://sanlyhour4-eng.github.io/mymom.github.io/surprise.html?mom=" +
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

    <input
      type="text"
      value="${surpriseLink}"
      readonly
      style="
        width:100%;
        padding:12px;
        border-radius:10px;
        border:none;
        margin-bottom:15px;
      "
    >

    <a
      href="${surpriseLink}"
      target="_blank"
      style="
        color:#ee6578;
        font-weight:bold;
        text-decoration:none;
      "
    >
      Open Surprise 💖
    </a>
  `;
}