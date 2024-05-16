<?php
/*
 * Enqueue styles
 */
function sanur_enqueue_style()
{
  wp_register_style('style', get_template_directory_uri() . '/dist/style.css');
  wp_register_style('vanilla-cookieconsent', get_template_directory_uri() . '/node_modules/vanilla-cookieconsent/dist/cookieconsent.css');

  if (!is_admin() && $GLOBALS['pagenow'] != 'wp-login.php') {
    wp_enqueue_style('style');
    wp_enqueue_style('vanilla-cookieconsent');
  }
}
add_action('init', 'sanur_enqueue_style');
