 // פונקציה להפוך שדות למואפרים/מאופשרים לפי הבחירה
        function toggleFields() {
            let testType = document.querySelector('input[name="testType"]:checked').value;
            let psychometricInput = document.getElementById("psychometric");
            let mechinaInput = document.getElementById("mechina");
            
            if (testType === "psychometric") {
                // אפשר רק פסיכומטרי
                psychometricInput.disabled = false;
                psychometricInput.style.backgroundColor = "white";
                psychometricInput.style.color = "black";
                psychometricInput.style.cursor = "text";
                
                mechinaInput.disabled = true;
                mechinaInput.style.backgroundColor = "gray";
                mechinaInput.style.color = "gray";
                mechinaInput.style.cursor = "not-allowed";
                // נקה את שדה המכינה
                mechinaInput.value = "";
            } else {
                // אפשר מכינה, אפר פסיכומטרי
                psychometricInput.disabled = true;
                psychometricInput.style.backgroundColor = "gray";
                psychometricInput.style.color = "gray";
                psychometricInput.style.cursor = "not-allowed";
                // נקה את שדה הפסיכומטרי
                psychometricInput.value = "";
                
                mechinaInput.disabled = false;
                mechinaInput.style.backgroundColor = "white";
                mechinaInput.style.color = "black";
                mechinaInput.style.cursor = "text";
            }
        }

        // פונקציה ולידייט בודקת שהוקלד ציון בגרות ובודקת את גיל המשתמש מעל 30
        function validate() {
            let bagrutGrade = document.getElementById("bagrut").value;
            let age = parseInt(document.getElementById("age").value);
            if (bagrutGrade == "" || isNaN(bagrutGrade) || bagrutGrade < 0 || bagrutGrade > 100) {
                alert("You should enter a bagrut grade");
                return;
            }
            // בדיקת גיל תקין
            if (isNaN(age) || age <= 0) {
                alert("Please enter a valid age");
                 return;
            }
            // בדיקת גיל מעל 30
            if (age > 30) {
                let resultDiv = document.getElementById("result");
                resultDiv.innerText = "You are eligible for admission to any faculty you choose.";
                resultDiv.classList.add("green");
                resultDiv.style.display = "block";
                return;
            } 
        }