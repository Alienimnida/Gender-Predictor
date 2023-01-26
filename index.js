document.getElementById('getApi').addEventListener('click', getApi);
function getApi() {
    var FirstName = document.getElementById('firstname').value;
console.log(FirstName)
const url = `https://api.genderize.io?name=${FirstName}`;
console.log(url);
fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let output = `
            <div>
                    <p class="m-0" style="font-width:bold; font-size:1rem;">${data.gender}</p>
            </div>
            `;
        console.log('printing data', data);
        document.getElementById('output').innerHTML = output;
    }).catch((err) => console.log(err))
}
