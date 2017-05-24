console.log('JS loaded');

// wait until the page is loaded
$(() => {

  // make a rounds array containing an object for each round
  // set a roundIndex to 0, the first round
  // replace the width, sequence and speed with the current round's data
  const rounds = [{
    width: 3,
    sequence: [3, 4, 5, 8, 7, 6],
    speed: 500
  }, {
    width: 4,
    sequence: [3, 4, 5, 8, 7, 6, 3],
    speed: 250
  }, {
    width: 5,
    sequence: [],
    speed: 200
  }];

  let roundIndex = 0;
  let currentRound = rounds[roundIndex];
// this section will help pick the speed,width and the round it is set to current because I now have more than 1level
  const $gridCells = $('.wrapper div.box');
  let boyfriendIndex = 0;
  const $result = $('.result');
  let timerId = null;

// Boyfriend section: setInterval starts the timer for the boyfriend and the sequency he will be moving in -1 because the grid counts from 0
  function startBoyfriend() {
    boyfriendIndex = 0;
    timerId = setInterval(() => {
      const boyfriendCellIndex = currentRound.sequence[boyfriendIndex];
      boyfriendIndex = boyfriendIndex + 1;
      if (boyfriendIndex > currentRound.sequence.length - 1){
        boyfriendIndex = 0;
      }
      // The eq() method returns an element with a specific index of the selected elements.
      $gridCells.removeClass('boyfriend').eq(boyfriendCellIndex).addClass('boyfriend');

      // if the boyfriend cell has a class of player it will console log you loose and bf from moving
      if ($gridCells.eq(boyfriendCellIndex).hasClass('player')){
        console.log('youloose');
        clearInterval(timerId);
      }
    }, currentRound.speed);
  }

  startBoyfriend();

  function playerMove(e) {
    e.preventDefault();
    // console.log(e.keyCode);
    // these are the functions for the keycode (arrow buttons)
    let playerIndex = $('.player').index();
    if (e.keyCode=== 39){
      // right arrow
      if (playerIndex % currentRound.width >= currentRound.width-1) {
        return false;
      }
      playerIndex +=1;
    } else if (e.keyCode=== 40){
      // down arrow
      if (playerIndex + currentRound.width>(currentRound.width * currentRound.width)-1) {
        return false;
      }
      // if statements were added so the user cant go past a column and stopped at the end of the column
      playerIndex +=3;
    } else if (e.keyCode=== 38){
      // up arrow
      if (playerIndex - currentRound.width < 0) {
        return false;
      }
      playerIndex -=3;
    }else if (e.keyCode=== 37){
      // left arrow
      if (playerIndex % currentRound.width <= 0){
        return false;
      }
      playerIndex -=1;
    }
    $gridCells.removeClass('player').eq(playerIndex).addClass('player');

    // if girl  is in the last box she has won
    if (playerIndex === currentRound.width * currentRound.width -1){
      $result.html('You Win');
      clearInterval(timerId);
      $(document).off('keydown');
      roundIndex++;
      currentRound = rounds[roundIndex];
      startBoyfriend();
      $(document).on('keydown', playerMove);
    }

    // If the bf is in the same box as gf the girl loses
    if ($gridCells.eq(playerIndex).hasClass('boyfriend')){
      console.log('loser');
      $result.html('Girl he caught you!');
      alert('Girl he caught you!');
      // Stops the timer but also stops the player from moving once the player has lost (.off 'keydown' stops the arrows from moving)
      clearInterval(timerId);
      $(document).off('keydown');
    }
  }

  // ^ this sets the speed the bf is going at it is not speed because every level is diffrent
  $(document).on('keydown', playerMove);
});
