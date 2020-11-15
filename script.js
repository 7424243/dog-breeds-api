function getDogImages(inputValue) {
    console.log($('.breedOfDog').val());
    inputValue = $('.breedOfDog').val();
    fetch('https://dog.ceo/api/breed/hound/images')
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Please try again.'));
}


function displayResults(responseJson) {
    let arrayOfImg = responseJson.message;
    $('.results-img').html(getMatch(arrayOfImg));
    $('.results').removeAttr('hidden');

}

function getMatch(arrayOfImg) {
    let match = [];
    for (let i = 0; i < responseJson.message.length; i++) {
        if (inputValue === ) {
            match.push();
        } else {
            return alert('Breed not found. Please try again.');
        }
    }
    return match[Math.floor(Math.random() * match.length)];
}

function handleSubmitButton() {
    $('form').submit(event => {
      event.preventDefault();
      getDogImages();
    });
  }

  
  $(function() {
    console.log('App loaded! Waiting for submit!');
    handleSubmitButton();
  })