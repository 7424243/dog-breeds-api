function getDogImage(inputValue) {
    console.log($('.breedOfDog').val());
    inputValue = $('.breedOfDog').val();
    fetch('https://dog.ceo/api/breed/' + inputValue + '/images/random')
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Please try again.'));
}


function displayResults(responseJson) {
    let img = responseJson.message;
    let status = responseJson.status;
    console.log(status);
    console.log(img);
    if (status === "error") {
        $('.results-img').html('<p>' + img + '. Please try again!</p>');
        $('.results').removeAttr('hidden');
        //alert(img)
    } else {
        $('.results-img').html('<img src="' + img + '" class="js-results-img">');
        $('.results').removeAttr('hidden');
    }
}

function handleSubmitButton() {
    $('form').submit(event => {
      event.preventDefault();
      getDogImage();
    });
  }

  
  $(function() {
    console.log('App loaded! Waiting for submit!');
    handleSubmitButton();
  })