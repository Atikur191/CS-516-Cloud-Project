console.log("Called");

// axios.get('https://reqres.in/api/users?page=2')
// .then((res)=> console.log(res))
// .catch((err)=> console.log(err));


// $("#contactme-form").on("submit", function (event) {
//     console.log("Submit button click");

// });

function objectifyForm(formArray) {
    //serialize data function
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++) {
        returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
}

$("#contactme-form").on("submit", function (event) {
    console.log("Javascript called");

    var formData = $("#contactme-form").serializeArray();
    var formSubmit = objectifyForm(formData);
    console.log(formSubmit);

    axios.post('https://1stxc604z2.execute-api.us-east-1.amazonaws.com/v1/project/', formSubmit, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': '*'
        },
    })
        .then((response) => {
            console.log("atikur - OK");
            //alert("Your Requested Submitted Successfully ");
            console.log(response);

            document.getElementById("submit_response").innerHTML = "Request has been successfully saved";
            document.getElementById("contactme-form").reset();

        })
        .catch((error) => {
            console.log("atikur - error");
            //alert("Ops !!! Failed to Submit. Retry again...");
            document.getElementById("submit_response").innerHTML = "Unknown Error Happened. Please try again";
            console.log(error);
        });
    return false;
});

