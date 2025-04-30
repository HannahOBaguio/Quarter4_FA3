const contacts = [];
      const nameI = document.getElementById("name"); 
      const list = document.getElementById("list");
      let count = 0;

      function add() {
        const namef = nameI.value.trim(); 
        
        if (namef !== "") { 
          if (contacts.length < 7) {
            contacts.push(namef); 
          } else {
            contacts.shift(); 
            contacts.push(namef); 
          }
          display(); 
          nameI.value = ""; 
        }
      }

      function remove() {
        if (contacts.length > 0) { 
          contacts.pop();
          display(); 
        }
      }

      function display() {
        list.innerHTML = contacts.join(", ");
      }