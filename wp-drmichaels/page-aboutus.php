<?php /* Template Name: About Us Template */ get_header(); ?>
<div class="uk-container uk-container-center grid-block">
    <div id="main" class="grid-block">
        <div id="maininner" class="grid-box" style="min-height: 1363px;">
            <section id="content" class="grid-block">
                <div id="system-message-container"></div>
                <div id="system">
                    <article class="item" itemscope="" itemtype="http://schema.org/Article">
                        <meta itemprop="inLanguage" content="en-GB">
                        <div class="content clearfix">
                            <div itemprop="articleBody">
                                <div class="imgheader hidden-phone">
                                    <img src="<?php echo get_template_directory_uri(); ?>/img/about-us.jpg" alt="">
                                </div>
                                <div class="uk-grid" data-uk-grid-margin="">
                                    <div class="uk-width-medium-2-3">
                                        <h1 class="dmctitle">About Us</h1>
                                        <div class="justext">
                                            <?php the_content(); ?>
                                        </div>
                                    </div>
                                    <div class="uk-width-medium-1-3">
                                        <div class="quote-greenbar">
                                            <h2>Mission</h2>
                                            <h4><?php the_field('quotes'); ?></h4>
                                        </div>
                                        <div class="quote-bluebar">
                                            <h2>Vision</h2>
                                            <h4><?php the_field('quotes-second'); ?></h4>
                                        </div>
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
<?php get_footer(); ?>