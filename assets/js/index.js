//scroll shrinks HEADER
window.onscroll = function() {stickyHeader()};
let sticky = (header.offsetTop);
function stickyHeader() {
  if (window.pageYOffset > (sticky+20)) {
    header.classList.add('sticky');
    header.classList.remove('unstick');
  }else if (window.pageYOffset <= sticky+20) {
    header.classList.remove('sticky');
    header.classList.add('unstick')
  }
  //else {
  //    let unstick = (header.offsetTop)
  //    header.classList.add('unstick')
  //}
}