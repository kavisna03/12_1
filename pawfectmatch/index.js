// This is the JavaScript code for index.html file

// Adoption Stories section's image slideshow using arrays
const max_images = 3;
var story_1_img = ['leo-1', 'leo-2', 'leo-3'];
var story_3_img = ['rollexy-1', 'rollexy-2', 'rollexy-3'];
var cur_idx = 0;

function changeStoryImage()
{
  var story_1_pic = document.getElementById('story-1-pic');
  var story_3_pic = document.getElementById('story-3-pic');

  cur_idx = (cur_idx + 1) % max_images;

  story_1_pic.setAttribute('src', 'images/' + story_1_img[cur_idx] + '.jpeg');
  story_3_pic.setAttribute('src', 'images/' + story_3_img[cur_idx] + '.jpeg');
}

// Change image every 5s once the page loads
window.addEventListener("load", 
  function() 
  {
    setInterval(changeStoryImage, 5000);
  }, 
false);