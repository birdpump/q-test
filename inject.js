//main entrypoint
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'L') {
        // setupSystem();
        calcGrades();
    }
});


function setupSystem() {

    chrome.scripting.insertCSS({
        target: { tabId: tabs.id },
        files: ["inject.css"]
    });

}


function calcGrades() {

    var table = document.getElementById("tblassign_6");

    // Initialize arrays to store PTS possible and score values
    var ptsPossibleValues = [];
    var scoreValues = [];

    let total1 = 0.0;
    let total2 = 0.0;
    // Iterate over the rows in the table, starting from the second row (skipping the header row)
    for (var i = 2; i < table.rows.length; i++) {
        // Get the cells in the current row
        var cells = table.rows[i].cells;

        // Extract the values from the "Pts Possible" and "Score" columns (fifth and sixth columns respectively)
        var ptsPossible = cells[4].textContent.trim();
        var score = cells[5].textContent.trim();

        if(ptsPossible !== ""){
            total1 += parseFloat(ptsPossible);

        }

        if(score !== ""){
            total2 += parseFloat(score);
            
        }
       

        // Push the values into the arrays
        ptsPossibleValues.push(ptsPossible);
        scoreValues.push(score);
    }

    // Output the arrays containing PTS possible and score values
    console.log("PTS Possible Values:", ptsPossibleValues);
    console.log("Score Values:", scoreValues);


    console.log(total1);
    console.log(total2);

    let score = (total1/total2)*100;
    console.log(score.toFixed(2));

}