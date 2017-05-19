console.log('JS loaded');

// wait until the page is loaded
$(() => {
  const width = 3;
  const $gridCells = $('.wrapper div.box');
  const boyfriendSequence = [3, 4, 5, 8, 7, 6];
  let boyfriendIndex = 0;

  $(document).on('keydown', (e) => {
    e.preventDefault();
    // console.log(e.keyCode);

    let index = $('.player').index();
    console.log(index);
    if (e.keyCode=== 39){
      // right
      if (index % width >= width-1) {
        return false;
      }
      index +=1;
    } else if (e.keyCode=== 40){
      // down
      if (index + width > (width * width)-1) {
        return false;
      }
      index +=3;
    } else if (e.keyCode=== 38){
      // up
      if (index - width < 0) {
        return false;
      }
      index -=3;
    }else if (e.keyCode=== 37){
      // left
      if (index % width <= 0){
        return false;
      }
      index -=1;
    }
    $gridCells.removeClass('player').eq(index).addClass('player');

  });

  setInterval(() => {
    const boyfriendCellIndex = boyfriendSequence[boyfriendIndex];
    boyfriendIndex = boyfriendIndex + 1;
    if (boyfriendIndex > boyfriendSequence.length - 1){
      boyfriendIndex = 0;
    }
    $gridCells.removeClass('boyfriend').eq(boyfriendCellIndex).addClass('boyfriend');

    // change the boyfriend class
  }, 500);

});
