let beginner = document.getElementById("beginner");
let intermediate = document.getElementById("intermediate");
let elite = document.getElementById("elite");
let private = document.getElementById("private");
let swimming = document.getElementById("swimming");
let sauna = document.getElementById("sauna");
const beginnerCost = 4000;
const intermediateCost = 8000;
const eliteCost = 12000;
const saunaCost = 6000;
const swimmingCost = 4000;
let totalCost;
let monthlyCost;
let trainingPlan;
let additionalPlan;
document.querySelector(".register").addEventListener("click", () => {
  let customerName = String(document.querySelector(".customer-name").value);
  let currentWeight = Number(document.querySelector(".current-weight").value);
  let targetWeight = Number(document.querySelector(".target-weight").value);

  let trainingHour = Number(document.querySelector(".training-hour").value);
  const privateCost = trainingHour * 500;

  let weightDifference = targetWeight - currentWeight;

  if (beginner.checked === true && sauna.checked === true) {
    monthlyCost = beginnerCost;
    totalCost = beginnerCost + saunaCost;
    trainingPlan = "Beginner";
    additionalPlan = "sauna";
  } else if (intermediate.checked === true && sauna.checked === true) {
    monthlyCost = intermediateCost;
    totalCost = intermediateCost + saunaCost;
    trainingPlan = "Intermediate";
    additionalPlan = "sauna";
  } else if (elite.checked === true && sauna.checked === true) {
    monthlyCost = eliteCost;
    totalCost = eliteCost + saunaCost;
    trainingPlan = "Elite";
    additionalPlan = "sauna";
  } else if (private.checked === true && sauna.checked === true) {
    monthlyCost = privateCost;
    totalCost = privateCost + saunaCost;
    trainingPlan = "Private Training";
    additionalPlan = "sauna";
  } else if (swimming.checked === true && sauna.checked === true) {
    monthlyCost = swimmingCost;
    totalCost = swimmingCost + saunaCost;
    trainingPlan = "Swimming";
    additionalPlan = "sauna";
  } else if (beginner.checked === true) {
    monthlyCost = beginnerCost;
    totalCost = beginnerCost;
    trainingPlan = "Beginner";
    additionalPlan = "";
  } else if (intermediate.checked === true) {
    monthlyCost = intermediateCost;
    totalCost = intermediateCost;
    trainingPlan = "Intermediate";
    additionalPlan = "";
  } else if (elite.checked === true) {
    monthlyCost = eliteCost;
    totalCost = eliteCost;
    trainingPlan = "Elite";
    additionalPlan = "";
  } else if (private.checked === true) {
    monthlyCost = privateCost;
    totalCost = privateCost;
    trainingPlan = "Private Training";
    additionalPlan = "";
  } else if (swimming.checked === true) {
    monthlyCost = swimmingCost;
    totalCost = swimmingCost;
    trainingPlan = "Swimming";
    additionalPlan = "";
  }

  document.querySelector(".output").innerHTML = `

<p class='registered-alert'>User registered with following credientials!</p>


<div class='user-plan'> 


    <div class='user-details'>
      <p>
    <strong>Name : </strong> ${customerName}
   </p>

   <p>
    <strong>Training Plan : </strong> ${trainingPlan + " " + additionalPlan}
    </p>
      </div>

  

      <div class='cost-area'>
    <p class='monthly-cost'> Monthly cost of ${trainingPlan} : ${monthlyCost} </p>


    <p class='additional'> </p>



    <p class='total-cost'> Total cost :  <P class='cost'> ${totalCost}/- NPR </p> </p>

    </div>





  
  </div>






    <p class='weight-notice'> *
    <strong>TARGET TO ADD ADDITIONAL ${weightDifference}KG. AT THE END OF TRAINING PERIOD.
</p>

`;

  if (sauna.checked === true) {
    document.querySelector(".additional").innerHTML = `
 <p class=''> Monthly cost of ${additionalPlan} plan : ${saunaCost} </p>
 `;
  }
});
