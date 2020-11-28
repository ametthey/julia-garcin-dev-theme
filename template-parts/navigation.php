<!-- navigation -->
<nav>
    <p>Julia Garcin</p>
    <p>A propos</p>

    <div class="container__about">
        <div class="about__me">
            <a href="mailto:garcinjulia@gmail.com"><h5>garcinjulia@gmail.com</h5></a>
            <p class="about__description"><?php echo the_field('about_presentation', 'option'); ?></p>
        </div>

        <div class="about__parutions">
            <h5>Articles QUD Magazine</h5>

            <?php if( have_rows('link_container' , 'option') ): ?>

                <?php while( have_rows('link_container', 'option') ): the_row(); ?>

                    <a href="<?php the_sub_field('link_link'); ?>"><?php the_sub_field('link_text');?></a>

                <?php endwhile; ?>

            <?php endif; ?>

        </div>

        <div class="about__parutions">
            <h5>Articles Dream-X</h5>

            <?php if( have_rows('link_container_2' , 'option') ): ?>

                <?php while( have_rows('link_container_2', 'option') ): the_row(); ?>

                    <a href="<?php the_sub_field('link_link'); ?>"><?php the_sub_field('link_text');?></a>

                <?php endwhile; ?>

            <?php endif; ?>

        </div>
    </div>
</nav>
