<div id="page" class="<?php print $classes; ?>"<?php print $attributes; ?>>

  <!-- ______________________ HEADER _______________________ -->

  <header id="header">
    <div class="container">
      <?php if ($logo): ?>
        <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
          <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>"/>
        </a>
      <?php endif; ?>
      <?php if ($main_menu || $secondary_menu): ?>
        <nav id="navigation" class="menu <?php if (!empty($main_menu)) {print "with-primary";}
          if (!empty($secondary_menu)) {print " with-secondary";} ?>">
            <?php print theme('links', array('links' => $main_menu, 'attributes' => array('id' => 'primary', 'class' => array('links', 'clearfix', 'main-menu')))); ?>
        </nav> <!-- /navigation -->
      <?php endif; ?>
      <?php if ($page['header']): ?>
        <div id="header-region">
          <?php print render($page['header']); ?>
        </div>
      <?php endif; ?>
    </div>
  </header> <!-- /header -->

  <!-- ______________________ MAIN _______________________ -->

  <div id="main">
      <?php if ($breadcrumb || $title|| $messages || $tabs || $action_links): ?>
        <div id="content-header">

          <?php print $breadcrumb; ?>

          <?php if ($page['highlighted']): ?>
            <div id="highlighted"><?php print render($page['highlighted']) ?></div>
          <?php endif; ?>

          <?php print render($title_suffix); ?>
          <?php print $messages; ?>
          <?php print render($page['help']); ?>

          <?php if ($tabs): ?>
            <div class="tabs"><?php print render($tabs); ?></div>
          <?php endif; ?>

          <?php if ($action_links): ?>
            <ul class="action-links"><?php print render($action_links); ?></ul>
          <?php endif; ?>

        </div> <!-- /#content-header -->
      <?php endif; ?>

      <div id="content-area">
        <?php print render($page['content']) ?>
      </div>

      <?php print $feed_icons; ?>
  </div> <!-- /main -->

  <!-- ______________________ FOOTER _______________________ -->

  <?php if ($page['footer']): ?>
    <footer id="footer">
      <div class="container">
      <?php print render($page['footer']); ?>
      </div>
    </footer> <!-- /footer -->
  <?php endif; ?>

</div> <!-- /page -->
