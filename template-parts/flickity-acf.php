<?php if( have_rows('gallery_element') ): ?>

<?php while( have_rows('gallery_element') ): the_row();

    $image = get_sub_field('gallery_element_image');
    $embed = get_sub_field('gallery_element_embed');

?>

<?php if( $embed ) { ?>
<div class="carousel-cell">
    <div class="vimeo__container">
    <?php

        // Load value.
        //$iframe = get_field('oembed');

        // Use preg_match to find iframe src.
        preg_match('/src="(.+?)"/', $iframe, $matches);
        $src = $matches[1];

        // Add extra parameters to src and replcae HTML.
        $params = array(
            'controls'  => 0,
            'hd'        => 1,
            'autohide'  => 1,
        );
        $new_src = add_query_arg($params, $src);
        $iframe = str_replace($src, $new_src, $iframe);

        // Add extra attributes to iframe HTML.
        $attributes = 'frameborder="0"';
        $iframe = str_replace('></iframe>', ' ' . $attributes . '></iframe>', $iframe);

        // Display customized HTML.
        echo $embed;
    ?>
    </div>
</div>

<?php } else { ?>

<div class="carousel-cell">
    <img class="carousel-cell-image" data-flickity-lazyload="<?php echo $image; ?>" alt="">
</div>

<?php } ?>


<?php endwhile; ?>

<?php endif; ?>
