<?php
/*
 * Template Name: Home
 */
get_header();
?>

<div class="container">

        <?php get_template_part('template-parts/project'); ?>

        <?php get_template_part('template-parts/navigation'); ?>
</div>

<?php get_template_part('template-parts/gallery'); ?>

<?php get_template_part('template-parts/message'); ?>

<?php get_footer(); ?>
