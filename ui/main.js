

button.onclick = function () {
    
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the responce and store it in a variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if (request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        // Not done Yet
    };
    //Render the variable in correct span
    
    //Make the request
    request.open('GET', 'http://paricrp.imad.hasura-app.io/counter',true);
    request.send(null);
};