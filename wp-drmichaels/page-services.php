<?php /* Template Name: Services Template */ get_header(); ?>
<div class="uk-container uk-container-center grid-block">
    <div id="main" class="grid-block">
        <div id="maininner" class="grid-box" style="min-height: 2206px;">
            <section id="content" class="grid-block">
                <div id="system-message-container"></div>
                <div id="system">
                    <?php if (have_posts()): while (have_posts()) : the_post(); ?>
                    <article class="item" itemscope="" itemtype="http://schema.org/Article">
                        <meta itemprop="inLanguage" content="en-GB">
                        <div class="content clearfix">
                            <div itemprop="articleBody">
                                <div class="uk-grid" data-uk-grid-margin="">
                                    <?php if( get_field('quotes') ): ?><div class="uk-width-medium-2-3"><?php else: ?><div class="uk-width-medium-3-3"><?php endif; ?>
                                        <h1 class="dmctitle"><?php the_title(); ?></h1>
                                        <?php the_content(); ?>
                                    </div>
                                    <?php if( get_field('quotes') ): ?>
                                    <div class="uk-width-medium-1-3">
                                        <div class="quote-greenbar">
                                            <h4><?php the_field('quotes'); ?></h4>
                                        </div>
                                    </div>
                                    <?php endif; ?>

                                </div>
                                <div class="uk-grid" data-uk-grid-margin="">
                                    <?php if( get_field('quotes') ): ?><div class="uk-width-medium-2-3"><?php else: ?><div class="uk-width-medium-3-3"><?php endif; ?>

                                        <?php if( have_rows('slidebox') ): ?>
                                        <div>
                                            <div id="accordion-11-54dd0d39801b5" class="wk-accordion wk-accordion-coolblue clearfix" data-widgetkit="accordion" data-options="{&quot;style&quot;:&quot;coolblue&quot;,&quot;collapseall&quot;:1,&quot;matchheight&quot;:0,&quot;index&quot;:6,&quot;duration&quot;:500,&quot;width&quot;:&quot;auto&quot;,&quot;order&quot;:&quot;coolblue&quot;}">

                                            <?php while ( have_rows('slidebox') ) : the_row(); ?>

                                            <h3 class="toggler"><?php the_sub_field('question'); ?> </h3>
                                            <div class="content-wrapper" style="overflow: hidden; display: none; height: 0px;">
                                                <div class="content wk-content clearfix">
                                                    <?php the_sub_field('answer'); ?> 
                                                </div><!-- content wk-content clearfix -->
                                            </div><!-- content-wrapper -->
                                            
                                            <?php endwhile; ?>

                                            </div>
                                        </div>
                                        <?php else : ?>
                                        <?php endif; ?>
                                    </div><!-- uk-width-medium-2-3 -->
                                </div>
                            </div>
                        </div>
                    </article>
                <?php endwhile; else: // If 404 page error ?>
                    <article>
                    <h2 class="page-title inner-title"><?php _e( 'Sorry, nothing to display.', 'wpeasy' ); ?></h2>
                    </article>
                    <!-- /article -->
                <?php endif; ?>
                </div>
            </section>
        </div>
    </div>
</div>
<?php get_footer(); ?>