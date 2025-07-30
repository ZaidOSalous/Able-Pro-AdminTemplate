<!-- Required Js -->
<script src="<?= base_url('assets/js/plugins/popper.min.js') ?>"></script>
<script src="<?= base_url('assets/js/plugins/simplebar.min.js') ?>"></script>
<script src="<?= base_url('assets/js/plugins/bootstrap.min.js') ?>"></script>
<script src="<?= base_url('assets/js/plugins/i18next.min.js') ?>"></script>
<script src="<?= base_url('assets/js/plugins/i18nextHttpBackend.min.js') ?>"></script>

<script src="<?= base_url('assets/js/icon/custom-font.js') ?>"></script>
<script src="<?= base_url('assets/js/script.js') ?>"></script>
<script src="<?= base_url('assets/js/theme.js') ?>"></script>
<script src="<?= base_url('assets/js/multi-lang.js') ?>"></script>
<script src="<?= base_url('assets/js/plugins/feather.min.js') ?>"></script>
<div class="floting-button">
  <a href="https://1.envato.market/zNkqj6" class="btn btn btn-danger buynowlinks d-inline-flex align-items-center gap-2" data-bs-toggle="tooltip" title="Buy Now">
    <i class="ph-duotone ph-shopping-cart"></i>
    <span>Buy Now</span>
  </a>
</div>
<?php if(DARK_LAYOUT == 'default'){?>
<script>
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        dark_layout = 'true';
    } else {
        dark_layout = 'false';
    }
    layout_change_default();
    if (dark_layout == 'true') {
        layout_change('dark');
    } else {
        layout_change('light');
    }
</script>
<?php } ?>
<?php if(DARK_LAYOUT != 'default'){
    if(DARK_LAYOUT == 'true'){
        ?><script>layout_change('dark');</script><?php
    } else {
        ?><script>layout_change('light');</script><?php
    }
}?>
<?php if(THEME_CONTRAST == 'true'){
    ?><script>layout_theme_contrast_change('true');</script><?php
} else {
    ?><script>layout_theme_contrast_change('false');</script><?php
}?>
<?php if(BOX_CONTAINER == 'true'){
    ?><script>change_box_container('true');</script><?php
} else {
    ?><script>change_box_container('false');</script><?php
}?>
<?php if(CAPTION_SHOW == 'true'){
    ?><script>layout_caption_change('true');</script><?php
} else {
    ?><script>layout_caption_change('false');</script><?php
}?>
<?php if(RTL_LAYOUT == 'true'){
    ?><script>layout_rtl_change('true');</script><?php
} else {
    ?><script>layout_rtl_change('false');</script><?php
}?>
<?php if(PRESET_THEME != ""){
    ?><script>preset_change('<?= PRESET_THEME ?>');</script><?php
}?>

