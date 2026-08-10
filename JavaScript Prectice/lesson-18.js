/* -----------------Use XMLHttpRequest----------------18a
const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => {
  console.log(xhr.response);
});
xhr.open('GET', 'https://supersimplebackend.dev/greeting');
xhr.send();

fetch('https://supersimplebackend.dev/greeting')
  .then(response => response.text())
  .then(hello => console.log(hello));

//----------------------use fetch---------------------------- 18c
async function greeting(){
  const response = await fetch('https://supersimplebackend.dev/greeting');
  const text = await response.text();
  console.log(text);
}
greeting();



//----------------------use fetch---------------------------- 18d

async function greetingOp() {


  const response = await fetch('https://supersimplebackend.dev/greeting',
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Shaan',
      })
    });
  const text = await response.text();
  console.log(text);
}
greetingOp();
*/

//----------------------use fetch---------------------------- 18e
async function amazon(){
  const response = await fetch('https://amazon.com');
  const text = await response.text();
  console.log (text);
}

amazon();



