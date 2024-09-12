function calculateTax(income, expenses) {
  let calc = (income - expenses) * 0.2;

  if (income < 0 || expenses < 0) {
    return "Invalid Input";
  } else if (income < expenses) {
    return "Invalid Input";
  } else if (income >= expenses) {
    return calc;
  }
}

function sendNotification(email) {
  let text = email.split("@");
  let userName = text[0];
  let domain = text[1];
  let errorCheck = email.split("").indexOf("@");

  if (errorCheck == -1) {
    return "Invalid Email";
  } else {
    return `${userName} sent you an email from ${domain}`;
  }
}

function checkDigitsInName(name) {
  let str = name;

  if (typeof str !== "string") {
    return "Invalid Input";
  }
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      return true;
    }
  }

  return false;
}

function calculateFinalScore(obj) {
  let sum = 0;
  for (const key in obj) {
    let num1 = obj.testScore;
    let num2 = obj.schoolGrade;
    let isTrue = obj.isFFamily;

    if (
      typeof obj == "object" &&
      typeof obj.name == "string" &&
      typeof obj.testScore == "number" &&
      typeof obj.schoolGrade == "number"
    ) {
      if (num1 <= 50 && num2 <= 30) {
        let change = num1 + num2;
        if (isTrue) {
          sum += change + 20;
        } else {
          sum += change;
        }
        break;
      }
    } else {
      return "Invalid Input";
    }
  }

  if (sum >= 80) {
    return true;
  } else {
    return false;
  }
}

function waitingTime(waitingTimes, serialNumber) {
  let sum = 0;
  let moreInterviewr = 0;

  if (Array.isArray(waitingTimes) && typeof serialNumber == "number") {
    for (const element of waitingTimes) {
      sum += element / waitingTimes.length;
    }

    let sumAvg = Math.round(sum);
    moreInterviewr += serialNumber - 1 - waitingTimes.length;
    let time = sumAvg * moreInterviewr;

    return time;
  } else {
    return "Invalid Input";
  }
}

