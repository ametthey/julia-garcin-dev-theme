<!-- project -->
<div class="container__projects" data-simplebar data-simplebar-direction='rtl'> 
    
    <?php if( get_field('project_container') ): $i = 0; ?>

        <?php while(has_sub_field('project_container')): $i++; ?>

            <a href="#project-<?php echo $i; ?>" class="project__item">
                <h5><?php echo the_sub_field('project_title'); ?></h5>
                <span><?php echo the_sub_field('project_cat'); ?></span>
            </a>

        <?php endwhile; ?>

    <?php endif; ?>

</div>
