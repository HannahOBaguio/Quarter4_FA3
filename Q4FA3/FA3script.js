function Input() {
        let x = prompt("Enter a number please:");
        while (isNaN(x) || x.trim() === "") {
          x = prompt("Enter a valid number:");
        }
        x = Number(x);
        document.getElementById("userInput").innerHTML = "Number inputted: " + x;

        if (x % 2 === 0) {
          let result = "";
          for (let i = x; i > 0; i--) {
            for (let j = 0; j < i; j++) {
              result += i + " ";
            }
            result += "<br>";
          }
          document.getElementById("output").innerHTML = result;
        } else {
          let result = "";
          for (let i = x; i > 0; i--) {
            for (let j = 0; j < x; j++) {
              result += i + " ";
            }
            result += "<br>";
          }
          document.getElementById("output").innerHTML = result;
        }
      }