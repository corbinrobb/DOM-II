const animateBlocks = function() {
  const blocks = document.querySelectorAll('.block');

  let highestBlock = 0;
  blocks.forEach(function (block) {
    block.addEventListener('click', function () {
      block.style.order = highestBlock - 1;
      highestBlock = block.style.order;
    });

    block.addEventListener('mousedown', function(e) {

    });
  });



  return;
}

animateBlocks();
