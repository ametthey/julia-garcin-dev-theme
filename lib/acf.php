<?php

/*
 * everything ACF related
 */

if( function_exists('acf_add_options_page') ) {

	acf_add_options_page(array(
		'page_title' 	=> 'A Propos',
		'menu_title'	=> 'A propos',
		'menu_slug' 	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));

	acf_add_options_sub_page(array(
		'page_title' 	=> 'Message',
		'menu_title'	=> 'Message',
		'parent_slug' 	=> 'theme-general-settings',
	));
}

?>
