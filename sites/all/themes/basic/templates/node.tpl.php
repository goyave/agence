<article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?>">
  <div class="thumbnail">
    <?php
	if (!$content['field_video']) {
      echo render($content['field_thumbnail']);
      echo render($content['field_thumbnail_studio']);
      echo render($content['field_thumbnail_web']);
      hide($content['field_thumbnail']);
	} else {
	  echo render($content['field_video']);
      hide($content['field_thumbnail']);
      hide($content['field_thumbnail_studio']);
      hide($content['field_thumbnail_web']);
      hide($content['field_video']);
	}  
    ?>
  </div>
  <div class="content">
  <?php if ($title_prefix || $title_suffix || $display_submitted || $unpublished || $title): ?>
    <header>
        <h2 class="block-title"<?php print $title_attributes; ?>><?php print $title; ?></h2>
    </header>
  <?php endif; ?>
    <?php
      // We hide the comments to render below.
      hide($content['links']);
      print render($content);
     ?>
	 
	 <?php global $user; 
	 if ($user->uid == 16 || $user->uid  == 22) {
	 if ($node->nid != 28 ) {
	 print l('Modifier ce contenu', 'node/' . $node->nid .'/edit');
	 }} ?>
  </div> <!-- /content -->
<ul class="pager">
<?php 
$nextPost = pn_node($node, 'n');  
$prevPost = pn_node($node, 'p');  
 
if ($nextPost != NULL) { ?>
  <li class="pager-next"><?php print $nextPost; ?></li>
<?php } ?>
 
<?php if ($prevPost != NULL) { ?>
  <li class="pager-previous"><?php print $prevPost; ?></li>
<?php } ?>
</ul>
</article> <!-- /article #node -->