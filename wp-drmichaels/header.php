<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>

    <!-- dns prefetch -->
    <link href="//www.google-analytics.com" rel="dns-prefetch">

    <!-- meta -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">

    <!-- icons -->
    <link href="<?php echo get_template_directory_uri(); ?>/favicon.ico" rel="shortcut icon">
    <link href="<?php echo get_template_directory_uri(); ?>/img/touch.png" rel="apple-touch-icon-precomposed">

    <!-- css + javascript -->
    <?php wp_head(); ?>
</head>
<body id="page" <?php body_class('page isblog at-boxed'); ?> hola-ext-player="1">
    <div class="sheet uk-clearfix bg_texture_6">
        <div id="at-container" class="wrapper">
            <div id="header-sticky-wrapper" class="sticky-wrapper" style="height: 95px;">
                <header id="header" class="fixed-header">
                    <div class=" grid-block uk-container wrapper  ">
                        <div class="headerbar">
                            <a id="logo" href="#">
                                <div>
                                    <div class="wrapper">
                                        <div>
                                            <img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="drmichaels">
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" id="at-navbar" class="uk-hidden-large uk-navbar-toggle uk-float-right" data-uk-offcanvas=""></a>
                            <div class="menubar">
                                <nav id="menu">
                                    <ul class="menu menu-dropdown">
                                        <li class="level1 item101 active current">
                                            <a href="/" class="level1 active current"><span>Home</span></a>
                                        </li>
                                        <li class="level1 item107">
                                            <a href="#" class="level1"><span>About Us</span></a>
                                        </li>
                                        <li class="level1 item108 parent">
                                            <a href="<?php echo home_url(); ?>/team.htm" class="level1 parent"><span>Our Team</span></a>
                                            <div class="dropdown columns3" style="display: none; overflow: hidden;">
                                                <div style="overflow: hidden;">
                                                    <div>
                                                        <div class="dropdown-bg">
                                                            <div>
                                                                <div class="width33 column">
                                                                    <ul class="nav-child unstyled small level2" style="min-height: 334px;">
                                                                        <li class="level2 item113 hassubtitle"><a class="level2 has-icon" href="#"><i class="uk-icon-user-md"></i><span><span class="title">Dr. Michael Formenius</span><span class="subtitle">CEO &amp; Clinical Director</span></span></a>
                                                                        </li>
                                                                        <li class="level2 item118 parent"><a class="level2 parent has-icon" href="#"><i class="uk-icon-user-md"></i><span>Root Canal Specialist</span></a>
                                                                            <ul class="nav-child unstyled small level3">
                                                                                <li class="level3 item137"><a href="#" class="level3"><span>Dr. Yasmin Al-Zoubaidy</span></a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li class="level2 item114 parent"><a class="level2 parent has-icon" href="#"><i class="uk-icon-user-md"></i><span>General Dentists</span></a>
                                                                            <ul class="nav-child unstyled small level3">
                                                                                <li class="level3 item122"><a href="#" class="level3"><span>Dr. Cristina Formenius</span></a>
                                                                                </li>
                                                                                <li class="level3 item124"><a href="#" class="level3"><span>Dr. Gun Ingrid Norell</span></a>
                                                                                </li>
                                                                                <li class="level3 item125"><a href="#" class="level3"><span>Dr. Thomas Lyth</span></a>
                                                                                </li>
                                                                                <li class="level3 item126"><a href="#" class="level3"><span>Dr. Soren Kollat Jensen</span></a>
                                                                                </li>
                                                                                <li class="level3 item127"><a href="#" class="level3"><span>Dr. Christina Friis-Moeller</span></a>
                                                                                </li>
                                                                                <li class="level3 item128"><a href="#" class="level3"><span>Dr. Ulrike Maria Spitz</span></a>
                                                                                </li>
                                                                                <li class="level3 item129"><a href="#" class="level3"><span>Dr. Marwan Al-Obeidi</span></a>
                                                                                </li>
                                                                                <li class="level3 item130"><a href="#" class="level3"><span>Dr. Chris Johansson</span></a>
                                                                                </li>
                                                                                <li class="level3 item230"><a href="#" class="level3"><span>Dr. Soulaf Shaker</span></a>
                                                                                </li>
                                                                                <li class="level3 item238"><a href="#" class="level3"><span>Dr. Fernando Arroyo Meneses</span></a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="width33 column">
                                                                    <ul class="level2" style="min-height: 334px;">
                                                                        <li class="level2 item116 parent"><a class="level2 parent has-icon" href="#"><i class="uk-icon-user-md"></i><span>Pediatric Dentists</span></a>
                                                                            <ul class="nav-child unstyled small level3">
                                                                                <li class="level3 item135"><a href="#" class="level3"><span>Dr. Imneet Madan</span></a>
                                                                                </li>
                                                                                <li class="level3 item136"><a href="#" class="level3"><span>Dr. Chantal Kengo</span></a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li class="level2 item115 parent"><a class="level2 parent has-icon" href="#"><i class="uk-icon-user-md"></i><span>Orthodontists</span></a>
                                                                            <ul class="nav-child unstyled small level3">
                                                                                <li class="level3 item132"><a href="#" class="level3"><span>Dr. Teertha Karnakar</span></a>
                                                                                </li>
                                                                                <li class="level3 item299"><a href="#" class="level3"><span>Dr. Lina Stavroula Papika</span></a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li class="level2 item117 parent"><a class="level2 parent has-icon" href="#"><i class="uk-icon-user-md"></i><span>Implantologists</span></a>
                                                                            <ul class="nav-child unstyled small level3">
                                                                                <li class="level3 item142"><a href="#" class="level3"><span>Prof. Steen Sindet-Pedersen</span></a>
                                                                                </li>
                                                                                <li class="level3 item367"><a href="#" class="level3"><span>Dr. Fernando Arroyo Meneses</span></a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="width33 column">
                                                                    <ul class="level2" style="min-height: 334px;">
                                                                        <li class="level2 item120 parent"><a class="level2 parent has-icon" href="#"><i class="uk-icon-user-md"></i><span>Prosthodontist</span></a>
                                                                            <ul class="nav-child unstyled small level3">
                                                                                <li class="level3 item139"><a href="#" class="level3"><span>Dr. Omar Aldaoudi</span></a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li class="level2 item119 parent"><a class="level2 parent has-icon" href="#"><i class="uk-icon-user-md"></i><span>Oral &amp; Maxillofacial Surgeon</span></a>
                                                                            <ul class="nav-child unstyled small level3">
                                                                                <li class="level3 item138"><a href="#" class="level3"><span>Prof. Steen Sindet-Pedersen</span></a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li class="level2 item121 parent"><a class="level2 parent has-icon" href="#"><i class="uk-icon-user-md"></i><span>Dental Hygienists</span></a>
                                                                            <ul class="nav-child unstyled small level3">
                                                                                <li class="level3 item140"><a href="#" class="level3"><span>Felicia Bjurfjall</span></a>
                                                                                </li>
                                                                                <li class="level3 item141"><a href="#" class="level3"><span>Hilde Brunvoll Lyth</span></a>
                                                                                </li>
                                                                                <li class="level3 item143"><a href="#" class="level3"><span>Dulene Swanepoel</span></a>
                                                                                </li>
                                                                                <li class="level3 item145"><a href="#" class="level3"><span>Rahleh Mahtabpour</span></a>
                                                                                </li>
                                                                                <li class="level3 item146"><a href="#" class="level3"><span>Safiyah Adham</span></a>
                                                                                </li>
                                                                                <li class="level3 item270"><a href="#" class="level3"><span>Cindy Aylward</span></a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="level1 item110 parent"><span class="separator level1 parent"><span>Services</span></span>
                                            <div class="dropdown columns3" style="display: none; overflow: hidden;">
                                                <div style="overflow: hidden;">
                                                    <div>
                                                        <div class="dropdown-bg">
                                                            <div>
                                                                <div class="width33 column">
                                                                    <ul class="nav-child unstyled small level2" style="min-height: 226px;">
                                                                        <li class="level2 item205"><a class="level2 has-icon" href="<?php echo home_url(); ?>/services.htm"><i class="uk-icon-check"></i><span>Couture Smile™</span></a>
                                                                        </li>
                                                                        <li class="level2 item153"><a class="level2 has-icon" href="#"><i class="uk-icon-check"></i><span>Pediatric Dentistry</span></a>
                                                                        </li>
                                                                        <li class="level2 item297"><a class="level2 has-icon" href="#"><i class="uk-icon-check"></i><span>Painless Dentistry for Kids</span></a>
                                                                        </li>
                                                                        <li class="level2 item154"><a class="level2 has-icon" href="#"><i class="uk-icon-check"></i><span>Cosmetic Dentistry</span></a>
                                                                        </li>
                                                                        <li class="level2 item155"><a class="level2 has-icon" href="#"><i class="uk-icon-check"></i><span>Veneers, Smile Makeover</span></a>
                                                                        </li>
                                                                        <li class="level2 item158 parent"><a class="level2 parent has-icon" href="#"><i class="uk-icon-check"></i><span>Orthodontic Braces</span></a>
                                                                            <ul class="nav-child unstyled small level3">
                                                                                <li class="level3 item159"><a href="#" class="level3"><span>• Invisalign®</span></a>
                                                                                </li>
                                                                                <li class="level3 item302"><a href="#" class="level3"><span>• Incognito™ Lingual Braces</span></a>
                                                                                </li>
                                                                                <li class="level3 item369"><a href="#" class="level3"><span>• Damon™ System</span></a>
                                                                                </li>
                                                                                <li class="level3 item368"><a href="#" class="level3"><span>• Six Month Smiles®</span></a>
                                                                                </li>
                                                                                <li class="level3 item371"><a href="#" class="level3"><span>• Ceramic Braces</span></a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="width33 column">
                                                                    <ul class="level2" style="min-height: 226px;">
                                                                        <li class="level2 item157"><a class="level2 has-icon" href="#"><i class="uk-icon-check"></i><span>Teeth Whitening</span></a>
                                                                        </li>
                                                                        <li class="level2 item160"><a class="level2 has-icon" href="#"><i class="uk-icon-check"></i><span>Clear Aligners</span></a>
                                                                        </li>
                                                                        <li class="level2 item197"><a class="level2 has-icon" href="#"><i class="uk-icon-check"></i><span>Oral &amp; Maxillofacial</span></a>
                                                                        </li>
                                                                        <li class="level2 item161"><a class="level2 has-icon" href="#"><i class="uk-icon-check"></i><span>Dental Implants</span></a>
                                                                        </li>
                                                                        <li class="level2 item162"><a class="level2 has-icon" href="#"><i class="uk-icon-check"></i><span>Root Canal Treatment</span></a>
                                                                        </li>
                                                                        <li class="level2 item163"><a class="level2 has-icon" href="#"><i class="uk-icon-check"></i><span>Prosthodontics</span></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="width33 column">
                                                                    <ul class="level2" style="min-height: 226px;">
                                                                        <li class="level2 item164"><a class="level2 has-icon" href="#"><i class="uk-icon-check"></i><span>Sedation Dentistry</span></a>
                                                                        </li>
                                                                        <li class="level2 item156"><a class="level2 has-icon" href="#"><i class="uk-icon-check"></i><span>Crowns &amp; Bridges</span></a>
                                                                        </li>
                                                                        <li class="level2 item165"><a class="level2 has-icon" href="#"><i class="uk-icon-check"></i><span>Gum Disease Treatment</span></a>
                                                                        </li>
                                                                        <li class="level2 item166"><a class="level2 has-icon" href="#"><i class="uk-icon-check"></i><span>Tooth Extraction</span></a>
                                                                        </li>
                                                                        <li class="level2 item131"><a class="level2 has-icon" href="#"><i class="uk-icon-check"></i><span>Dental Emergency</span></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="level1 item112 parent"><a href="<?php echo home_url(); ?>/contact-us.htm" class="separator level1 parent"><span>Contact Us</span></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div id="header-right" class="uk-float-right no-margin">
                                <div class="module hidden-phone  deepest">
                                    <div>
                                        <div class="wrapper">
                                            <div>
                                                <?php get_template_part('include-social-link'); ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>