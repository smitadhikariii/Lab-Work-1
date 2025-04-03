function showJoinedArrays() {
    const myColor = ["Red", "Green", "White", "Black"];
    document.getElementById("arrayResults").innerHTML = `<p>${myColor.toString()}</p><p>${myColor.join()}</p><p>${myColor.join("+")}</p>`;
}