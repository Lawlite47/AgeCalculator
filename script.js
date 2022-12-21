let submit = document.getElementById("submit");
let result = document.getElementById("result");

submit.addEventListener("click", () => {

  let dob = document.getElementById("birth_date").value;
  dob = new Date(dob);

  let dateNow = new Date();

  let month_diff = dateNow - dob.getTime(); // calculate month diffrence from current date

  let age_dt = new Date(month_diff); // convert the difference in date format

  let year = age_dt.getUTCFullYear();  // extract the year from date

  age = Math.abs(year - 1970);  // calculate the age of user

  let inDays = (Math.floor(month_diff/(1000*60*60*24)));

  result.style.display = "block";
  result.innerHTML = `you are <span> ${age} </span> years old | <span> ${inDays}</span> Days old  `;

})