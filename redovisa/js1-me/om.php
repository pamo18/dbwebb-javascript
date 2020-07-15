<?php
$filename = __DIR__ . "/om.md";
$text     = file_get_contents($filename);
$filter   = new \Anax\TextFilter\TextFilter();
$parsed   = $filter->parse($text, ["shortcode", "markdown"]);
echo $parsed->text;
?>
