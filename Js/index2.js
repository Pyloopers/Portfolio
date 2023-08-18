
function openPDF(url) {
    var newWindow = window.open(url, '_blank');
    newWindow.document.addEventListener('load', function() {
      newWindow.location.href = null;
    });
  }
  <a href="" onclick="openPDF(this.href)">View Certificate</a>
  