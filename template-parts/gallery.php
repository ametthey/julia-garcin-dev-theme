
<?php if( have_rows('gallery_container') ): $i = 0 ?>

<?php while( have_rows('gallery_container') ): the_row(); $i++;

        /*
         * Remove p tag before and after Wysiwyg Editor
         *
         * @see https://support.advancedcustomfields.com/forums/topic/removing-paragraph-tags-from-wysiwyg-fields/
         * @use https://www.advancedcustomfields.com/resources/wysiwyg-editor/
         */

        $title = get_sub_field('gallery_title');
        $desc = get_sub_field('gallery_description', 'wpautop');
        $sub = get_sub_field('gallery_sub');
        $galleries = get_sub_field('gallery_gallery');

    ?>

<div class="wrapper__container__images" id="project-<?php echo $i; ?>">

    <div class="container__images">

        <div class="container_images__info">
            <h5 class="container__images__info__title"><?php echo $title; ?></h5>
            <p><?php echo $desc; ?></p>
            <p class="legend"><?php echo $sub; ?></p>
        </div>

        <div class="container_images__gallery" data-flickity='{ "adaptiveHeight": true }'>

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
            <!-- <img class="carousel&#45;cell&#45;image" data&#45;flickity&#45;lazyload="<?php echo $image; ?>" alt=""> -->
            <img src="<?php echo $image; ?>" alt="" class="carousel-cell-image flickity-lazyload">
        </div>

        <?php } ?>


        <?php endwhile; ?>

        <?php endif; ?>


        </div>

        <div class="flickity-button-wrapper">

        </div>

    </div>
</div>

<?php endwhile; ?>

<?php endif; ?>

