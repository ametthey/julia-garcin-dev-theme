
<?php if( have_rows('gallery_container') ): $i = 0 ?>

    <?php while( have_rows('gallery_container') ): the_row(); $i++;

        /*
         * Remove p tag before and after Wysiwyg Editor
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

                    <!-- Cell: Video -->
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

                    <!-- Cell: Photo -->
                    <div class="carousel-cell">
                        <img src="<?php echo $image; ?>" alt="" class="carousel-cell-image flickity-lazyload">
                    </div>

                <?php } ?>


            <?php endwhile; ?>

        <?php endif; ?>


        </div>

        <!-- Close button -->
        <div class="close-gallery-button">
            <span>
                <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 82.465 82.465" style="enable-background:new 0 0 82.465 82.465;" xml:space="preserve">
                    <style type="text/css">
.st0{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}
                    </style>
                    <line class="st0" x1="0.354" y1="0.379" x2="82.112" y2="82.137"/>
                    <line class="st0" x1="82.112" y1="0.354" x2="0.354" y2="82.112"/>
                </svg>
            </span>
        </div>
        <!-- <div class="flickity&#45;button&#45;wrapper"> -->
        <!-- </div> -->

    </div>
</div>

<?php endwhile; ?>

<?php endif; ?>

