<?php /* Template Name: All Dentals Template */ get_header(); ?>
            <section id="mosaic" class="grid-block">
                <div class="module deepest">
                    <div id="six_gallery120" class="six_imageGallery balbooa">
                        <div class="six_gallery_filter" id="six_gallery_filter120">
                            <ul class="filter">
                                <li class="active"><a onclick="return false" data-filter="*" href="#">All</a>
                                </li>
                                <li><a onclick="return false" data-filter=".GeneralsDentists" href="#">General Dentists</a>
                                </li>
                                <li><a onclick="return false" data-filter=".OralsSurgeons" href="#">Oral Surgeons</a>
                                </li>
                                <li><a onclick="return false" data-filter=".Paedodontists" href="#">Paedodontists</a>
                                </li>
                                <li><a onclick="return false" data-filter=".Orthodontists" href="#">Orthodontists</a>
                                </li>
                                <li><a onclick="return false" data-filter=".Endondontists" href="#">Endondontists</a>
                                </li>
                                <li><a onclick="return false" data-filter=".Prosthodontists" href="#">Prosthodontists</a>
                                </li>
                                <li><a onclick="return false" data-filter=".Hygienists" href="#">Hygienists</a>
                                </li>
                            </ul>
                        </div>

                        <ul id="itemContainer" class="six_gallery_container six_gallery_container120">
                            
                        <?php $loop = new WP_Query( array( 'post_type' => 'Dentalist', 'posts_per_page' => 50 ) ); ?>
                        <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>

                            <li class="six_gallery_content all_category <?php the_field('specialist'); ?>" >
                                <div class="effects4">
                                    <div class="overlay">
                                        <div class="overlay_container">
                                            <div class="overlay_content">
                                                <h3><?php the_title(); ?></h3>
                                                <div class="six_gallery_icon_container">
                                                    <a text_img="PGgzPkRyLiBNaWNoYWVsIEZvcm1lbml1cywgRERTPC9oMz4KPHA+Q0VPICZhbXA7IENsaW5pY2FsIERpcmVjdG9yPGJyIC8+Q2hhaXJtYW4sIERyLiBNaWNoYWVsJ3MgR3JvdXA8YnIgLz5DcmVhdG9yIG9mIENvdXR1cmUgU21pbGVzPGJyIC8+U3dlZGVuPC9wPgo8cD5Eci4gTWljaGFlbCBGb3JtZW5pdXMgaXMgYW4gaW50ZXJuYXRpb25hbGx5IGFjY2xhaW1lZCBjb3NtZXRpYyBkZW50aXN0IGFuZCBvbmUgb2YgdGhlIG1vc3QgcHVibGlzaGVkIGV4ZW1wbGFycyBpbiBkZW50YWwgbWVkaWEuIEFuIGV4cGVydCBpbiBhbGwgZmFjZXRzIG9mIERlbnRpc3RyeSB3aXRoIG92ZXIgMzAgeWVhcnMgb2YgcHJpdmF0ZSBwcmFjdGljZSwgRHIuIE1pY2hhZWwgaXMgYW4gYXV0aG9yaXR5IGFtb25nIGhpcyBwZWVycyB3aGVuIGl0IGNvbWVzIHRvIGNvc21ldGljLCByZXN0b3JhdGl2ZSBhbmQgbGFzZXIgYXNzaXN0ZWQgY29zbWV0aWMgZGVudGlzdHJ5LjwvcD4KPHA+RHIuIE1pY2hhZWwgZ3JhZHVhdGVkIGZyb20gdGhlIFJveWFsIERlbnRhbCBDb2xsZWdlLCBLYXJvbGluc2thIEluc3RpdHV0ZSwgaW4gMTk4MiBhbmQgd2VudCBvbiB0byBidWlsZGluZyB0aGUgZmlyc3Qgb2YgaGlzIG1hbnkgcHJpdmF0ZSBwcmFjdGljZXMgaW4gU3RvY2tob2xtIGluIHRoZSBzYW1lIHllYXIuIEhlIHRoZW4gZXN0YWJsaXNoZWQgYSBwcml2YXRlIGRlbnRhbCBsYWJvcmF0b3J5LCBhbmQgcGlvbmVlcmVkIHRoZSBicmFuZCAmbHNxdW87RHIuIE1pY2hhZWwmcnNxdW87cyAmbmRhc2g7IFlvdXIgUmVhc29uIHRvIFNtaWxlJnJzcXVvOyB3aXRoIHRoZSB0b3AgZmlmdGVlbiBkZW50aXN0cyBhbmQgc2V2ZW4gZGVudGFsIHRlY2huaWNpYW5zIGluIFN3ZWRlbi48L3A+CjxwPjxhIGhyZWY9Ii4uL2RlbnRpc3RzL21pY2hhZWwtZm9ybWVuaXVzIj5yZWFkIG1vcmU8L2E+PC9wPg==" href="#" data-fancybox-group=".all_category" class="fancybox120 six_gallery_icon_zoom img_text"></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <?php the_post_thumbnail('medium'); ?>
                                </div>
                            </li>
                            <?php endwhile; ?>


                        </ul>
                        <div class="six_gallery_filter120 holder active"></div>
                    </div>
                </div>
            </section>
            <div class="uk-container uk-container-center grid-block">
                <div id="main" class="grid-block">
                    <div id="maininner" class="grid-box" style="min-height: 80px;">
                        <section id="content" class="grid-block">
                            <div id="system-message-container"></div>
                            <div id="system">
                                <article class="item" itemscope="" itemtype="http://schema.org/Article">
                                    <meta itemprop="inLanguage" content="en-GB">
                                    <div class="content clearfix">
                                        <div itemprop="articleBody"></div>
                                    </div>
                                </article>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

<?php get_footer(); ?>