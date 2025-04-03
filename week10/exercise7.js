let table = document.getElementById("table");

for (let i = 5; i <= 8; i++) {
    let bgColor = i % 2 === 0 ? "lightblue" : "white"; 

    table.innerHTML += `
        <tr style="background-color: ${bgColor};">
            <td>${i}</td>
            <td>Name ${i}</td>
            <td><img src="${i}.jpg" alt="Image ${i}" width="50" height="50"></td>
        </tr>
    `;
}
