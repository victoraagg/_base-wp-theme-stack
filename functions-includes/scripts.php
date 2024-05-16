<?php
function sanur_enqueue_script()
{
  wp_register_script('vanilla-cookieconsent', get_template_directory_uri() . '/node_modules/vanilla-cookieconsent/dist/cookieconsent.js', array('jquery'), false, true);
  wp_register_script('main', get_template_directory_uri() . '/dist/js/main.js', array('jquery', 'vanilla-cookieconsent'), false, true);
  $cookie_vars = array(
      'privay_policy_url' => get_permalink(17)
  );
  wp_localize_script('main', 'cookie_vars', $cookie_vars);

  if (!is_admin() && $GLOBALS['pagenow'] != 'wp-login.php') {
    wp_enqueue_script('vanilla-cookieconsent');
    wp_enqueue_script('main');
  }
}
add_action('init', 'sanur_enqueue_script');

/*
* Add defer attribute
*/
function add_defer_attribute($tag, $handle)
{
  // add script handles to the array below
  $scripts_to_defer = ['vanilla-cookieconsent', 'main'];
  foreach ($scripts_to_defer as $defer_script) {
    if ($defer_script === $handle) {
      return str_replace(' src', ' defer="defer" src', $tag);
    }
  }
  return $tag;
}
add_filter('script_loader_tag', 'add_defer_attribute', 10, 2);

/*
* Add async attribute
*/
function add_async_attribute($tag, $handle)
{
  // add script handles to the array below
  $scripts_to_async = [];
  foreach ($scripts_to_async as $async_script) {
    if ($async_script === $handle) {
      return str_replace(' src', ' async="async" src', $tag);
    }
  }
  return $tag;
}
add_filter('script_loader_tag', 'add_async_attribute', 10, 2);
