<?php

/**
 * @file
 * Main view template.
 *
 * Variables available:
 * - $classes_array: An array of classes determined in
 *   template_preprocess_views_view(). Default classes are:
 *     .view
 *     .view-[css_name]
 *     .view-id-[view_name]
 *     .view-display-id-[display_name]
 *     .view-dom-id-[dom_id]
 * - $classes: A string version of $classes_array for use in the class attribute
 * - $css_name: A css-safe version of the view name.
 * - $css_class: The user-specified classes names, if any
 * - $header: The view header
 * - $footer: The view footer
 * - $rows: The results of the view query, if any
 * - $empty: The empty text to display if the view is empty
 * - $pager: The pager next/prev links to display, if any
 * - $exposed: Exposed widget form/info to display
 * - $feed_icon: Feed icon to display, if any
 * - $more: A link to view more, if any
 *
 * @ingroup views_templates
 */
?>
<div class="<?php print $classes; ?>">
  <?php print render($title_prefix); ?>
  <?php if ($title): ?>
    <?php print $title; ?>
  <?php endif; ?>
  <?php print render($title_suffix); ?>
  <?php if ($header): ?>
    <div class="view-header">
      <?php print $header; ?>
      <map name="spieces">
        <area  alt="" title="12 24" href="#" shape="poly" coords="270,174,254,68,296,28,327,40,344,67,336,121,320,178,312,228,279,232"/>
        <area  alt="" title="01 13" href="#" shape="poly" coords="318,231,345,164,376,86,422,62,452,82,455,135,405,185,360,231,345,248"/>
        <area  alt="" title="02 14" href="#" shape="poly" coords="351,252,406,211,464,160,506,157,538,172,535,223,471,253,365,279"/>
        <area  alt="" title="03 15" href="#" shape="poly" coords="417,278,494,259,544,264,568,307,539,346,463,344,368,318,369,290"/>
        <area  alt="" title="04 16" href="#" shape="poly" coords="369,326,435,352,500,367,532,435,484,465,433,432,365,364,348,348"/>
        <area  alt="" title="05 17" href="#" shape="poly" coords="344,355,371,399,403,423,435,466,445,520,410,548,369,534,339,455,313,372"/>
        <area  alt="" title="06 18" href="#" shape="poly" coords="279,373,305,372,322,446,339,529,306,569,267,559,250,533,247,492"/>
        <area  alt="" title="07 19" href="#" shape="poly" coords="249,353,272,372,246,431,215,515,167,533,128,500,140,448"/>
        <area  alt="" title="08 20" href="#" shape="poly" coords="243,342,183,396,108,452,60,430,57,382,107,351,196,324,225,324"/>
        <area  alt="" title="09 21" href="#" shape="poly" coords="225,283,224,311,153,326,76,348,34,310,36,268,76,246"/>
        <area  alt="" title="10 22" href="#" shape="poly" coords="239,252,185,190,138,144,69,149,58,185,78,223,118,242,230,275"/>
        <area  alt="" title="11 23" href="#" shape="poly" coords="213,68,246,113,250,169,271,229,248,240,193,184,143,108,167,63"/>
      </map>
    </div>
  <?php endif; ?>

  <?php if ($exposed): ?>
    <div class="view-filters">
      <?php print $exposed; ?>
    </div>
  <?php endif; ?>

  <?php if ($attachment_before): ?>
    <div class="attachment attachment-before">
      <?php print $attachment_before; ?>
    </div>
  <?php endif; ?>

  <?php if ($rows): ?>
    <div class="view-content">
      <?php print $rows; ?>
    </div>
  <?php elseif ($empty): ?>
    <div class="view-empty">
      <?php print $empty; ?>
    </div>
  <?php endif; ?>

  <?php if ($pager): ?>
    <?php print $pager; ?>
  <?php endif; ?>

  <?php if ($attachment_after): ?>
    <div class="attachment attachment-after">
      <?php print $attachment_after; ?>
    </div>
  <?php endif; ?>

  <?php if ($more): ?>
    <?php print $more; ?>
  <?php endif; ?>

  <?php if ($footer): ?>
    <div class="view-footer">
      <?php print $footer; ?>
    </div>
  <?php endif; ?>

  <?php if ($feed_icon): ?>
    <div class="feed-icon">
      <?php print $feed_icon; ?>
    </div>
  <?php endif; ?>

</div><?php /* class view */ ?>
