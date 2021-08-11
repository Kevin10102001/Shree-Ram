<?php
/**
 * The template part for displaying post
 *
 * @package VW Travel 
 * @subpackage vw_travel
 * @since VW Travel 1.0
 */
?>
<?php 
  $vw_travel_archive_year  = get_the_time('Y'); 
  $vw_travel_archive_month = get_the_time('m'); 
  $vw_travel_archive_day   = get_the_time('d'); 
?>
<article id="post-<?php the_ID(); ?>" <?php post_class('inner-service'); ?>>
  <div class="post-main-box ">
    <?php $vw_travel_theme_lay = get_theme_mod( 'vw_travel_blog_layout_option','Default');
    if($vw_travel_theme_lay == 'Default'){ ?>
      <div class="row m-0">
        <?php if(has_post_thumbnail()) {?>
          <div class="box-image col-lg-6 col-md-6">
            <?php the_post_thumbnail(); ?>
          </div>
        <?php } ?>
        <div class="new-text <?php if(has_post_thumbnail()) { ?>col-lg-6 col-md-6"<?php } else { ?>col-lg-12 col-md-12"<?php } ?>>
          <h2 class="section-title"><a href="<?php echo esc_url( get_permalink() ); ?>" title="<?php echo the_title_attribute(); ?>"><?php the_title();?><span class="screen-reader-text"><?php the_title(); ?></span></a></h2>
          <?php if( get_theme_mod( 'vw_travel_toggle_postdate',true) != '' || get_theme_mod( 'vw_travel_toggle_author',true) != '' || get_theme_mod( 'vw_travel_toggle_comments',true) != '') { ?>
            <div class="post-info">
              <?php if(get_theme_mod('vw_travel_toggle_postdate',true)==1){ ?>
                <i class="fas fa-calendar-alt"></i><span class="entry-date"><a href="<?php echo esc_url( get_day_link( $vw_travel_archive_year, $vw_travel_archive_month, $vw_travel_archive_day)); ?>"><?php echo esc_html( get_the_date() ); ?><span class="screen-reader-text"><?php echo esc_html( get_the_date() ); ?></span></a></span><span>|</span>
              <?php } ?>

              <?php if(get_theme_mod('vw_travel_toggle_author',true)==1){ ?>
                <i class="far fa-user"></i><span class="entry-author"><a href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' )) ); ?>"><?php the_author(); ?><span class="screen-reader-text"><?php the_author(); ?></span></a></span><span>|</span>
              <?php } ?>

              <?php if(get_theme_mod('vw_travel_toggle_comments',true)==1){ ?>
                <i class="fa fa-comments" aria-hidden="true"></i><span class="entry-comments"><?php comments_number( __('0 Comment', 'vw-travel'), __('0 Comments', 'vw-travel'), __('% Comments', 'vw-travel') ); ?> </span><span>|</span>
              <?php } ?>

              <?php if(get_theme_mod('vw_travel_toggle_time',true)==1){ ?>
                <i class="fas fa-clock"></i><span class="entry-time"><?php echo esc_html( get_the_time() ); ?></span>
              <?php } ?>
              <hr>
            </div>
          <?php } ?>
          <div class="entry-content">
            <p>       
              <?php $vw_travel_theme_lay = get_theme_mod( 'vw_travel_excerpt_settings','Excerpt');
              if($vw_travel_theme_lay == 'Content'){ ?>
                <?php the_content(); ?>
              <?php }
              if($vw_travel_theme_lay == 'Excerpt'){ ?>
                <?php if(get_the_excerpt()) { ?>
                  <p><?php $excerpt = get_the_excerpt(); echo esc_html( vw_travel_string_limit_words( $excerpt, esc_attr(get_theme_mod('vw_travel_excerpt_number','30')))); ?> <?php echo esc_html(get_theme_mod('vw_travel_excerpt_suffix',''));?></p>
                <?php }?>
              <?php }?>
            </p>
          </div>
          <?php if( get_theme_mod('vw_travel_button_text','READ MORE') != ''){ ?>
            <div class="more-btn">
              <a href="<?php echo esc_url(get_permalink()); ?>"><?php echo esc_html(get_theme_mod('vw_travel_button_text',__('READ MORE','vw-travel')));?><?php if(get_theme_mod('vw_travel_blog_button_icon',true) ){ ?><i class="<?php echo esc_attr(get_theme_mod('vw_travel_blog_button_icon','fas fa-long-arrow-alt-right')); ?>"></i><?php }?><span class="screen-reader-text"><?php echo esc_html(get_theme_mod('vw_travel_button_text',__('READ MORE','vw-travel')));?></span></a>
            </div>
          <?php } ?>
        </div>
      </div>
    <?php }else if($vw_travel_theme_lay == 'Center'){ ?>
      <div class="service-text">
        <h2 class="section-title"><a href="<?php echo esc_url( get_permalink() ); ?>" title="<?php echo the_title_attribute(); ?>"><?php the_title();?><span class="screen-reader-text"><?php the_title(); ?></span></a></h2>
        <div class="box-image">
          <?php the_post_thumbnail(); ?>
        </div>
        <?php if( get_theme_mod( 'vw_travel_toggle_postdate',true) != '' || get_theme_mod( 'vw_travel_toggle_author',true) != '' || get_theme_mod( 'vw_travel_toggle_comments',true) != '') { ?>
          <div class="post-info">
            <?php if(get_theme_mod('vw_travel_toggle_postdate',true)==1){ ?>
              <i class="fas fa-calendar-alt"></i><span class="entry-date"><a href="<?php echo esc_url( get_day_link( $vw_travel_archive_year, $vw_travel_archive_month, $vw_travel_archive_day)); ?>"><?php echo esc_html( get_the_date() ); ?><span class="screen-reader-text"><?php echo esc_html( get_the_date() ); ?></span></a></span><span>|</span>
            <?php } ?>

            <?php if(get_theme_mod('vw_travel_toggle_author',true)==1){ ?>
              <i class="far fa-user"></i><span class="entry-author"><a href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' )) ); ?>"><?php the_author(); ?><span class="screen-reader-text"><?php the_author(); ?></span></a></span><span>|</span>
            <?php } ?>

            <?php if(get_theme_mod('vw_travel_toggle_comments',true)==1){ ?>
              <i class="fa fa-comments" aria-hidden="true"></i><span class="entry-comments"><?php comments_number( __('0 Comment', 'vw-travel'), __('0 Comments', 'vw-travel'), __('% Comments', 'vw-travel') ); ?> </span><span>|</span>
            <?php } ?>

            <?php if(get_theme_mod('vw_travel_toggle_time',true)==1){ ?>
              <i class="fas fa-clock"></i><span class="entry-time"><?php echo esc_html( get_the_time() ); ?></span>
            <?php } ?>
            <hr>
          </div>
        <?php } ?>
        <div class="entry-content">
          <p>       
            <?php $vw_travel_theme_lay = get_theme_mod( 'vw_travel_excerpt_settings','Excerpt');
            if($vw_travel_theme_lay == 'Content'){ ?>
              <?php the_content(); ?>
            <?php }
            if($vw_travel_theme_lay == 'Excerpt'){ ?>
              <?php if(get_the_excerpt()) { ?>
                <p><?php $excerpt = get_the_excerpt(); echo esc_html( vw_travel_string_limit_words( $excerpt, esc_attr(get_theme_mod('vw_travel_excerpt_number','30')))); ?> <?php echo esc_html(get_theme_mod('vw_travel_excerpt_suffix',''));?></p>
              <?php }?>
            <?php }?>
          </p>
        </div>
        <?php if( get_theme_mod('vw_travel_button_text','READ MORE') != ''){ ?>
          <div class="more-btn">
            <a href="<?php echo esc_url(get_permalink()); ?>"><?php echo esc_html(get_theme_mod('vw_travel_button_text',__('READ MORE','vw-travel')));?><?php if(get_theme_mod('vw_travel_blog_button_icon',true) ){ ?><i class="<?php echo esc_attr(get_theme_mod('vw_travel_blog_button_icon','fas fa-long-arrow-alt-right')); ?>"></i><?php }?><span class="screen-reader-text"><?php echo esc_html(get_theme_mod('vw_travel_button_text',__('READ MORE','vw-travel')));?></span></a>
          </div>
        <?php } ?>
      </div>
    <?php }else if($vw_travel_theme_lay == 'Left'){ ?>
      <div class="service-text">
        <div class="box-image">
          <?php the_post_thumbnail(); ?>
        </div>
        <h2 class="section-title"><a href="<?php echo esc_url( get_permalink() ); ?>" title="<?php echo the_title_attribute(); ?>"><?php the_title();?><span class="screen-reader-text"><?php the_title(); ?></span></a></h2>
        <?php if( get_theme_mod( 'vw_travel_toggle_postdate',true) != '' || get_theme_mod( 'vw_travel_toggle_author',true) != '' || get_theme_mod( 'vw_travel_toggle_comments',true) != '') { ?>
          <div class="post-info">
            <?php if(get_theme_mod('vw_travel_toggle_postdate',true)==1){ ?>
              <i class="fas fa-calendar-alt"></i><span class="entry-date"><a href="<?php echo esc_url( get_day_link( $vw_travel_archive_year, $vw_travel_archive_month, $vw_travel_archive_day)); ?>"><?php echo esc_html( get_the_date() ); ?><span class="screen-reader-text"><?php echo esc_html( get_the_date() ); ?></span></a></span><span>|</span>
            <?php } ?>

            <?php if(get_theme_mod('vw_travel_toggle_author',true)==1){ ?>
              <i class="far fa-user"></i><span class="entry-author"><a href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' )) ); ?>"><?php the_author(); ?><span class="screen-reader-text"><?php the_author(); ?></span></a></span><span>|</span>
            <?php } ?>

            <?php if(get_theme_mod('vw_travel_toggle_comments',true)==1){ ?>
              <i class="fa fa-comments" aria-hidden="true"></i><span class="entry-comments"><?php comments_number( __('0 Comment', 'vw-travel'), __('0 Comments', 'vw-travel'), __('% Comments', 'vw-travel') ); ?> </span><span>|</span>
            <?php } ?>

            <?php if(get_theme_mod('vw_travel_toggle_time',true)==1){ ?>
              <i class="fas fa-clock"></i><span class="entry-time"><?php echo esc_html( get_the_time() ); ?></span>
            <?php } ?>
            <hr>
          </div>
        <?php } ?>
        <div class="entry-content">
          <p>       
            <?php $vw_travel_theme_lay = get_theme_mod( 'vw_travel_excerpt_settings','Excerpt');
            if($vw_travel_theme_lay == 'Content'){ ?>
              <?php the_content(); ?>
            <?php }
            if($vw_travel_theme_lay == 'Excerpt'){ ?>
              <?php if(get_the_excerpt()) { ?>
                <p><?php $excerpt = get_the_excerpt(); echo esc_html( vw_travel_string_limit_words( $excerpt, esc_attr(get_theme_mod('vw_travel_excerpt_number','30')))); ?> <?php echo esc_html(get_theme_mod('vw_travel_excerpt_suffix',''));?></p>
              <?php }?>
            <?php }?>
          </p>
        </div>
        <?php if( get_theme_mod('vw_travel_button_text','READ MORE') != ''){ ?>
          <div class="more-btn">
            <a href="<?php echo esc_url(get_permalink()); ?>"><?php echo esc_html(get_theme_mod('vw_travel_button_text',__('READ MORE','vw-travel')));?><?php if(get_theme_mod('vw_travel_blog_button_icon',true) ){ ?><i class="<?php echo esc_attr(get_theme_mod('vw_travel_blog_button_icon','fas fa-long-arrow-alt-right')); ?>"></i><?php }?><span class="screen-reader-text"><?php echo esc_html(get_theme_mod('vw_travel_button_text',__('READ MORE','vw-travel')));?></span></a>
          </div>
        <?php } ?>
      </div>
    <?php } ?>
  </div>
</article>