const rentalURL = "https://tlatu2020.github.io/FinalProject/data/rentals.json";

fetch(rentalURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        let typeOne = jsObject.rentals[0];
        let typeTwo = jsObject.rentals[1];
        let typeThree = jsObject.rentals[2];
        let typeFour = jsObject.rentals[3];
        let typeFive = jsObject.rentals[4];
        let typeSix = jsObject.rentals[5];

        //Vehicle 1
        document.getElementById('Metro').textContent = typeOne.type;
        document.getElementById('MaxOne').textContent = typeOne.max;
        document.getElementById('RHOne').textContent = typeOne.halfRes;
        document.getElementById('RFOne').textContent = typeOne.fullRes;
        document.getElementById('WHOne').textContent = typeOne.halfWalk;
        document.getElementById('WFOne').textContent = typeOne.fullWalk;

        //Vehicle 2
        document.getElementById('Dio').textContent = typeTwo.type;
        document.getElementById('MaxTwo').textContent = typeTwo.max;
        document.getElementById('RHTwo').textContent = typeTwo.halfRes;
        document.getElementById('RFTwo').textContent = typeTwo.fullRes;
        document.getElementById('WHTwo').textContent = typeTwo.halfWalk;
        document.getElementById('WFTwo').textContent = typeTwo.fullWalk;

        //Vehicle 3
        document.getElementById('PCX150').textContent = typeThree.type;
        document.getElementById('MaxThree').textContent = typeThree.max;
        document.getElementById('RHThree').textContent = typeThree.halfRes;
        document.getElementById('RFThree').textContent = typeThree.fullRes;
        document.getElementById('WHThree').textContent = typeThree.halfWalk;
        document.getElementById('WFThree').textContent = typeThree.fullWalk;

        //Vehicle 4
        document.getElementById('Pioneer').textContent = typeFour.type;
        document.getElementById('MaxFour').textContent = typeFour.max;
        document.getElementById('RHFour').textContent = typeFour.halfRes;
        document.getElementById('RFFour').textContent = typeFour.fullRes;
        document.getElementById('WHFour').textContent = typeFour.halfWalk;
        document.getElementById('WFFour').textContent = typeFour.fullWalk;

        //Vehicle 5
        document.getElementById('WranglerTwo').textContent = typeFive.type;
        document.getElementById('MaxFive').textContent = typeFive.max;
        document.getElementById('RHFive').textContent = typeFive.halfRes;
        document.getElementById('RFFive').textContent = typeFive.fullRes;
        document.getElementById('WHFive').textContent = typeFive.halfWalk;
        document.getElementById('WFFive').textContent = typeFive.fullWalk;

        //Vehicle 6
        document.getElementById('WranglerFour').textContent = typeSix.type;
        document.getElementById('MaxSix').textContent = typeSix.max;
        document.getElementById('RHSix').textContent = typeSix.halfRes;
        document.getElementById('RFSix').textContent = typeSix.fullRes;
        document.getElementById('WHSix').textContent = typeSix.halfWalk;
        document.getElementById('WFSix').textContent = typeSix.fullWalk;

    });