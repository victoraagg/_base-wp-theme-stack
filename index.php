<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 *  
 */
get_header();
?>

<!-- HEADER -->
<header>
  <h1>Init WP Page</h1>
</header>

<!-- MAIN -->
<main>
  <?php
  while ( have_posts() ) : the_post();
    the_content();
  endwhile;
  ?>
</main>

<!-- FOOTER -->
<?php
get_footer();