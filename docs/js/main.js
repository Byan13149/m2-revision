document.addEventListener('DOMContentLoaded', function() {
  // Sidebar expand/collapse
  document.querySelectorAll('.sidebar nav > ul > li > a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var parent = this.parentElement;
      var sub = parent.querySelector('ul');
      if (sub) {
        e.preventDefault();
        parent.classList.toggle('expanded');
      }
    });
  });

  // Highlight current page in sidebar
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar nav a').forEach(function(link) {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
      var parent = link.closest('li').parentElement.closest('li');
      if (parent) parent.classList.add('expanded');
    }
  });

  // Search functionality
  var searchInput = document.querySelector('.sidebar-search input');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      var query = this.value.toLowerCase();
      document.querySelectorAll('.sidebar nav > ul > li').forEach(function(item) {
        var text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? '' : 'none';
        if (query && text.includes(query)) item.classList.add('expanded');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
