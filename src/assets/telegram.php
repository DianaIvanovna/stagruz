<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$comment = $_POST['comment'];
$token = "1642019141:AAEHluhjnkL-rFKcNyOLIRnd4nBEIwj0p-s";
$chat_id = "-1001369813618";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'comment' => $comment,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: ./index.html#Footer');
} else {
  echo "Error";
}
?>