<?php
$products = ["Classic Coat", "Minimal Dress", "Urban Jacket"];
$query = strtolower($_GET['query']);

foreach ($products as $product) {
    if (strpos(strtolower($product), $query) !== false) {
        echo "<p>$product</p>";
    }
}
?>
