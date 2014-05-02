javascript:(function(){
  /* bookmarklet to sort typekit dropdown */
  /* note: return the lis as an array, not a jquery collection */
  var $list = $('.global-kit-menu-dropdown');
  var sel = '.global-kit-menu-item';
  var lis = $list.find('li').has(sel).get();

  lis.sort(function(a, b) {
    var strA = $(a).find(sel).attr('value').toLowerCase();
    var strB = $(b).find(sel).attr('value').toLowerCase();

    return (strA < strB) ? -1 : (strA > strB) ? 1 : 0;
  });

  $.each(lis, function(idx, itm) {
    $list.append(itm);
  });
})();
