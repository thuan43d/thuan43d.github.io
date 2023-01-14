  //  lấy class  và lưu vào biến
  const buyBtns = document.querySelectorAll('.js-buy-ticket')
  const modal = document.querySelector('.js-modal')
  const modalClose = document.querySelector('.js-modal-close')
  const modalContainer = document.querySelector('.js-modal-container')

  // Đặt hàm hiện thị modal (Thêm class open vào modal)
  function showBuyTickets() {
      modal.classList.add('open')
  }
  // Đặt hàm ẩn modal (gở bỏ class open ra modal)
  function hiddenBuyTickets() {
      modal.classList.remove('open')
  }

  // Lặp qua từng thẻ button và nghe hành vi click 
  // tạo 1 biến mơi >> lưu lần lượt 3 nút(class) . 
  // for có bao nhieu class chạy bấy nhiều lần
  for (const buyBtn of buyBtns) {
      buyBtn.addEventListener('click', showBuyTickets)
  }

  // Nghe hành vi click vào button close
  // 1 cái nên k càn for
  modalClose.addEventListener('click', hiddenBuyTickets)

  // bấm vào khoảng trống sẽ đóng >> sự kiện nổi bọt
  modal.addEventListener('click', hiddenBuyTickets)
      //  event ; mỗi khi click 1 sự kiên j >>> trả lại 1 event >> ngăn chặn hành vi
  modalContainer.addEventListener('click', function(event) {
      // Ngừng viec noi bọt
      event.stopPropagation()

  })

  //  bắt sự kien kích vào
  var header = document.getElementById('header')
  var mobileMenu = document.getElementById('js-mobile-menu-btn')
      //  lấy chiều cao của header
  var headerHeight = header.clientHeight;


  //  đóng mở Menu mobile
  mobileMenu.onclick = function() {
      //  tạo biên kiem tra headr co bằng cao 46 k >> tra vè IsOPen >> đúng hay sai
      var isClose = header.clientHeight === headerHeight;
      if (isClose) {
          header.style.height = 'auto';
      } else {
          header.style.height = null;
      }
  }

  //  tự động đóng Menu mobile
  var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
  for (var i = 0; i < menuItems.length; i++) {
      var menuItem = menuItems[i];

      menuItem.onclick = function(event) {
          var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
          if (isParentMenu) {
              event.preventDefault();
          } else {
              //  khi bấm vào thì ẩn tk đó
              header.style.height = null;
          }
      }

  }