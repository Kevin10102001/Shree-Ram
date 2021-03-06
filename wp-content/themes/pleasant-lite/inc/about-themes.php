<?php
/**
 * Pleasant Lite About Theme
 *
 * @package Pleasant Lite
 */

//about theme info
add_action( 'admin_menu', 'pleasant_lite_abouttheme' );
function pleasant_lite_abouttheme() {    	
	add_theme_page( __('About Theme Info', 'pleasant-lite'), __('About Theme Info', 'pleasant-lite'), 'edit_theme_options', 'pleasant_lite_guide', 'pleasant_lite_mostrar_guide');   
} 

//guidline for about theme
function pleasant_lite_mostrar_guide() { 
?>
<div class="wrap-GT">
	<div class="gt-left">
   		   <div class="heading-gt">
			  <h3><?php esc_html_e('About Theme Info', 'pleasant-lite'); ?></h3>
		   </div>
        <p><?php esc_html_e('Pleasant Lite is a clean and modern free multipurpose WordPress theme. It is perfect for business, corporate, restaurant, photography, industrial, hotels or any type of industry. This beautiful free WordPress theme lets you to show everything about your business. It has various home page sections including homepage slider, welcome and services section. This theme supports widget areas for sidebar and footer section and also supports featured images for blog posts. This theme has default right sidebar and full width page template. It is very light weight theme and very easy to use and customize. With its setting, you can control homepage sections, change colors, use your own logo, use images for header and background. The theme is fully responsive and mobile friendly. This theme is SEO friendly, translation ready and compatible with popular WordPress Plugins.','pleasant-lite'); ?></p>
<div class="heading-gt"> <?php esc_html_e('Theme Features', 'pleasant-lite'); ?></div>
 

<div class="col-2">
  <h4><?php esc_html_e('Theme Customizer', 'pleasant-lite'); ?></h4>
  <div class="description"><?php esc_html_e('The built-in customizer panel quickly change aspects of the design and display changes live before saving them.', 'pleasant-lite'); ?></div>
</div>

<div class="col-2">
  <h4><?php esc_html_e('Responsive Ready', 'pleasant-lite'); ?></h4>
  <div class="description"><?php esc_html_e('The themes layout will automatically adjust and fit on any screen resolution and looks great on any device. Fully optimized for iPhone and iPad.', 'pleasant-lite'); ?></div>
</div>

<div class="col-2">
<h4><?php esc_html_e('Cross Browser Compatible', 'pleasant-lite'); ?></h4>
<div class="description"><?php esc_html_e('Our themes are tested in all mordern web browsers and compatible with the latest version including Chrome,Firefox, Safari, Opera, IE8 and above.', 'pleasant-lite'); ?></div>
</div>

<div class="col-2">
<h4><?php esc_html_e('E-commerce', 'pleasant-lite'); ?></h4>
<div class="description"><?php esc_html_e('Fully compatible with WooCommerce plugin. Just install the plugin and turn your site into a full featured online shop and start selling products.', 'pleasant-lite'); ?></div>
</div>
<div style="height:5px"></div>
</div><!-- .gt-left -->
	
	<div class="gt-right">			
			<div style="font-weight:bold;">				
				<a href="<?php echo esc_url( PLEASANT_LITE_LIVE_DEMO ); ?>" target="_blank"><?php esc_html_e('Live Demo', 'pleasant-lite'); ?></a> | 	
                <a href="<?php echo esc_url( PLEASANT_LITE_PROTHEME_URL ); ?>" target="_blank"><?php esc_html_e('Purchase Pro', 'pleasant-lite'); ?></a> | 			
				<a href="<?php echo esc_url( PLEASANT_LITE_THEME_DOC ); ?>" target="_blank"><?php esc_html_e('Documentation', 'pleasant-lite'); ?></a>
                <div style="height:5px"></div>
				<hr />  
                <ul>
                 <li><?php esc_html_e('Theme Customizer', 'pleasant-lite'); ?></li>
                 <li><?php esc_html_e('Responsive Ready', 'pleasant-lite'); ?></li>
                 <li><?php esc_html_e('Cross Browser Compatible', 'pleasant-lite'); ?></li>
                 <li><?php esc_html_e('E-commerce', 'pleasant-lite'); ?></li>
                 <li><?php esc_html_e('Contact Form 7 Plugin Compatible', 'pleasant-lite'); ?></li>  
                 <li><?php esc_html_e('User Friendly', 'pleasant-lite'); ?></li> 
                 <li><?php esc_html_e('Translation Ready', 'pleasant-lite'); ?></li>
                 <li><?php esc_html_e('Many Other Plugins  Compatible', 'pleasant-lite'); ?></li>   
                </ul>              
               
			</div>		
	</div><!-- .gt-right-->
    <div class="clear"></div>
</div><!-- .wrap-GT -->
<?php } ?>