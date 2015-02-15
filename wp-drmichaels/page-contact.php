<?php /* Template Name: Contact Template */ get_header(); ?>
<div class="uk-container uk-container-center grid-block">
    <div id="main" class="grid-block">
        <div id="maininner" class="grid-box" style="min-height: 1560px;">
            <section id="content" class="grid-block">
                <div id="system-message-container"></div>
                <div id="system">
                    <article class="item" itemscope="" itemtype="http://schema.org/Article">
                        <meta itemprop="inLanguage" content="en-GB">
                        <div class="content clearfix">
                            <div itemprop="articleBody">
                                <div class="uk-grid" data-uk-grid-margin="">
                                    <div class="uk-width-medium-2-3">
                                        <?php the_content(); ?>
                                    </div>
                                    <div class="uk-width-medium-1-3">
                                        <div class="uk-panel uk-panel-box uk-panel-box-primary">
                                            <h3 class="underline uk-panel-title"><i class="uk-icon-clock-o"></i> Clinic Hours</h3> 
                                            <div style="float: left; width: 50%">Sunday
                                                <br>Monday
                                                <br>Tuesday
                                                <br>Wednesday
                                                <br>Thursday
                                                <br>Friday
                                                <br>Saturday
                                            </div>
                                            <div style="text-align: right;">8am–8pm
                                                <br>8am–8pm
                                                <br>8am–8pm
                                                <br>8am–8pm
                                                <br>8am–8pm
                                                <br>Closed
                                                <br>8am–8pm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style="margin-top: 40px;">
                                    <div id="gallery-27-54dd0d3758ce3" class="wk-slideshow wk-slideshow-inside" data-widgetkit="slideshow" data-options="{&quot;lightbox&quot;:0,&quot;index&quot;:0,&quot;buttons&quot;:1,&quot;navigation&quot;:1,&quot;thumb_width&quot;:80,&quot;thumb_height&quot;:80,&quot;style&quot;:&quot;inside&quot;,&quot;width&quot;:&quot;auto&quot;,&quot;height&quot;:&quot;auto&quot;,&quot;autoplay&quot;:1,&quot;order&quot;:&quot;default&quot;,&quot;interval&quot;:5000,&quot;duration&quot;:300,&quot;slices&quot;:20,&quot;animated&quot;:&quot;fade&quot;,&quot;caption_animation_duration&quot;:500}">
                                        

                                        <div>
                                        <?php 
                                        $images = get_field('gallery');
                                        if( $images ): ?>
                                            <ul class="slides" style="width: 100%; overflow: hidden; position: relative; ">
                                                <?php foreach( $images as $image ): ?>
                                                    <li>
                                                        <img src="<?php echo $image['sizes']['large']; ?>" width="1120" height="723" alt="">
                                                    </li>
                                                <?php endforeach; ?>
                                            </ul>
                                            <div class="next"></div>
                                            <div class="prev"></div>
                                        <?php endif; ?>
                                        </div>

                                        <?php 
                                        $images = get_field('gallery');
                                        if( $images ): ?>
                                            <ul class="nav">
                                                <?php foreach( $images as $image ): ?>
                                                    <li style="max-width:8.333%;" class="">
                                                        <img src="<?php echo $image['sizes']['thumbnail']; ?>" width="1120" height="723" alt="">
                                                    </li>
                                                <?php endforeach; ?>
                                            </ul>
                                        <?php endif; ?>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    </div>
</div>
<div id="bottom-block">
    <section id="utility">
        <div class="module deepest">
                    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery-1.11.2.min.js"></script> 
                    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
                    <script type="text/javascript">
                    (function($) {

                    function render_map( $el ) {
                        var $markers = $el.find('.marker');

                        var args = {
                            zoom        : 16,
                            center      : new google.maps.LatLng(0, 0),
                            mapTypeId   : google.maps.MapTypeId.ROADMAP
                        };

                        var map = new google.maps.Map( $el[0], args);

                        map.markers = [];

                        $markers.each(function(){

                            add_marker( $(this), map );

                        });

                        // center map
                        center_map( map );

                    }
                    function add_marker( $marker, map ) {
                        var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );
                        var marker = new google.maps.Marker({
                            position    : latlng,
                            map         : map
                        });

                        map.markers.push( marker );

                        if( $marker.html() )
                        {
                            // create info window
                            var infowindow = new google.maps.InfoWindow({
                                content     : $marker.html()
                            });

                            // show info window when marker is clicked
                            google.maps.event.addListener(marker, 'click', function() {

                                infowindow.open( map, marker );

                            });
                        }

                    }
                    function center_map( map ) {

                        // vars
                        var bounds = new google.maps.LatLngBounds();

                        // loop through all markers and create bounds
                        $.each( map.markers, function( i, marker ){

                            var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );

                            bounds.extend( latlng );

                        });

                        // only 1 marker?
                        if( map.markers.length == 1 )
                        {
                            // set center of map
                            map.setCenter( bounds.getCenter() );
                            map.setZoom( 16 );
                        }
                        else
                        {
                            // fit to bounds
                            map.fitBounds( bounds );
                        }

                    }
                    $(document).ready(function(){

                        $('.acf-map').each(function(){

                            render_map( $(this) );

                        });

                    });

                    })(jQuery);
                    </script>
                    <?php 

                    $location = get_field('maps');

                    if( !empty($location) ):
                    ?>
                    <div class="acf-map">
                        <div class="marker" data-lat="<?php echo $location['lat']; ?>" data-lng="<?php echo $location['lng']; ?>"></div>
                    </div>
                    <?php endif; ?>
        </div>
    </section>
</div>
<?php get_footer(); ?>