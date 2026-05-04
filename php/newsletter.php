<?php
$email = $_POST['email'];
file_put_contents("subscribers.txt", $email . PHP_EOL, FILE_APPEND);
echo "Abonare realizată!";
?>
